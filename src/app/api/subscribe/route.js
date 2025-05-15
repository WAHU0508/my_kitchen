import { supabase } from '@//lib/supabaseClient';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
  }

  // Check if already subscribed
  const { data: existing, error: findError } = await supabase
    .from('subscribers')
    .select('id')
    .eq('email', email)
    .single();

  if (existing) {
    return new Response(JSON.stringify({ message: 'Already subscribed' }), { status: 400 });
  }

  const { error } = await supabase
    .from('subscribers')
    .insert([{ email }]);

  if (error) {
    return new Response(JSON.stringify({ message: 'Failed to subscribe' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Successfully subscribed' }), { status: 201 });
}
