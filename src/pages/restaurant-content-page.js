import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';
import Menu from '../components/menu';
import Reviews from '../components/reviews';
import styles from '../components/tabs/tabs.module.css';

const RestaurantPage = ({ restaurantId }) => {
  const tabs = [
    {
      title: 'Menu',
      content: <Menu />,
    },
    {
      title: 'Reviews',
      content: <Reviews />,
    },
  ];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title }) => (
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
        <Route path="/restaurants/:restaurantId" exact component={Menu}>
          <Redirect to={`/restaurants/${restaurantId}/menu`} />
        </Route>
        <Route path="/restaurants/:restaurantId/menu" component={Menu} />
        <Route path="/restaurants/:restaurantId/reviews" component={Reviews} />
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
