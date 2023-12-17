export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const message = searchParams.get('message')

  if (!message) {
    return Response.json({
      error: 'Message is required',
    })
  }

  const url = new URL(process.env.AI_ENDPOINT!)
  url.searchParams.append('message', message)

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // const res = await fetch(process.env.AI_ENDPOINT!, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ message }),
  // })

  const data = await res.json()
  return Response.json(data)
}
