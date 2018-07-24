import React from 'react'
import { shallow } from 'enzyme'
import If from '.'

describe('[Component: If]', () => {
  it('Renders children', () => {
    const condition = true
    const component = shallow(
      <If test={condition}>
        <div className="rendered">RENDERED</div>
      </If>,
    )
    expect(component.find('.rendered')).toHaveLength(1)
  })

  it('Does not render children', () => {
    const condition = false
    const component = shallow(
      <If test={condition}>
        <div className="rendered">RENDERED</div>
      </If>,
    )
    expect(component.find('.rendered')).toHaveLength(0)
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<If>If component</If>)
    expect(wrapper).toMatchSnapshot()
  })
})
