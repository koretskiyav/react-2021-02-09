class BasketItemStruct {

  constructor(product, amount) {
    this.product = product;
    this.amount = amount;
  }

  increment() {
    this.amount++;
  }

  decrement() {
    this.amount--;
  }

  price() {
    return this.amount * this.product.price;
  };

};

export default BasketItemStruct;