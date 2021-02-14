import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {

  const reducer = (accumulator, item) => { return accumulator + item.rating };
  const rating = props.restaurant.reviews.length > 0 ? (props.restaurant.reviews.reduce(reducer, 0) / props.restaurant.reviews.length) : 0;

  return (
    <div key={props.restaurant.id}>
    <Rate rate={rating} />
    <Menu menu={props.restaurant.menu} />
    <Reviews reviews={props.restaurant.reviews}/>
    </div>
  )
}

