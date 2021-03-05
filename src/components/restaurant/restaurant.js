import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  let { path, url } = useRouteMatch();
  const tabs = [
    { title: 'Menu', url: `${url}/menu` },
    { title: 'Reviews', url: `${url}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${url}/menu`} />
        </Route>
        <Route path={`${path}/menu`}>
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
        <Route path={path}>
          <h3>Please select a section above</h3>
        </Route>
      </Switch>
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
