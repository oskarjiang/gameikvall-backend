import { PlayersStore } from '../store'
import { PayloadToJsonResponse } from '../utilities'

export const Players = () => {
  return PayloadToJsonResponse(PlayersStore)
}
