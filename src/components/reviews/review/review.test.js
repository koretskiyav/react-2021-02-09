import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  describe('with data', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Review {...review} />);
    });

    it('should render', () => {
      expect(wrapper.find('[data-id="review"]').length).toBe(1);
    });
    it('should shows user', () => {
      expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
    });
    it('should shows text', () => {
      expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
    });
    it('should shows rate', () => {
      expect(wrapper.find('Rate').length).toBe(1);
    });
  });

  describe('with no data', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Review rating={3} />);
    });

    it('should render', () => {
      expect(wrapper.find('[data-id="review"]').length).toBe(1);
    });
    it('should shows user', () => {
      expect(wrapper.find('[data-id="review-user"]').text()).toBe(Review.defaultProps.user);
    });
    it('should shows text', () => {
      expect(wrapper.find('[data-id="review-text"]').text()).toBe(Review.defaultProps.text);
    });
  });
});
