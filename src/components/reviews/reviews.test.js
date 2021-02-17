import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review/review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[1].reviews;
const review = restaurants[1].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
});

describe('Review', () => {
  it('review existence', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').exists()).toBe(true);
  });
});

describe('Review', () => {
  it('review.id existence and length', () => {
    const wrapper = mount(<Review review={review} />);
    expect(review.id.length).toBe(36);
  });
});
