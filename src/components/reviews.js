import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {props.reviews.map((review)=>{
          return (
            <li key={review.id}>
              <p><b>Name</b>: {review.user}</p>
              <p><b>Text</b>: {review.text}</p>
              <p><b>Rating</b>: {<Rate rate={review.rating}/>}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
