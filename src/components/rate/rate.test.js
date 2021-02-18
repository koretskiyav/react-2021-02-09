import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
  });
  it('should shows 5 stars', () => {
    const wrapper = mount(<Rate />);
    expect(wrapper.find('[data-id="rate"]').children().length).toBe(5);
  });
  it('should shows 3 active stars', () => {
    const value = 3;
    const wrapper = mount(<Rate value={value} />);
    expect(wrapper.find('[data-id="rate"]').children('[data-id="rate-star-active"]').length).toBe(value);
  });
});
