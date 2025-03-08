import { createBooking, deleteBooking, fetchBookings } from './bookingsApi'
import { createRoom, deleteRoom, fetchRooms } from './roomsApi'

const MainRepository = {
  rooms: {
    fetch: fetchRooms,
    create: createRoom,
    delete: deleteRoom,
  },
  bookings: {
    fetch: fetchBookings,
    create: createBooking,
    delete: deleteBooking,
  },
}

export default MainRepository
