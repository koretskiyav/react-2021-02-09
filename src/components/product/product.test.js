import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';

import {restaurants} from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({adapter: new Adapter()});

describe('Product', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Product product={product} />);
	});
	it('should render', () => {
		expect(wrapper.find('[data-id="product"]').length).toBe(1);
	});
	it('should init from 0 amount', () => {
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
	});
	it('should increment amount', () => {
		wrapper.find('[data-id="product-increment"]').simulate('click');
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
	});
	xit('should decrement amount', () => {
		wrapper.find('[data-id="product-increment"]').simulate('click');
		wrapper.find('[data-id="product-increment"]').simulate('click');
		wrapper.find('[data-id="product-decrement"]').simulate('click');
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
	});
	it('should decrement amount', () => {
		wrapper.find('[data-id="product-increment"]').invoke('onClick')();
		wrapper.find('[data-id="product-increment"]').invoke('onClick')();
		wrapper.find('[data-id="product-decrement"]').invoke('onClick')();
		expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
	});
	it('should fetch data', () => {
		const fn = jest.fn();
		mount(<Product product={product} fetchData={fn} />);
		expect(fn).toBeCalledWith(product.id);
	});
});
