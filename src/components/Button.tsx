import React from 'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`
const AccentButton = styled.button`
  background: #c38fff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #6d6d6d;
  }
`

interface Props extends React.ComponentProps<'button'> {
  buttonType: 'primary' | 'accent'
}

const Button = ({buttonType, children, ...props}: Props) => {
  if (buttonType === 'primary') {
    return <PrimaryButton {...props}>{children}</PrimaryButton>
  } else {
    return <AccentButton {...props}>{children}</AccentButton>
  }
}

export default Button
