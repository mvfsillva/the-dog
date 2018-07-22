import React from 'react'
import 'jest-styled-components'
import theme from 'src/theme'
import { shallowWithTheme } from '../../../config/test/enzyme.theme'
import NotFound from '.'

const shallow = shallowWithTheme(theme)

const mockAction = jest.fn()
const mockReplace = jest.fn()

const wrap = shallow(<NotFound />)

describe('[Page: NotFound]', () => {
  it('executes replace if handleclick not present', () => {
    global.location.replace = mockReplace
    wrap.find('Button').simulate('click')
    expect(mockReplace).toHaveBeenCalled()
    expect(mockAction).not.toHaveBeenCalled()
  })

  it('execute click action', () => {
    wrap.setProps({ handleclick: mockAction })
    wrap.find('Button').simulate('click')
    expect(mockAction).toHaveBeenCalled()
    expect(mockReplace).not.toHaveBeenCalled()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
