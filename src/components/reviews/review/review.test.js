import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import {restaurants} from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({adapter: new Adapter()});

describe('Review', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Review {...review} />);
	});

	it('should render', () => {
		expect(wrapper.find('[data-test-id="review"]').length).toBe(1);
	});

	it('review has user', () => {
		expect(wrapper.find('[data-test-id="review-name"]').text().length).toBeGreaterThan(0);
	});
	it('review has comment', () => {
		expect(wrapper.find('[data-test-id="review-comment"]').text().length).toBeGreaterThan(0);
	});
	it("review has rate", () => {
		const wrapper = mount(<Review {...review} />);
		expect(wrapper.find('[data-test-id="review-rate"]').props().value).toBeLessThan(6);
		expect(wrapper.find('[data-test-id="review-rate"]').props().value).toBeGreaterThan(-1);
	});

	it("review doesn't have user", () => {
		delete review.user;
		const wrapper = mount(<Review {...review} />);
		expect(wrapper.find('[data-test-id="review-name"]').text()).toEqual('Anonymous');
	});
	it("review doesn't have rate", () => {
		delete review.rating;
		const wrapper = mount(<Review {...review} />);
		expect(wrapper.find('[data-test-id="review-rate"]').props().value).toEqual(0);
	});
});
