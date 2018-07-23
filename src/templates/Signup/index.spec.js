import React from 'react'
import 'jest-styled-components'
import theme from '../../theme'
import { shallowWithTheme, mountWithTheme } from '../../../config/test/enzyme.theme'
import Signup from '.'

const shallow = shallowWithTheme(theme)
const mount = mountWithTheme(theme)
const spyClick = jest.fn()
const wrap = (props = {}) => shallow(<Signup handleSubmit={spyClick} {...props} />)

describe('[Template: Signup]', () => {
  it('mounts with different combination props', () => {
    mount(<Signup handleSubmit={spyClick} />)
  })
})
