import React from 'react';
import Rate from '../Rate/Rate';

export default function Review(props) {
  let { id, user, text, rating } = props.review;

  return (
    <div>
      {!!id && <div>Id: {id}</div>}
      {!!user && <div>Name: {user}</div>}
      {!!text && <div>Text: {text}</div>}
      <Rate rate={rating} />
    </div>
  );
}
