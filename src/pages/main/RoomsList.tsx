import styled from 'styled-components'
import DropdownMenu from './DropdownMenu'
import moment from 'moment'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  min-height: 200px;

  position: relative;
`

const RoomsList = () => {
  return (
    <Wrapper>
      List here
      <DropdownMenu />
    </Wrapper>
  )
}

export default RoomsList
