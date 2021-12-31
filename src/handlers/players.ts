import { GetAll } from '../store'
import { PayloadToJsonResponse } from '../utilities'

export const Players = async () => {
  return PayloadToJsonResponse(await GetAll())
}
