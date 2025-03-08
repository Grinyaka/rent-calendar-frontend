import { JsonObject } from '../models/JsonObject'
import { Room } from '../models/Room'
import { API_URL } from '../utils/constants'

const ROOMS_ENDPOINT = `${API_URL}/rooms`

export const fetchRooms = async (): Promise<Room[]> => {
  console.log(ROOMS_ENDPOINT)
  try {
    const response = await fetch(ROOMS_ENDPOINT)
    const json: JsonObject<Room>[] = await response.json()
    return json.map(Room.fromJson)
  } catch (error) {
    console.error(error)
  }
}

export const createRoom = async (name: string): Promise<Room> => {
  try {
    const response = await fetch(ROOMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name}),
    })
    const json: JsonObject<Room> = await response.json()
    return Room.fromJson(json)
  } catch (error) {
    console.error(error)
  }
}

export const deleteRoom = async (id: number): Promise<void> => {
  const url = `${ROOMS_ENDPOINT}?id=${id}`
  try {
    await fetch(url, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
  }
}
