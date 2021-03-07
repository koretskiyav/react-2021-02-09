import { REQUEST, SUCCESS, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, method, data, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  const options =
    method === 'POST'
      ? {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      : {};

  try {
    const res = await fetch(CallAPI, options);
    const data = await res.json();

    if (!res.ok) {
      throw data;
    }

    return next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
