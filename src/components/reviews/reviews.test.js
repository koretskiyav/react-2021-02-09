import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews'

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  const wrapper = mount(<Reviews reviews={reviews}/>);
  it('should render', () => {
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });
  it('should render correct array of children elements (Review)', () => {
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });
})