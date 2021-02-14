import React from 'react';

export default function Rate(props) {

  const rate = props.rate.toFixed(1)
  const stars = Array(Math.round(rate)).fill("⭐");

  return (
    <div>
      <p>{stars} ({rate})</p>
    </div>
  );

}