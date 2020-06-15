import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ArenguForm from '../ArenguForm'

describe('ArenguForm', () => {
  it('ArenguForm. Render a form', () => {
    const wrapper = shallow(<ArenguForm id='1234' />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
