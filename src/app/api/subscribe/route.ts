import { supabase } from '@//lib/supabaseClient';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
  }

  // Check if already subscribed
  const { data: existing, error: checkError } = await supabase
    .from('subscribers')
    .select('id')
    .eq('email', email)
    .maybeSingle(); // safer than single() in this context

  if (checkError) {
    return new Response(JSON.stringify({ message: 'Database error' }), { status: 500 });
  }

  if (existing) {
    return new Response(JSON.stringify({ message: 'Already subscribed' }), { status: 400 });
  }

  const { error: insertError } = await supabase
    .from('subscribers')
    .insert([{ email }]);

  if (insertError) {
    return new Response(JSON.stringify({ message: 'Failed to subscribe' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Successfully subscribed' }), { status: 201 });
}
