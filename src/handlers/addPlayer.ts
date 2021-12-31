import { IPlayer } from '../domain/player'
import { AddOrUpdate } from '../store'
import { PayloadToJsonResponse } from '../utilities'

export const AddPlayer = async (payload: Request) => {
  try {
    const player: IPlayer = await payload.json()
    await AddOrUpdate(player)
    PayloadToJsonResponse(null)
  } catch {
    PayloadToJsonResponse(null, 400)
  }
}
