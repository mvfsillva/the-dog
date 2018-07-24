import React from 'react'
import 'jest-styled-components'
import theme from '../../theme'
import { shallowWithTheme, mountWithTheme } from '../../../config/test/enzyme.theme'
import TextField from '.'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

const wrap = (props = {}) => shallow(<TextField type="text" name="name" label="label" {...props} />)

describe('[Component: TextField]', () => {
  it('mounts with different combination props', () => {
    mount(<TextField type="text" name="name" label="label" />)
    mount(<TextField type="email" name="name" label="label" lowercase />)
  })
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

  it('matches snapshot', () => {
    const wrapper = shallow(<TextField>TextField component</TextField>)
    expect(wrapper).toMatchSnapshot()
  })
})
