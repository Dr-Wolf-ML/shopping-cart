import React from 'react';

import Deals from './Deals';

const ProductItem = ({productInfo, value, handleInput, price, subtotal, sku}) => {
  const {item, deals} = productInfo;

  return(
    <>
      <p>{item}</p>
      <p className="right">{`$ ${price}`}</p>
      <p >
        <input type="text" value={value} onChange={e => handleInput(e, sku)}/>
      </p>
      <p className="right">{`$ ${subtotal}`}</p>
      <p ><Deals deals={deals} /></p>
    </>
  );
};

export default ProductItem;
