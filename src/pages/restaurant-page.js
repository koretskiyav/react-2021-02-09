import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
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

// Tabs.propTypes = {
//   tabs: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       content: PropTypes.element.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default RestaurantPage;
