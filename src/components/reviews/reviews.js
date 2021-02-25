import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({reviews}) => {
	return (
		<div className={styles.reviews}>
			{reviews.map((review) => (
				<Review key={review} {...review} />
			))}
			<ReviewForm />
		</div>
	);
};

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			userId: PropTypes.string,
			text: PropTypes.string,
			rating: PropTypes.number,
		}).isRequired
	).isRequired,
};

export default Reviews;
