import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadUsers } from '../../../redux/actions';
import {
  reviewWitUserSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  usersErrorSelector,
} from '../../../redux/selectors';
import useLoader from '../../../hooks/use-loader';

import Loader from '../../loader';
import Rate from '../../rate';

import styles from './review.module.css';

const Review = (props) => {
  const { user, text, rating } = props;

  const loader = useLoader(props, 'loadUsers');
  if (loader) return loader;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
  // from connect
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.object,
  loadUsers: PropTypes.func.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(
  (state, props) => ({
    ...reviewWitUserSelector(state, props),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
    error: usersErrorSelector(state),
  }),
  { loadUsers }
)(Review);
