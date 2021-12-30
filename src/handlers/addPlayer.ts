import { IPlayer } from '../domain/player'
import { PlayersStore } from '../store'

export const AddPlayer = (player: IPlayer) => {
  PlayersStore.push(player)
  return new Response(null, { status: 200 })
}
