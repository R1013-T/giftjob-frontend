export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const message = searchParams.get('message')

  console.log(process.env.AI_ENDPOINT || 'no endpoint')

  const res = await fetch(process.env.AI_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
    }),
  })

  const data = await res.json()

  return Response.json(data)
}
