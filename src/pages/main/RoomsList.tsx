import styled from 'styled-components'
import { useShallow } from 'zustand/shallow'
import { useMainStore } from '../../store/mainStore'

const RoomItem = styled.div`
  width: 100%;
  padding: 10px;
  font-size: ${({theme}) => theme.fontSizes.small};
  color: ${({theme}) => theme.textColors.secondary};
  border-radius: 5px;
  background-color: ${({theme}) => theme.backgroundColors.card};
`

const RoomsList = () => {
  const {rooms} = useMainStore(
    useShallow((state) => ({isLoading: state.isLoading, rooms: state.rooms})),
  )
  return rooms.map((room) => <RoomItem key={room.id}>{room.name}</RoomItem>)
}

export default RoomsList
