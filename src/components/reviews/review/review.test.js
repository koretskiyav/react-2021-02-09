import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';
Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0]; 

describe('Review', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Review review={review}/>);
  });

 it('check name is not Anonymous', () => {
   expect(wrapper.find('[data-id="user"]').text()).toBe('Antony')
 })
  it('check text is based', () => {
    expect(wrapper.find('[data-id="text"]').text()).toBe('Not bad')
  })

  it('check rating is based', () => {
    expect(wrapper.find('[data-id="rating"]').text()).toBe(5)
  })
});
