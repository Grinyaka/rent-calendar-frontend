import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import AddBooking from './AddBooking'

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;

  bottom: 10px;
  right: 15px;
`
const OpenButton = styled(Button)`
  font-size: ${({theme}) => theme.fontSizes.medium};
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0;
  width: 35px;
  height: 35px;
  line-height: 1;
`
const MenuDropdown = styled.div<{$isOpen: boolean}>`
  display: ${({$isOpen}) => ($isOpen ? 'flex' : 'none')};
  position: ${({$isOpen}) => ($isOpen ? 'absolute' : 'static')};
  bottom: calc(100% + 10px);
  right: 0;
  border-radius: 5px;
  background-color: ${({theme}) => theme.backgroundColors.card};
  color: ${({theme}) => theme.textColors.secondary};
  max-height: 200px;
  overflow-y: scroll;
  width: fit-content;

  min-height: 100px;

  z-index: 10;

  flex-direction: column;
`

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    const focusTarget = e.relatedTarget
    if ((menuRef.current && !menuRef.current.contains(focusTarget)) || !focusTarget) {
      return setIsOpen(false)
    }
  }

  return (
    <Wrapper>
      <OpenButton buttonType="accent" onBlur={handleBlur} onClick={handleOpen}>
        +
      </OpenButton>
      <MenuDropdown ref={menuRef} $isOpen={isOpen}>
        <AddBooking onOpen={handleOpen} />
      </MenuDropdown>
    </Wrapper>
  )
}

export default DropdownMenu
