import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {

  var rating = 0;
  
  if (props.restaurant.reviews.length > 0) {
    rating = (props.restaurant.reviews.map((review) => review.rating)
    .reduce((accumulator, item) => accumulator + item ) / props.restaurant.reviews.length)
    .toFixed(1);
  }

  return (
    <div key={props.restaurant.id}>
    <Rate rate={rating} />
    <Menu menu={props.restaurant.menu} />
    <Reviews reviews={props.restaurant.reviews}/>
    </div>
  )
}

