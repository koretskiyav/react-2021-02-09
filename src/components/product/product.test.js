import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
  it('should init from 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} />);
    const incrementBtn = wrapper.find('[data-id="product-increment"]');
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');

    const amount = wrapper.find('[data-id="product-amount"]');

    expect(amount.text()).toBe('2');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(amount.text()).toBe('1');
  });
  it('should decrement button click', () => {
    const fn = jest.fn();
    const wrapper = mount(<Product product={product} decrement={fn} />);
    const amount = wrapper.find('[data-id="product-amount"]');
    const beforeClickText = amount.text();

    wrapper.find('[data-id="product-decrement"]').simulate('click');

    const afterClickText = amount.text();
    expect(beforeClickText).toEqual(afterClickText);
  });
});
