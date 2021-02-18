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
	it('should render user', () => {
		const wrapper = mount(<Review key={review.id} {...review} />);
		expect(wrapper.find("[data-id='review_user']").length).toBe(1);
		expect(wrapper.find("[data-id='review_user']").text()).toBe(review.user);
	});
	it('should render comment', () => {
		const wrapper = mount(<Review key={review.id} {...review} />);
		expect(wrapper.find("[data-id='review_comment']").length).toBe(1);
		expect(wrapper.find("[data-id='review_comment']").text()).toBe(review.text);
	});
	it('should render rate', () => {
		const wrapper = mount(<Review key={review.id} {...review} />);
		expect(wrapper.find("[data-id='rate']").length).toBe(1);
	})
});