import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
        data-type={i <= value - 1 ? 'rate-star-full' : 'rate-star'}
      />
    ))}
  </div>
);

Rate.defaultProps = {
  value: 0,
};

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
