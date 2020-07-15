import React from 'react';
import products from '../api/products';

const Deals = ({deals}) => {
  const specials = Object.keys(deals).map(deal => {
  
    switch (deal) {

      case 'threeForTwo':
        return deals[deal] ? `Get 3 for the price of 2` : '';

      case 'bulk':
        const {minQty, bulkPriceEach} = deals[deal];
        return minQty > 1 ?
          `Buy ${minQty} or more and pay only $${bulkPriceEach} each` : '';
      
      case 'freebies':
        const items = [deals[deal]][0];
        let itemList = `Get a FREE `;

        if (items.length) {
          items.forEach((item, index) => {
            index === 0 ?
              itemList += products[item].item :
              itemList += ' and a ' + products[item].item;
          });
          return itemList;
        }
        break;

      default: break;
    }
    return '';
  });

  return(
    <>
      {specials}
    </>
  )
}

export default Deals;