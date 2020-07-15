import React from 'react';

const ShippingList = ({shippingItem, purchaseQty, free}) => {

    const howMany = num => {
      return num === 1 ? 'is' : 'are';
    };

    if (purchaseQty && free) {
      return (
        <>
          <p></p><p></p>
          <p>{purchaseQty + free}</p>
          <p>{shippingItem}</p>
          <p>{`(${free} of those ${howMany(free)} FREE!)`}</p>
        </>
      )
    };

    if (purchaseQty) {
      return (
        <>
          <p></p><p></p>
          <p>{purchaseQty}</p>
          <p>{shippingItem}</p>
          <p></p>
        </>
      )
    };

    if (free) {
      return (
        <>
          <p></p><p></p>
          <p>{free}</p>
          <p>{shippingItem}</p>
          <p>{`(All ${free} ${howMany(free)} FREE!)`}</p>
        </>
      )
    };

    return <></>;
};

export default ShippingList;
