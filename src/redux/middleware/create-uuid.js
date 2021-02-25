import { v4 as uuidv4 } from 'uuid';
import { SUBMITREVIEW } from '../constants'

export default (store) => (next) => (action) => {
  if (action === SUBMITREVIEW ) return uuidv4();
}
