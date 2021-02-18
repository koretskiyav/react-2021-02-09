import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({user, text, rating}) => (
	<div data-test-id="review" className={styles.review}>
		<div className={styles.content}>
			<div>
				<h4 data-test-id="review-name" className={styles.name}>{user}</h4>
				<p data-test-id="review-comment" className={styles.comment}>{text}</p>
			</div>
			<div className={styles.rate}>
				<Rate data-test-id="review-rate" value={rating} />
			</div>
		</div>
	</div>
);
Review.propTypes = {
	user: PropTypes.string,
	text: PropTypes.string.isRequired,
	rating: PropTypes.number,
};
Review.defaultProps = {
	user: 'Anonymous',
};

export default Review;
