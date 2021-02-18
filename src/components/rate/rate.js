import React from 'react';
import cn from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';
import PropTypes from "prop-types";

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star data-id="bal"
        key={i}
        className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
      />
    ))}
  </div>
);

Rate.propType = {
  value: PropTypes.number.isRequired
}

export default Rate;
