import React from 'react'
import { shallow } from 'enzyme'
import TextField from '.'

const wrap = (props = {}) => shallow(<TextField type="text" name="name" label="label" {...props} />)

describe('[Component: TextField]', () => {
  it('renders input props when passed in', () => {
    const wrapper = wrap({ id: 'foo' })
    expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
  })

  it('renders label when passed in', () => {
    const wrapper = wrap({ name: 'name' })
    expect(wrapper.find({ name: 'name' })).toHaveLength(1)
  })

  it('renders label when passed in', () => {
    const wrapper = wrap({ label: 'foo label' })
    expect(wrapper.contains('foo label')).toBe(true)
  })
})
