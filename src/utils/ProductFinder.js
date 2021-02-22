import { restaurants } from '../fixtures';

export const getProductById = (id) => {
  const products = restaurants.map((restaurant) => restaurant.menu).reduce((summary, array) => summary.concat(array), []);
  return products.find((product) => product.id === id);
}