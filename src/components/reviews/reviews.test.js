import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Reviews from './reviews';
import { restaurants } from '../../fixtures';

const rev = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });
describe('Reviews', () => {
  it('should render', () => {
    const wrapper = shallow(<Reviews key={rev[0].id} reviews={rev} />);
    expect(wrapper.find('[data-id="reviews-test"]').length).toBe(1);
  });
});
