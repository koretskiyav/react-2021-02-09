import React from 'react';

export default function Rate(props) {
    const rate = () => {
        return props.rate >= 1 && props.rate <= 5
    }
    return (
        rate ? <div>{props.rate}</div> : ''
    );
}