import {normalizedRestaurants} from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce(
    (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
    {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type , value} = action;

  switch (type) {
    case 'ADDREVIEWINRESTAURANT':
      const idReview = value.idReview;
      const idRestaurant = value.idRestaurant;
      const t = restaurants[idRestaurant].reviews.push(value.idReview)
      return { ...restaurants, [idRestaurant]: restaurants[idRestaurant]};
    default:
      return restaurants;
  }
};
