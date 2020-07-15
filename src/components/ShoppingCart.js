import React from 'react';

import products from '../api/products';
import ShippingList from './ShippingList';

const ShoppingCart = ({shippingList, total}) => {

  const listItem = Object.keys(shippingList).map(sku => {
    const shippingItem = products[sku].item;
    const purchaseQty = shippingList[sku].purchaseQty;
    const free = shippingList[sku].free;
    
    return (
      <ShippingList
        key={sku}
        shippingItem={shippingItem}
        purchaseQty={purchaseQty}
        free={free}
      />
    );
  });

  const weAreShipping = (
    <>
      <p>We are shipping:</p><p></p><p></p><p></p><p></p>
    </> 
  );
  const pleaseSelectItems = (
    <>
      <p>Please select items...</p><p></p><p></p><p></p><p></p>
    </>
  );

  return(
    <>
      <>
      <p className="total">ShoppingCartTotal:</p>
      <p/> 
      <p/>
      <p className="total right">{`$ ${total.toFixed(2)}`}</p>
      <p/>
      </>
      {total ? weAreShipping: pleaseSelectItems}
      {listItem}
    </>
    
  )
};

export default ShoppingCart;
