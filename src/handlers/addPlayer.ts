import { IPlayer } from '../domain/player'
import { Store } from '../store'

export const AddPlayer = async (payload: Request) => {
  try {
    const player: IPlayer = await payload.json()
    const players = new Store()
    await players.add(player)
    return new Response(null, { status: 200 })
  } catch {
    return new Response(null, { status: 400 })
  }
}
