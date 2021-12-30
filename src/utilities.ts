export const PayloadToJsonResponse = (payload: any): Response => {
  const body = JSON.stringify(payload)
  const headers = { 'Content-type': 'application/json' }
  return new Response(body, { headers })
}
