import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({theme}) => theme.textColors.primary};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, opacity 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border: 2px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

const PrimaryButton = styled(StyledButton)`
  border-color: ${({theme}) => theme.backgroundColors.button};
  &:hover {
    border-color: ${({theme}) => theme.backgroundColors.buttonHover};
  }
`
const AccentButton = styled(StyledButton)`
  border-color: ${({theme}) => theme.backgroundColors.accent};
  color: ${({theme}) => theme.backgroundColors.accent};
  &:not(:disabled):hover {
    opacity: 0.8;
  }
`

interface Props extends React.ComponentProps<'button'> {
  buttonType?: 'primary' | 'accent'
}

export const Button = ({buttonType, children, ...props}: Props) => {
  if (buttonType === 'primary') {
    return <PrimaryButton {...props}>{children}</PrimaryButton>
  } 
  if (buttonType === 'accent') {
    return <AccentButton {...props}>{children}</AccentButton>
  }

  return <StyledButton {...props}>{children}</StyledButton>
}

