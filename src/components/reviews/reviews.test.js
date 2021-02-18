import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-test="reviews"]').length).toBe(1);
  });

  // it('should contains child component Review', () => {
  //   const wrapper = mount(<Reviews reviews={reviews} />);
  //   expect(wrapper.exists('.reviews_reviews__n9n4q')).to.equal(true);
  // });
});
