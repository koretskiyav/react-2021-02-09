import React from 'react';

import style from "./rate.module.css";

export default function Rate(props) {
    const showRate = () => {
        return props.rate >= 1 && props.rate <= 5
    }

    const width = () => {
        return (props.rate / 5 * 100) + '%'
    };
    return (
        showRate() ? <div className={style.rate}>
            <div className={style.rate_stars}>
                <div className={style.rate_stars_top} style={{'width': width()}}/>
            </div>
            <div className={style.rate_num}>{props.rate}</div>
        </div> : ''
    );
}
