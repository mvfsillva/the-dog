import React from 'react'
import 'jest-styled-components'
import theme from 'src/theme'
import { shallowWithTheme } from '../../../config/test/enzyme.theme'
import Home from '.'

const shallow = shallowWithTheme(theme)

const wrap = (props = {}) => shallow(<Home {...props} />).dive()
describe('[Page: Home]', () => {
  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
