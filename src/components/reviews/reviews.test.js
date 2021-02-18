import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-name="review"]').length).toBe(2);
  });
  it('should render review data', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    reviews.map((review) => {
      expect(wrapper.find(`[data-id="review-${review.id}"] [data-id="review-user"]`).text()).toBe(review.user);
      expect(wrapper.find(`[data-id="review-${review.id}"] [data-id="review-text"]`).text()).toBe(review.text);
    });
  });

});
