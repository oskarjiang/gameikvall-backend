import { handleRequest } from '../src/handler'
import makeServiceWorkerEnv from 'service-worker-mock'
import { IPlayer } from '../src/domain/player'

declare var global: any

describe('handle', () => {
  beforeEach(() => {
    Object.assign(global, makeServiceWorkerEnv())
    jest.resetModules()
  })
  test('handle addPlayer', async () => {
    const player: IPlayer = { name: 'Test' }
    const result = await handleRequest(
      new Request('/addPlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(player),
      }),
    )
    expect(result.status).toEqual(200)
  })
  test('handle addPlayer', async () => {
    const result = await handleRequest(
      new Request('/addPlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([]),
      }),
    )
    expect(result.status).toEqual(200)
  })
})
