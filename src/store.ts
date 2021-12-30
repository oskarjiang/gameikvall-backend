import { IPlayer } from './domain/player'

const _players: IPlayer[] = []

export class Store {
  async all() {
    return _players
  }

  async add(player: IPlayer) {
    return _players.push(player)
  }
}