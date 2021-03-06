import { replace } from 'connected-react-router';
import { REQUEST, SUCCESS, FAILURE, CLEAR_ERROR } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { data, CallAPI, type, ...rest } = action;
  next({ ...rest, type: type + REQUEST });

  try {
    const fetchParams = [CallAPI];

    if (data) {
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetchParams.push(request);
    }
    const dataResponse = await fetch(CallAPI).then((res) => res.json());
    next({ ...rest, type: type + SUCCESS, data: dataResponse });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error: error.message });
    next(replace('/error'));
  }
};
