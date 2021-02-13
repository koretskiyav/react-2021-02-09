import React from 'react';
import Rate from './rate';

import style from './review.module.css';

function Reviews(props) {
    const { reviews } = props;

    return (
        <section>
            <h5>Reviews</h5>
            {reviews.map((review) =>
                <article key={review.id} className={style.card}>
                    <h6 className={style.title}>{review.user}</h6>
                    <Rate rating={review.rating} />
                    <p>{review.text}</p>
                </article>
            )}
        </section>
    );
}

export default Reviews;
