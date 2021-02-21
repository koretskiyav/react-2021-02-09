class BasketItemStruct {

  constructor(amount) {
    this.amount = amount
  }

  increment() {
    this.amount++;
  }

  decrement() {
    this.amount--;
  }

};

export default BasketItemStruct;