import { restaurants } from '../../fixtures';

function getProductName(productID) {
  for (var id in restaurants) {
    let menu = restaurants[id]['menu'];

    for (var key in menu) {
      if (productID === menu[key]['id']) {
        return menu[key]['name'];
      }
    }
  }
}

function getProductPrice(productID, count) {
  for (var id in restaurants) {
    let menu = restaurants[id]['menu'];

    for (var key in menu) {
      if (productID === menu[key]['id']) {
        return menu[key]['price'] * count;
      }
    }
  }
}

function getCartTotal(orders) {
  let total = 0;

  Object.keys(orders).map(
    (productID) =>
      (total = total + getProductPrice(productID, orders[productID]))
  );

  return total;
}

export { getProductName, getProductPrice, getCartTotal };
