import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';

import styles from './restaurant.module.css';
import { averageRatingSelector } from '../../redux/selectors';
import { NavLink, Route } from 'react-router-dom';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    { title: 'Menu', path: `/restaurants/${id}/menu`, content: <Menu menu={menu} restaurantId={id} /> },
    {
      title: 'Reviews',
      path: `/restaurants/${id}/reviews`,
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ title, path }) => (
          <NavLink
            key={title}
            className={styles.tab}
            activeClassName={styles.active}
            to={path}
          >
            {title}
          </NavLink>
        ))}
      </div>
      <Route path={`/restaurants/${id}`} exact>
        <div>
          {name} restaurant info
        </div>
      </Route>
      <Route path={`/restaurants/${id}/menu`}>
        <Menu menu={menu} restaurantId={id} />
      </Route>
      <Route path={`/restaurants/${id}/reviews`}>
        <Reviews reviews={reviews} restaurantId={id} />
      </Route>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(Restaurant);
