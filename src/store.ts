import { IPlayer } from './domain/player'

export const AddOrUpdate = async (player: IPlayer) => {
  const date = new Date()
  const key = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`
  const value = await GAME_IKVALL.get(key, { type: 'json' })
  if (value && typeof value === 'object') {
    const currentValue = value as IPlayer[]
    const newValue = [...currentValue, player]
    await GAME_IKVALL.put(key, JSON.stringify(newValue))
  } else {
    await GAME_IKVALL.put(key, JSON.stringify([player]))
  }
}

export const GetAll = async (): Promise<IPlayer[]> => {
  const date = new Date()
  const key = `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`
  const value = await GAME_IKVALL.get(key, { type: 'json' })
  console.info(`Retrieving value for key: '${key}' and got '${value}'`)
  if (value && typeof value === 'object') {
    return value as IPlayer[]
  } else {
    return []
  }
}
