import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';

import styles from './restaurant.module.css';

import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, subpage, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    {
      slug: 'menu',
      title: 'Menu',
      link: `/restaurants/${id}/menu`,
      content: <Menu menu={menu} restaurantId={id} />,
    },
    {
      slug: 'reviews',
      title: 'Reviews',
      link: `/restaurants/${id}/reviews`,
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];
  const content = tabs.filter((tab) => tab.slug === subpage)[0]?.content;
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ title, slug, link }) => (
          <span
            key={slug}
            className={cn(styles.tab, { [styles.active]: slug === subpage })}
          >
            <NavLink to={link} className={styles.link}>
              {title}
            </NavLink>
          </span>
        ))}
        {content ? (
          content
        ) : (
          <p>
            <NavLink to={`/restaurants/${id}/menu`}>Open menu</NavLink>
          </p>
        )}
      </div>
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
