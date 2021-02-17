import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-type="review"]').length).toBe(1);
  });
  it('contains name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4[data-type="review-name"]').text()).toBe(
      review.user
    );
  });
  it('contains text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('p[data-type="review-text"]').text()).toBe(review.text);
  });
  it('contains rating', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('svg[data-type="rate-star-full"]').length).toBe(
      review.rating
    );
  });
});
