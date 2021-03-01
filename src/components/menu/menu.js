import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

import {loadMenu} from '../../redux/actions'
import connect from 'react-redux/lib/connect/connect'
import {productsLoadedSelector, productsLoadingSelector} from '../../redux/selectors'
import Loader from '../loader'

import {includesNewItem} from '../../utils'

const Menu = ({ menu, restaurantId, loading, loaded, loadMenu }) => {

  useEffect(() => {
    if (!loading && includesNewItem(menu, loaded)) {
      loadMenu(restaurantId)
    }
  }, [loading, loaded, loadMenu, restaurantId, menu])

  if (loading) return <Loader />;
  if (includesNewItem(menu, loaded)) return 'No data :(';

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );

}

Menu.propTypes = {
  restaurantId: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string)
}

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state, props)
  }),
  { loadMenu }
)(Menu);


