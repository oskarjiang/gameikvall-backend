export const PayloadToJsonResponse = (
  payload: any,
  status: number = 200,
): Response => {
  console.info(`Stringifying '${payload}'`)
  const body = JSON.stringify(payload)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return new Response(body, { headers, status: status })
}

export const GetKey = (): string => {
  const date = new Date()
  return `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`
}
