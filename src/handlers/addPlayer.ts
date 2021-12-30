import { IPlayer } from '../domain/player'

export const AddPlayer = (request: IPlayer) => {
  return new Response(null, { status: 200 })
}
