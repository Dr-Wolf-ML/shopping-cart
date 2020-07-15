export default {
  "ipd": {
    "item": "Super iPad",
    "price": 549.99,
    "deals": {
      "threeForTwo": false,
      "bulk": {
        "minQty": 5,
        "bulkPriceEach": "499.99"
      },
      "freebies": []
    }
  },
  "mbp": {
    "item": "MacBook Pro",
    "price": 1399.99,
    "deals": {
      "threeForTwo": false,
      "bulk": {
        "minQty": 0,
        "bulkPriceEach": 0
      },
      "freebies": ["vga", "ipd"]
    }
  },
  "atv": {
    "item": "Apple TV",
    "price": 109.50,
    "deals": {
      "threeForTwo": true,
      "bulk": {
        "minQty": 0,
        "bulkPriceEach": 0
      },
      "freebies": []
    }
  },
  "vga": {
    "item": "VGA adapter",
    "price": 30.00,
    "deals": {
      "threeForTwo": false,
      "bulk": {
        "minQty": 0,
        "bulkPriceEach": 0
      },
      "freebies": []
    },
  }
}
