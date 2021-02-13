import React from 'react';

export default function Rate(props) {

  const stars = Array(Math.round(props.rate)).fill("⭐");

  return (
    <div>
      <p>{stars} ({props.rate})</p>
    </div>
  );

}