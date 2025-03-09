import React, { useState } from 'react'
import styled from 'styled-components'
import { useShallow } from 'zustand/shallow'
import { Input } from '../../components'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { Spinner } from '../../components/Spinner'
import { useMainStore } from '../../store/mainStore'

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
  padding: 15px;

  background-color: ${({theme}) => theme.backgroundColors.card};
  border-radius: 10px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const ErrorText = styled.span`
  color: ${({theme}) => theme.backgroundColors.negative};
  font-size: ${({theme}) => theme.fontSizes.small};
  margin: 5px 0;
  width: 100%;
  word-wrap: break-word;
`
const SubmitButton = styled(Button)`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;

  &:disabled {
    background-color: ${({theme}) => theme.backgroundColors.buttonHover};
    border-color: transparent;
    color: ${({theme}) => theme.textColors.primary};
    opacity: 0.5;
  }
`
const SizedSpinner = styled(Spinner)`
  width: 20px;
  height: 20px;
  border-width: 3px;
`

const AddBooking = ({onOpen}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {createRoom, clearError} = useMainStore((state) => state.actions)
  const {error, isLoading} = useMainStore(
    useShallow((state) => ({error: state.error, isLoading: state.isLoading})),
  )
  const [roomName, setRoomName] = useState('')

  const handleCloseModal = () => {
    setIsModalOpen(false)
    clearError()
  }
  const handleOpenModal = () => {
    onOpen()
    setIsModalOpen(true)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createRoom(roomName).then(() => {
      handleCloseModal()
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value || '')
  }

  return (
    <>
      <ModalButton onClick={handleOpenModal}>Добавить комнату</ModalButton>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ModalContent>
            <h4>Создание комнаты</h4>
            <Form onSubmit={handleSubmit}>
              <Input
                onChange={handleChange}
                type="text"
                placeholder="Название комнаты"
                value={roomName}
              />
              <ErrorText>{error && `Возникла ошибка: ${error}`}</ErrorText>
              <SubmitButton
                disabled={!roomName || isLoading}
                type="submit"
                buttonType="accent"
              >
                {isLoading ? <SizedSpinner /> : 'Создать'}
              </SubmitButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default AddBooking
