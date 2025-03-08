import { API_URL } from '.'
import { Booking } from '../models/Booking'
import { JsonObject } from '../models/JsonObject'

const GET_BOOKINGS_ENDPOINT = `${API_URL}/bookings?start_date={{startDate}}&end_date={{endDate}}`
const DELETE_BOOKING_ENDPOINT = `${API_URL}/bookings?id={{id}}`

export const fetchBookings = async (
  startDate: string,
  endDate: string,
): Promise<Booking[]> => {
  try {
    const url = GET_BOOKINGS_ENDPOINT.replace('{{startDate}}', startDate).replace(
      '{{endDate}}',
      endDate,
    )
    const response = await fetch(url)
    const json: JsonObject<Booking>[] = await response.json()
    return json.map(Booking.fromJson)
  } catch (error) {
    console.error(error)
  }
}

export const deleteBooking = async (id: number): Promise<void> => {
  const url = DELETE_BOOKING_ENDPOINT.replace('{{id}}', id.toString())
  try {
    await fetch(url, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
  }
}

export const createBooking = async (booking: Omit<Booking, 'id'>): Promise<Booking> => {
  try {
    const response = await fetch(GET_BOOKINGS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
    const json: JsonObject<Booking> = await response.json()
    return Booking.fromJson(json)
  } catch (error) {
    console.error(error)
  }
}
