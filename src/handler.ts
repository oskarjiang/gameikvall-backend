import { Router } from 'itty-router'
import { AddPlayer } from './handlers/addPlayer'
import { Players } from './handlers/players'

const router = Router()

router.get('api/players', Players).post('api/addPlayer', AddPlayer)

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}`)
}
