import { create } from 'zustand'
import MainRepository from '../api'
import { Booking } from '../models/Booking'
import { Room } from '../models/Room'

interface StoreState {
  rooms: Room[]
  bookings: Booking[]

  isLoading: boolean
  error: string

  actions: {
    fetchRooms: () => Promise<void>
    fetchBookings: (start_date: string, end_date: string) => Promise<void>

    createRoom: (name: string) => Promise<void>
    createBooking: (booking: Omit<Booking, 'id'>) => Promise<void>

    deleteRoom: (id: number) => Promise<void>
    deleteBooking: (id: number) => Promise<void>
  }
}

const useStore = create<StoreState>()((set, get) => ({
  rooms: [],
  bookings: [],
  isLoading: false,
  error: '',
  actions: {
    async fetchRooms() {
      set({isLoading: true})
      try {
        const rooms = await MainRepository.rooms.fetch()
        set({rooms})
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },

    async fetchBookings(startDate: string, endDate: string) {
      set({isLoading: true})
      try {
        const bookings = await MainRepository.bookings.fetch(startDate, endDate)
        set({bookings})
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },

    async createRoom(name: string) {
      set({isLoading: true})
      try {
        const newRoom = await MainRepository.rooms.create(name)
        set(({rooms}) => ({rooms: [newRoom, ...rooms]}))
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },

    async createBooking(booking: Omit<Booking, 'id'>) {
      set({isLoading: true})
      try {
        const newBooking = await MainRepository.bookings.create(booking)
        set(({bookings}) => ({bookings: [newBooking, ...bookings]}))
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },

    async deleteRoom(roomId: number) {
      set({isLoading: true})
      try {
        await MainRepository.rooms.delete(roomId)
        set(({rooms}) => ({rooms: rooms.filter((room) => room.id !== roomId)}))
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },

    async deleteBooking(bookingId: number) {
      set({isLoading: true})
      try {
        await MainRepository.bookings.delete(bookingId)
        set(({bookings}) => ({
          bookings: bookings.filter((booking) => booking.id !== bookingId),
        }))
      } catch (error) {
        set({error})
      } finally {
        set({isLoading: false})
      }
    },
  },
}))

export default useStore
