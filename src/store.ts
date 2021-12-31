import { IPlayer } from './domain/player'

export const AddOrUpdate = (player: IPlayer) => {
  const date = new Date()
  const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`
  let value = []
  if (GAME_IKVALL.get(key)) {
    value = GAME_IKVALL.get(key)
  }
  value = [...value, player]
  GAME_IKVALL.put(key, value)
}

export const GetAll = () => {
  const date = new Date()
  const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`
  return GAME_IKVALL.get(key)
}
