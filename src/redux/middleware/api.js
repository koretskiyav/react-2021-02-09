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

    let isValidResult = false;

    await fetch(...fetchParams)
      .then((result) => {
        isValidResult = result.ok;
        result.json().then((resultData) => {
          if (!isValidResult) {
            next({ ...rest, type: type + FAILURE, error: resultData });
            next(replace('/error'));
          } else {
            next({ ...rest, type: type + SUCCESS, data: resultData });
          }
        });
      })
      .catch((error) => console.log(error));
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error: error.message });
    next(replace('/error'));
  }
};
