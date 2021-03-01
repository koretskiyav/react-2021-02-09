import { useEffect } from 'react';

import Loader from '../components/loader';

export default function useLoader(props, loadFunc, ...loadParams) {
  const { loading, loaded, error, [loadFunc]: loadEntities } = props;

  useEffect(() => {
    if (!loading && !(loaded || error)) loadEntities(...loadParams);
  }, [loading, loaded, error, loadEntities, ...loadParams]);

  if (loading) return <Loader />;

  if (!loaded) {
    error && console.log(error);
    return 'No data :(';
  }

  return false;
}
