// app/api/subscribe/route.js
import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'subscribers.json');

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
  }

  // Read existing data
  let subscribers = [];
  try {
    const data = await fs.readFile(filePath, 'utf8');
    subscribers = JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, start fresh
    subscribers = [];
  }

  // Check for duplicates
  if (subscribers.find(sub => sub.email === email)) {
    return new Response(JSON.stringify({ message: 'Already subscribed' }), { status: 400 });
  }

  // Save new subscriber
  subscribers.push({ email, subscribedAt: new Date().toISOString() });
  await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));

  return new Response(JSON.stringify({ message: 'Successfully subscribed' }), { status: 201 });
}
