import styled from 'styled-components'
import { useMainStore } from '../../store/mainStore'


const BookingsList = () => {
  const bookings = useMainStore((state) => state.bookings)
  return bookings.map((booking) => <div>{booking.start_time}</div>)
}

export default BookingsList
