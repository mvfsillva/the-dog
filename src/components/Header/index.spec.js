import React from 'react'
import 'jest-styled-components'
import Header from '.'
import theme from '../../theme'
import { shallowWithTheme, mountWithTheme } from '../../../config/test/enzyme.theme'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

const wrap = (props = {}) => shallow(<Header headline="headline" {...props} />).dive()

describe('[Component: Header]', () => {
  it('mounts with different combination props', () => {
    mount(<Header headline="headline" />)
    mount(<Header headline="headline" subtitle="subtitle" />)
    mount(<Header headline="headline" uppercase />)
    mount(<Header headline="headline" hero />)
    mount(<Header headline="headline" subtitle="subtitle" uppercase hero />)
  })

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
