import React from 'react'
import 'jest-styled-components'
import theme from 'src/theme'
import { shallowWithTheme } from '../../../config/test/enzyme.theme'
import Feed from '.'

const shallow = shallowWithTheme(theme)

const wrap = (props = {}) => shallow(<Feed {...props} />).dive()
describe('[Page: Feed]', () => {
  it('matches snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
