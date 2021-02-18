import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render Reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should render with empty reviews array', () => {
    const wrapper = mount(<Reviews reviews={[]} />);
    expect(wrapper.find('[data-id="reviews"]').children().length).toBe(0);
  });
  it('should render Review elements with particular values inside', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-content"]').length).toBe(
      reviews.length
    );
    expect(wrapper.find('[data-id="review-name"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="review-comment"]').length).toBe(
      reviews.length
    );
    expect(wrapper.find('[data-id="review-rate"]').length).toBe(reviews.length);
    expect(wrapper.find('[data-id="rate"]').length).toBe(reviews.length);
    expect(
      wrapper.containsAnyMatchingElements([
        <h4>{reviews[0].user}</h4>,
        <h4>{reviews[1].user}</h4>,
      ])
    ).toBeTruthy();
    expect(
      wrapper.containsAnyMatchingElements([
        <p>{reviews[0].text}</p>,
        <p>{reviews[1].text}</p>,
      ])
    ).toBeTruthy();
  });
});
