import React from 'react';
import Menu from '../menu'
import Reviews from '../Reviews/index'
import Rate from '../Rate/index'

const style = {
  display: 'flex',
  alignItems: 'center'
}

export default function Restaurant({ params: { menu, reviews } }) {
  return(
    <div>
      <Menu menu={menu} />
      <Reviews params={reviews} />

      <div style={style}>
        <span>Cредний рейтинг:</span>
        <Rate rate='4' />
      </div>
    </div>
  )
}