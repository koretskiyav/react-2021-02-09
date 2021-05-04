import React from 'react';
import Rate from '../Rate/index';

export default function Reviews({ params }) {
  return (
    <div>
      <h2>Reviews</h2>

      { params.map(({id, user, text, rating}) => (
        <div key={id}>
          <h3>{user}</h3>
          <p>{text}</p>
          <Rate rate={rating} />
          <hr />
        </div>
      )) }
    </div>
  )
}