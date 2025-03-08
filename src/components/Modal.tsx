import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = ({children, onClose}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleClickOutside = (e) => {
    const target = e.target
    if (modalRef.current && target === modalRef.current) {
      return onClose()
    }
  }

  return ReactDOM.createPortal(
    <ModalOverlay ref={modalRef} onClick={handleClickOutside}>
      {children}
    </ModalOverlay>,
    document.getElementById('modal-root'),
  )
}

export default Modal
