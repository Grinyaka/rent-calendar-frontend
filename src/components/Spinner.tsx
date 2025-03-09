import styled from 'styled-components';

export const Spinner = styled.div`
  border: 5px solid ${({theme}) => theme.backgroundColors.secondary};
  border-radius: 50%;
  border-top: 5px solid ${({theme}) => theme.backgroundColors.accent};
  border-right: 5px solid ${({theme}) => theme.backgroundColors.accent};
  border-bottom: 5px solid ${({theme}) => theme.backgroundColors.accent};
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`