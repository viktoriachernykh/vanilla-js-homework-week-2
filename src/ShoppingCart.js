class ShoppingCart {
  constructor() {
    this.items = []
  }  
  getItems() {
    return this.items
  }
  addItem(itemName, quantity, price) {
    this.itemName = itemName
    this.quantity = quantity
    this.price = price
    return this.items.push({
      name: this.itemName,
      quantity: this.quantity,
      pricePerUnit: this.price
    })
  }
  clear() {
    this.items = []
  }
  total() {
    this.totalPrice = this.items.reduce((sum, item) => sum + item.pricePerUnit * item.quantity, 0)
    return this.totalPrice
  }
}

const cart = new ShoppingCart()

// when running with node:
// console.log(cart.getItems()) // returns [] 
// console.log(cart.addItem('tomato', 5, 3.5)) // returns 1
// console.log(cart.addItem('paper', 11, 2.5)) // returns 2
// console.log(cart.getItems()) // returns [ { name: 'tomato', quantity: 5, pricePerUnit: 3.5 }, { name: 'paper', quantity: 11, pricePerUnit: 2.5 } ]
// // console.log(cart.clear()) // returns undefined
// console.log(cart.getItems()) // returns [], cart.clear() worked
// console.log(cart.total()) // returns 45 (which is 5 * 3.5 + 2.5 * 11 = 17.5 + 27.5 = 45)

module.exports = ShoppingCart