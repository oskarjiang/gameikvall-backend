import { Store } from '../store'
import { PayloadToJsonResponse } from '../utilities'

export const Players = async () => {
  const players = new Store()
  return PayloadToJsonResponse(await players.all())
}
