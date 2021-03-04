import styles from '../../restaurants/restaurants.module.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {restaurantsListSelector} from '../../../redux/selectors'

const headerMenu = ({restaurants}) => {

  return (
    <div className={styles.tabs}>
      {restaurants.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`/restaurants/${id}`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      ))}
    </div>
  )

}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(headerMenu)