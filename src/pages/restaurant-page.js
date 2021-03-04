import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../components/menu';
import Reviews from '../components/reviews';
import styles from '../components/restaurant/restaurant.module.css';

const RestaurantPage = ({
  restaurant: { id: restaurantId, reviews, menu },
}) => {
  const tabs = ['Menu', 'Reviews'];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map((title) => (
          <NavLink
            key={title}
            to={`/restaurants/${restaurantId}/${title.toLocaleLowerCase()}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            <span key={title}>{title}</span>
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path="/restaurants/:restaurantId" exact>
          <Redirect to={`/restaurants/${restaurantId}/menu`} />
        </Route>
        <Route
          path="/restaurants/:restaurantId/menu"
          render={(props) => (
            <Menu {...props} restaurantId={restaurantId} menu={menu} />
          )}
        />
        <Route
          path="/restaurants/:restaurantId/reviews"
          render={(props) => (
            <Reviews {...props} restaurantId={restaurantId} reviews={reviews} />
          )}
        />
      </Switch>
    </>
  );
};

RestaurantPage.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reviews: PropTypes.array,
    menu: PropTypes.array,
  }).isRequired,
};

export default RestaurantPage;
