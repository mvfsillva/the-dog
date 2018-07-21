import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import KeyHandler from 'react-key-handler'
import If from 'components/common/If'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
`

const ModalContainer = styled.div`
  align-items: center;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1030;
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
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 0.125em;
  color: ${props => props.theme.colors.gray[500]};
  top: calc(-40% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(100% - 1rem);
  @media screen and (max-width: 640px) {
    top: 0;
    width: calc(100% - 1rem);
    min-width: 0;
  }
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
    <ModalContainer id={id}>
      <KeyHandler keyEventName="keydown" keyValue="Escape" onKeyHandle={onClose} />
      <Overlay onClick={onClose} />
      <ModalDialog onRequestClose={onClose}>
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
