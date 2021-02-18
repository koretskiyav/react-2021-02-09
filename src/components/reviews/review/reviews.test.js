import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const count = wrapper.find('[data-id="review-component"]').length;
    expect(count).toEqual(2);
  });
});