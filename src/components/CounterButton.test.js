import React from 'react';

import { shallow, mount } from 'enzyme';
import CounterButton from './CounterButton';

describe('test the counter component', () => {
  expect.assertions(1);
  it('smapshots component', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  expect.assertions(1);
  it('the counter works correctly', () => {
    const mockColor = 'red';
    const wrapper = mount(<CounterButton color={mockColor} />);

    wrapper.find('#counter').simulate('click');
    wrapper.find('#counter').simulate('click');
    expect(wrapper.find('.clicks-2').length).toEqual(1);
    expect(wrapper.find('.clicks-0').length).toEqual(0);

    wrapper.find('#counter').simulate('click');
    expect(wrapper.find('.clicks-3').length).toEqual(1);
    expect(wrapper.props()).toEqual({ color: 'red' });
  });
});
