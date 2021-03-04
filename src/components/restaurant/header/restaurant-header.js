import React from 'react';

import Rate from '../../rate'
import Banner from '../../banner'
import {createStructuredSelector} from 'reselect'
import {averageRatingSelector} from '../../../redux/selectors'
import {connect} from 'react-redux';
import styles from '../../restaurants/restaurants.module.css'
import {NavLink} from 'react-router-dom'

const RestaurantHeader = ({averageRating, restaurant, links}) => {
  const { name, id } = restaurant

  return (
    <>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        {links.map(({ title }, index) => (
          <>
            <NavLink
              key={title + index}
              to={`/restaurants/${id}/${title.toLowerCase()}`}
              className={styles.tab}
              activeClassName={styles.active}
            >
              {title}
            </NavLink>
          </>
        ))}
      </div>
    </>
  )

}

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector
  })
)(RestaurantHeader);