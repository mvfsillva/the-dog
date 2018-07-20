import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'

const wrap = (props = {}) => shallow(<Header {...props} />).dive()

describe('[Component: Header]', () => {
  it('renders headline when passed in', () => {
    const wrapper = wrap({ headline: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders subtitle when passed in', () => {
    const wrapper = wrap({ subtitle: 'test' })
    expect(wrapper.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })
})
