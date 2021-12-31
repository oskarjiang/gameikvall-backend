import { GetAll } from '../store'
import { PayloadToJsonResponse } from '../utilities'

export const Players = async () => {
  const players = GetAll()
  return PayloadToJsonResponse(await players.all())
}
