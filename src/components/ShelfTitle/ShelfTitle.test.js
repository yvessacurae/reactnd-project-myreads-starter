import React from 'react'
import { shallow } from 'enzyme';
import ShelfTitle from './ShelfTitle';

it('renders without crashing', () => {
  const wrapper = shallow(<ShelfTitle />)
  expect(wrapper.exists()).toEqual(true)
})