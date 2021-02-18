import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should rewiev user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Antony');
  });
  it('should rewiev text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('Not bad');
  });
});
