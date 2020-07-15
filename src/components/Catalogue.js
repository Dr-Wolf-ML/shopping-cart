import React, {useState, useEffect} from 'react';

import products from '../api/products';
import ProductItem from './ProductItem';
import ShoppingCart from './ShoppingCart';

const Catalogue = () => {
  
  // Initial State
  const initialState = () => {
    Object.keys(products).map(sku => {
      initialState[sku] = {
        'purchaseQty': null,
        'payableQty': 0,
        'free': 0,
        'price': products[sku].price,
        'subtotal': 0,
      };
    });

    return initialState;
  };

  // Components State
  const [shoppingCart, setShoppingCart] = useState(initialState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let allSubtotals = 0;
    Object.keys(shoppingCart).map(sku => {
      allSubtotals += shoppingCart[sku].subtotal;
    })
    setTotal(allSubtotals);
  }, [shoppingCart, total]);

  const handleInput = (e, sku) =>{
    // ShoppingCart
    const purchaseQty = /^\+?(0|[1-9]\d*)$/.test(e.target.value) ? parseFloat(e.target.value) : null;
    let payableQty = purchaseQty;
    let price = shoppingCart[sku].price;
    let subtotal = payableQty * price;

    // Deals
    const threeForTwo = products[sku].deals.threeForTwo;
    const minQty = products[sku].deals.bulk.minQty;
    const bulkPriceEach = parseFloat(products[sku].deals.bulk.bulkPriceEach);
    const freebies = products[sku].deals.freebies;

    // Cart assembly objects
    let cart = {};
    let freebieCart = {};

    // 342
    if (threeForTwo) {
      payableQty = purchaseQty - Math.trunc(purchaseQty / 3);
      subtotal = payableQty * price;
    };

    // bulk
    if (minQty) {
      price = purchaseQty >= minQty ? bulkPriceEach : price;
      subtotal = purchaseQty * price;
    }

    // freebies
    if (freebies.length) {
      freebies.forEach(freebie => {
        freebieCart = {
          ...freebieCart,
          [freebie]: {
            ...shoppingCart[freebie],
            'free': purchaseQty,
          }
        };
      });
    };

    cart = {
      ...shoppingCart,
      [sku]: {
        ...shoppingCart[sku],
        'purchaseQty': purchaseQty,
        'payableQty': payableQty,
        'price': price,
        'subtotal': subtotal,
      }
    }

    setShoppingCart(Object.assign({}, {...cart, ...freebieCart}));
  };

  const productInfo = Object.keys(products).map(sku => {
    return (
      <ProductItem
        key={sku}
        sku={sku}
        productInfo={products[sku]}
        value={shoppingCart[sku].purchaseQty}
        handleInput={handleInput}
        price={shoppingCart[sku].price.toFixed(2)}
        subtotal={shoppingCart[sku].subtotal.toFixed(2)}
      />
    );
  })

  return (
    <div className="catalogue">
      <h3>Catalogue:</h3>
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Buy</h5>
          <h5>Subtotal</h5>
          <h5>Specials</h5>
      {productInfo}
      <ShoppingCart shippingList={shoppingCart} total={total}/>
    </div> 
  )
}

export default Catalogue;
