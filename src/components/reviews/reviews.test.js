import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import Review from './review';

import { restaurants } from '../../fixtures';

const reviews = restaurants[0].reviews;
const singleReview = reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find("[data-id='reviews']").length).toBe(1);
  });
  it('should render <Review /> component', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.containsMatchingElement(<Review key={singleReview.id} {...singleReview}/>)).toBeTruthy();
  });
  it('should not render <Review /> components if no reviews passed', () => {
    const wrapper = mount(<Reviews reviews={[]}/>);
    expect(wrapper.exists('[data-id="review"]')).toBeFalsy();
  });
  it('can render multiple reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="review"]').length > 1).toBeTruthy(); 
  });
  it('should not render more/less reviews than passed', () => {
    const wrapper = mount(<Reviews reviews={reviews}/>);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length); 
  })
});