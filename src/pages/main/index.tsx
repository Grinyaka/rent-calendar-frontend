import moment from 'moment'
import { useEffect } from 'react'
import { PageContainer } from '../../components/PageContainer'
import { useMainStore } from '../../store/mainStore'
import RoomsList from './RoomsList'

const CalendarPage = () => {
  const {fetchRooms, fetchBookings} = useMainStore((state) => state.actions)

  useEffect(() => {
    fetchRooms()
    fetchBookings(
      moment().startOf('month').toISOString(),
      moment().endOf('month').toISOString(),
    )
  }, [fetchRooms, fetchBookings])

  return (
    <PageContainer>
      <RoomsList />
    </PageContainer>
  )
}

export default CalendarPage
