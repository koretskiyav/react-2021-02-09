import { replace, push } from 'connected-react-router';
import { REQUEST, SUCCESS, FAILURE, SAVE_ORDER, CLEAR_BASKET } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  try {
    const init = rest.init !== undefined ? rest.init : {};
    const response = await fetch(CallAPI, init).then((res) => res);
    const data = await response.json();
    if (type === SAVE_ORDER) {
      if (response.status === 200) {
        next({ type: CLEAR_BASKET });
        next(push('/success'));
      } else {
        next({ type: type + FAILURE, message: data});
        next(push('/error'));
      }
    }
    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
    next(replace('/error'));
  }
};
