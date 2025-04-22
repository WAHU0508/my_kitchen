import nodemailer from 'nodemailer';
import { IncomingForm } from 'formidable';
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  const form = new IncomingForm();

  const req = await streamRequest(request);

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
      const uploadedFile = Array.isArray(files.attachment) ? files.attachment[0] : files.attachment;
      console.log('File received:', uploadedFile);
      
      const attachments = uploadedFile
        ? [
            {
              filename: uploadedFile.originalFilename,
              path: uploadedFile.filepath,
              contentType: uploadedFile.mimetype || 'application/octet-stream',
            },
          ]
        : [];

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
        attachments,
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

// Helper to convert NextRequest to Node Readable Stream
async function streamRequest(request) {
  const reader = request.body.getReader();
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) this.push(null);
      else this.push(value);
    },
  });

  stream.headers = Object.fromEntries(request.headers.entries());
  stream.method = request.method;
  stream.url = request.url;
  return stream;
}
