import { IPlayer } from '../domain/player'
import { AddOrUpdate } from '../store'

export const AddPlayer = async (payload: Request) => {
  try {
    const player: IPlayer = await payload.json()
    await AddOrUpdate(player)
    return new Response(null, { status: 200 })
  } catch {
    return new Response(null, { status: 400 })
  }
}
