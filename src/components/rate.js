import React from 'react';

export default function Rate(props) {
  return (
    <span>&#9733;{props.rating.toFixed(1)}</span>
  )
}