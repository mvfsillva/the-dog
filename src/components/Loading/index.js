import React, { PureComponent } from 'react'
import Either from './../common/Either'
import Animation from './animation'

const loading = Wrapper => {
  return class Loading extends PureComponent {
    constructor() {
      super()
      this.state = { isLoading: true }
    }

    componentDidMount() {
      this.timer = setTimeout(() => {
        this.setState({ isLoading: false })
      }, 2000)
    }

    componentWillMount() {
      clearTimeout(this.timer)
    }

    render() {
      return (
        <Either
          when={this.state.isLoading}
          right={<Animation />}
          left={<Wrapper {...this.props} />}
        />
      )
    }
  }
}

export default loading
