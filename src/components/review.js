import React from 'react';
import calcAvRate from "../hooks/calc-av-rate";
import Rate from "./rate";

import style from './review.module.css';


export default function Review(props) {
    return (
        <div className={style.review}>
            User: {props.review.user}<br/>
            Rating: <Rate rate={props.review.rating}/><br/>
            Text: {props.review.text}
        </div>
    );
}
