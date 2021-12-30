import { Router } from 'itty-router'
import { AddPlayer } from './handlers/addPlayer'
import { Players } from './handlers/players'

const router = Router()

router
  .get('/players', Players)
  .post('/addPlayer', AddPlayer)
  .get('*', () => new Response('Not found', { status: 404 }))

export async function handleRequest(request: Request): Promise<Response> {
  return router.handle(request)
}
