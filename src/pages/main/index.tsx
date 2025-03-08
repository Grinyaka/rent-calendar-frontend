import moment from 'moment'
import React, { useEffect } from 'react'
import Button from '../../components/Button'
import { useMainStore } from '../../store/mainStore'
import Modal from './Modal'

const CalendarPage = () => {
  const {fetchRooms, fetchBookings} = useMainStore((state) => state.actions)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  useEffect(() => {
    fetchRooms()
    fetchBookings(
      moment().startOf('month').toISOString(),
      moment().endOf('month').toISOString(),
    )
  }, [fetchRooms, fetchBookings])

  return (
    <div>
      <h1>Calendar</h1>
      <Button buttonType="primary" onClick={() => setIsModalOpen(true)}>
        Create Booking
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>Create Booking</h2>
          {/* Add booking form here */}
        </Modal>
      )}
    </div>
  )
}

export default CalendarPage
