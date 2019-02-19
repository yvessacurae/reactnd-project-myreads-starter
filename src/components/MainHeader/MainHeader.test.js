import React from 'react'
import { shallow } from 'enzyme';
import MainHeader from './MainHeader';

it('renders without crashing', () => {
  const wrapper = shallow(<MainHeader />)
  expect(wrapper.exists()).toEqual(true)
})