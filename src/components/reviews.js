import React, { useMemo } from 'react';

import Review from './review';

import Rate from "./rate";
import calcAvRate from "../hooks/calc-av-rate";

import style from "./reviews.module.css";


export default function Reviews(props) {
    const currentRate = useMemo(
        () =>  calcAvRate(props.reviews),
        [props.reviews]
    );

    return (
        <div className={style.reviews}>
            <div className={style.reviews_avg}>Average rating: <Rate rate={currentRate}/></div>

            {props.reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    );
}
