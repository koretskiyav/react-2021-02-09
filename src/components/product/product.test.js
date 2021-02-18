import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';

import { restaurants } from '../../fixtures';

const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Product', () => {
  const wrapper = mount(<Product product={product} />);
  const decrement = wrapper.find('[data-id="product-decrement"]');
  const simulateDecrement = () => {
    decrement.simulate('click')
  }
  const increment = wrapper.find('[data-id="product-increment"]');
  const simulateIncrement = () => {
    increment.simulate('click')
  }
  const amount = wrapper.find('[data-id="product-amount"]');
  it('should render', () => {
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });
  it('should init from 0 amount', () => {
    expect(amount.text()).toBe('0');
  });
  it('should increment amount', () => {
    increment.simulate('click');
    expect(amount.text()).toBe('1');
  });
  it('should decrement amount until 0', () => {
    simulateDecrement()
    expect(amount.text()).toBe('0');
    simulateIncrement()
    expect(amount.text()).toBe('1');
    simulateIncrement()
    expect(amount.text()).toBe('2');
    simulateDecrement()
    expect(amount.text()).toBe('1');
    simulateDecrement()
    simulateDecrement()
    expect(amount.text()).toBe('0');
  });
  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });
});
