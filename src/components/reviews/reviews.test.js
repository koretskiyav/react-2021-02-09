import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const reviews = restaurants[0].reviews;

describe('Review', () => {
  it('should rewiev components count', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    const reviewComponentsCount = wrapper.find('[data-id="review-component"]')
      .length;
    expect(reviewComponentsCount).toEqual(reviews.length);
  });
});
