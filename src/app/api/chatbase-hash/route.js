import crypto from 'crypto'

export async function POST(req) {
  const { userId } = await req.json()
  const secret = process.env.CHATBASE_SECRET

  if (!userId || !secret) {
    return new Response(JSON.stringify({ error: 'Missing userId or secret' }), {
      status: 400,
    })
  }

  const hash = crypto.createHmac('sha256', secret).update(userId).digest('hex')

  return Response.json({ hash })
}