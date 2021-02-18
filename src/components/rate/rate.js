import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div data-id="rate">
    {[...Array(5)].map((_, i) => {
      const isActive = (i <= value - 1);

      return (
        <Star
          key={i}
          className={cn(styles.star, {[styles.checked]: isActive})}
          data-id={`rate-star${isActive ? '-active' : ''}`}
        />
      )
    })}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
