import React, {useMemo} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {restaurantsSelector} from "../../redux/selectors";

const Restaurants = ({ restaurants }) => {

    const tabs = useMemo(() => {
            return Object.entries(restaurants).map((restaurant) => (
                restaurant[1]
            )).map((restaurant) => ({
                title: restaurant.name,
                content: <Restaurant restaurant={restaurant} />,
            }));
        },
        [restaurants]
    );

    return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
    restaurants: PropTypes.shape(
        PropTypes.string.isRequired,
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state)
}))(Restaurants);
