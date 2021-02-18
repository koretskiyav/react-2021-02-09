import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];


Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find("[data-id='review']").length).toBe(1);
  });
  it('should render user name', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find("[data-id='review-user']").length).toBe(1);
    expect(wrapper.find("[data-id='review-user']").text()).toBe(review.user);
  });
  it('should set username to "Anonymous" if no username passed', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    wrapper.setProps({user: undefined});
    expect(wrapper.find("[data-id='review-user']").text()).toBe("Anonymous");
  })  
  it('should render user comment', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find("[data-id='review-comment']").length).toBe(1);
    expect(wrapper.find("[data-id='review-comment']").text()).toBe(review.text);
  })  
  it('should render <Rate /> component', () => {
    const wrapper = mount(<Review key={review.id} {...review} />);
    expect(wrapper.find("[data-id='rate']").length).toBe(1);
  })
});