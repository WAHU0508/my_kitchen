// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { first_name, last_name, email, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   // Email to you
//   const mailToYou = {
//     from: process.env.MAIL_USER,
//     to: 'info@alverpower.com',
//     // to: 'sharonwg0508@gmail.com',
//     subject: 'New Message from Alver Website',
//     text: `
//       FirstName: ${first_name}
//       LastName: ${last_name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   // Auto-response to user
//   const mailToUser = {
//     from: process.env.MAIL_USER,
//     to: email,
//     subject: 'We Received Your Message',
//     text: `Hi ${first_name},\n\nThank you for reaching out! We've received your message and will get back to you shortly.\n\n- Alver Power Systems Ltd.`,
//   };

//   try {
//     await transporter.sendMail(mailToYou);
//     await transporter.sendMail(mailToUser);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Mail error:', error);
//     return new Response(JSON.stringify({ success: false, error }), { status: 500 });
//   }
// }
import nodemailer from 'nodemailer';
import { supabase } from '@//lib/supabaseClient';

export async function POST(req) {
  const { first_name, last_name, email, message } = await req.json();

  // Store message in Supabase
  const { error: dbError } = await supabase.from('messages').insert([
    {
      first_name,
      last_name,
      email,
      message,
    },
  ]);

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return new Response(JSON.stringify({ success: false, error: 'Database insert error' }), {
      status: 500,
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // Email to admin
  const mailToYou = {
    from: process.env.MAIL_USER,
    to: 'info@alverpower.com',
    subject: 'New Message from Alver Website',
    text: `
      First Name: ${first_name}
      Last Name: ${last_name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Auto-response to user
  const mailToUser = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'We Received Your Message',
    text: `Hi ${first_name},\n\nThank you for reaching out! We've received your message and will get back to you shortly.\n\n- Alver Power Systems Ltd.`,
  };

  try {
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToUser);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Mail error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Email send error' }), {
      status: 500,
    });
  }
}
