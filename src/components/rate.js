import React from 'react';

function Rate(props) {
    const { rating } = props;
    let average = null;

    if (Array.isArray(rating)) {
        const sum = rating.reduce((acc, value) => acc + value, 0);
        average = Math.round(sum / rating.length * 100) / 100;
    }

    return (
        <div>Rating: {average || rating}{average ? ` from ${rating.length} review(s)` : ''}</div>
    );
}

export default Rate;
