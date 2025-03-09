import moment from 'moment'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 150px;
  background-color: transparent;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.textColors.secondary};
  word-break: break-all;

  text-align: center;
  padding: 10px 0;
`

const CustomSidebarHeader = (props: any) => {
  const currentDate = moment().locale('ru').format('YYYY/MMMM').split('/')
  return (
    <Wrapper>
      {currentDate[0]} <br /> {currentDate[1]}
    </Wrapper>
  )
}

export default CustomSidebarHeader
