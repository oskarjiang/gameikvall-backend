import { IPlayer } from './domain/player'
import { GetKey } from './utilities'

export const AddOrUpdate = async (player: IPlayer) => {
  const key = GetKey()
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
  const key = GetKey()
  const value = await GAME_IKVALL.get(key, { type: 'json' })
  console.info(`Retrieving value for key: '${key}' and got '${value}'`)
  if (value && typeof value === 'object') {
    return value as IPlayer[]
  } else {
    return []
  }
}
