import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should render name', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="name"]').length).toBe(1);
  });
  it('should render comment', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="comment"]').length).toBe(1);
  });
  it('should render rating', () => {
    const wrapper = mount(<Review review={review} />);
    expect(wrapper.find('[data-id="rating"]').length).toBe(1);
  });
});
