import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

const {user, rating, text} = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('has username', () => {
    const wrapper = mount(<Review rating={rating} text={text} user={user} />);
    expect(wrapper.find('[data-id="review-name"]').length).toBeGreaterThan(0);
  });
  it('has rating', () => {
    const wrapper = mount(<Review rating={rating} text={text} user={user} />);
    expect(wrapper.find('[data-id="review-rate"]').length).toBeGreaterThan(0);
  });
  it('has text', () => {
    const wrapper = mount(<Review rating={rating} text={text} user={user} />);
    expect(wrapper.find('[data-id="review-text"]').length).toBeGreaterThan(0);
  })
});
