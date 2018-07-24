import React from 'react'
import { shallow } from 'enzyme'
import Title from '.'

describe('[Component: Title]', () => {
  it('renders title component', () => {
    const text = 'Welcome the dog world'
    const size = 'h1'
    const title = shallow(<Title size={size}>{text}</Title>)
    expect(title.find(size).text()).toBe(text)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<Title>Title component</Title>)
    expect(wrapper).toMatchSnapshot()
  })
})
