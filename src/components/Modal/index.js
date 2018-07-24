import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import KeyHandler from 'react-key-handler'
import If from '~/components/common/If'

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  overflow: auto;
  width: 100%;
  > img {
    display: flex;
    width: 100%;
  }
`

const ModalDialog = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray[500]};
`

const ModalCloseButton = styled.a`
  width: 32px;
  height: 32px;
  opacity: 0.3;
  display: flex;
  justify-content: center;
  margin: 20px 30px;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

const Modal = ({ id, children, closeable, onClose, open }) => {
  if (!open) return null

  return (
    <ModalContainer id={id} onClick={onClose}>
      <KeyHandler keyEventName="keydown" keyValue="Escape" onKeyHandle={onClose} />
      <ModalDialog onClick={onClose}>
        <If test={closeable}>
          <ModalCloseButton onClick={onClose} />
        </If>
        <ModalContent>{children}</ModalContent>
      </ModalDialog>
    </ModalContainer>
  )
}

Modal.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  closeable: PropTypes.bool,
  open: PropTypes.bool,
}

export default Modal
