import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Modal from '../../components/Modal'

type Props = {
  onOpen: () => void
}

const ModalButton = styled(Button)`
  font-size: ${({theme}) => theme.fontSizes.small};
  word-break: keep-all;
  white-space: nowrap;
  padding: 5px 10px;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &::before {
    content: '+';
    margin-right: 5px;
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.textColors.secondary};
  }
`
const ModalContent = styled.div`
  max-width: 500px;
  padding: 10px 15px;

  background-color: ${({theme}) => theme.backgroundColors.card};
  border-radius: 10px;
`

const AddBooking = ({onOpen}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleOpenModal = () => {
    onOpen()
    setIsModalOpen(true)
  }

  return (
    <>
      <ModalButton onClick={handleOpenModal}>Добавить комнату</ModalButton>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ModalContent>
            <h4>Создание комнаты</h4>
            {/* logic here */}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default AddBooking