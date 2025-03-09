import styled from 'styled-components';

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({theme}) => theme.textColors.primary};
  background-color: ${({theme}) => theme.backgroundColors.secondary};
`