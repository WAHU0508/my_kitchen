import nodemailer from 'nodemailer';
import { IncomingForm } from 'formidable';
//import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // IMPORTANT: disable default body parser
  },
};

export async function POST(req) {
  const form = new IncomingForm();

  return new Promise((resolve) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        return resolve(
          new Response(JSON.stringify({ success: false, error: 'Form parse error' }), {
            status: 500,
          })
        );
      }

      const { name, email, phone, message } = fields;
      const file = files?.attachment;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      const mailToYou = {
        from: process.env.MAIL_USER,
        to: 'wahugikenye5@gmail.com',
        subject: 'New Quote Request from Website',
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Quote: ${message}
        `,
        attachments: file
          ? [
              {
                filename: file.originalFilename,
                path: file.filepath,
              },
            ]
          : [],
      };

      const mailToUser = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'We Received Your Quote Request',
        text: `Hi ${name},\n\nThank you for reaching out! We've received your quote request and will get back to you shortly.\n\n- Alver Power Systems Ltd.`,
      };

      try {
        await transporter.sendMail(mailToYou);
        await transporter.sendMail(mailToUser);

        return resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
      } catch (error) {
        console.error('Mail error:', error);
        return resolve(new Response(JSON.stringify({ success: false, error }), { status: 500 }));
      }
    });
  });
}
