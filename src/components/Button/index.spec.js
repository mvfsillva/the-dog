import React from 'react'
import 'jest-styled-components'
import theme from '../../theme'
import { shallowWithTheme, mountWithTheme } from '../../../config/test/enzyme.theme'
import Button from '.'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)

const wrap = (props = {}) => shallow(<Button {...props} />).dive()

describe('[Component: Button]', () => {
  it('mounts with different combination props', () => {
    mount(<Button>Teste</Button>)
    mount(<Button outlined>Teste</Button>)
  })

  it('renders props when passed in', () => {
    const wrapper = wrap({ type: 'submit' })
    expect(wrapper.find({ type: 'submit' })).toHaveLength(1)
  })

  it('renders button by default', () => {
    const wrapper = wrap()
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Button>Button component</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
