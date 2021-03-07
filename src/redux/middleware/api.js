import { push, replace } from 'connected-react-router';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, params = {}, type, success, failure, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  try {
    let ok;
    const data = await fetch(CallAPI, params).then((res) => {
      ok = res.ok;
      return res.json();
    });
    next({ ...rest, type: type + SUCCESS, data, ok });

    if (ok && success) next(push({ pathname: success, message: data }));
    if (!ok && failure) next(push({ pathname: failure, message: data }));
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
    next(replace('/error'));
  }
};
