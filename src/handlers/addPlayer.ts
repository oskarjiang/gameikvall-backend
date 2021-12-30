import { IPlayer } from '../domain/player'
import { PlayersStore } from '../store'

export const AddPlayer = async (payload: Request) => {
  try {
    const player: IPlayer = await payload.json()
    PlayersStore.push(player)
    return new Response(null, { status: 200 })
  } catch {
    return new Response(null, { status: 400 })
  }
}
