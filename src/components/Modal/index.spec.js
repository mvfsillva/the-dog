import React from 'react'
import { mount, shallow } from 'enzyme'
import Modal from '.'

const onClose = jest.fn()
const wrap = (props = {}) => shallow(<Modal onClose={onClose} {...props} />)

describe('[Component: Modal]', () => {
  it('renders modal with different props', () => {
    mount(<Modal onClose={onClose} />)
    mount(<Modal onClose={onClose} closeable />)
  })
})
