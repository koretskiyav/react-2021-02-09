import Menu from '../components/menu/menu'
import Reviews from '../components/reviews/reviews'

export const restaurantInnerLinks = ({menu, reviews, id}) => [
  {
    title: 'Menu',
    elem: <Menu menu={menu} restaurantId={id} />
  },
  {
    title: 'Reviews',
    elem: <Reviews reviews={reviews} restaurantId={id} />,
  },
]