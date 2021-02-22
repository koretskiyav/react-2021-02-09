import { CARTOPEN, CARTCLOSE, CARTTOGGLE } from '../constants';

export default (cartActive = false, action) => {
  switch (action.type) {
    case CARTOPEN:
      return true;
    case CARTCLOSE:
      return false;
    case CARTTOGGLE:
      return !cartActive;
    default:
      return cartActive;
  }
};
