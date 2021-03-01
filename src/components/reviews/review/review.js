import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {
  reviewWitUserSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../../redux/selectors';
import { loadUsers } from '../../../redux/actions';
import Loader from '../../loader';

const Review = ({ loading, loaded, user, text, rating, loadUsers }) => {
  useEffect(() => {
    if (!loading && !loaded) loadUsers();
  }, [loading, loaded, loadUsers]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data...';

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
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(
  (state, props) => ({
    ...reviewWitUserSelector(state, props),
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  { loadUsers }
)(Review);
