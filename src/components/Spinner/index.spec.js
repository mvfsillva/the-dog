import React from 'react'
import { mount } from 'enzyme'
import Spinner from '.'

const LOTTIE_CLASSNAME = '_test--lottie'

beforeEach(() => {
  jest.unmock('react-lottie')
  const lottie = require.requireActual('react-lottie')
  lottie.default = props => (<div className={LOTTIE_CLASSNAME} {...props} />)
})

describe('[Component: Spinner]', () => {
  it('Renders loading animation', () => {
    const [width, height, loop, autoplay, animation] = [100, 200, true, false, {layers: [{ name: 'Chicken Black Power' }]}]
    const spinner = mount(
      <Spinner
        width={width}
        height={height}
        loop={loop}
        autoplay={autoplay}
        animation={animation}
      />
    )

    const lottieProps = spinner.find(`.${LOTTIE_CLASSNAME}`).props()
    expect(lottieProps.options).toEqual({ animationData: animation, loop, autoplay })
  })
})
