import { IPlayer } from '../domain/player'
import { PlayersStore } from '../store'

export const AddPlayer = (payload: string) => {
  console.log('*** Received payload')
  console.log(payload)
  try {
    const player: IPlayer = JSON.parse(payload)
    PlayersStore.push(player)
    return new Response(null, { status: 200 })
  } catch (error) {
    console.log('*** Failed: error')
    console.log(error)
    return new Response(null, { status: 400 })
  }
}
