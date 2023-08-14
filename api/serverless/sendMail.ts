import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const resend = new Resend(process.env['RESEND_API_KEY']);
  const { name, email, subject, message } = request.body;

  try {
    await resend.emails.send({
      from: 'admin@ww-landtechnik.de',
      to: ['W & W Landtechnik <wwfahrzeugteile@gmail.com>'],
      reply_to: email,
      subject: subject,
      html: `<head>
      <style>
          body {font-family: Arial, sans-serif;}
          h1 {color: #333;}
          p {font-size: 16px;}
          .message {border: 1px solid #ddd; padding: 10px; margin-top: 10px; border-radius: 5px;}
      </style>
  </head>
  <body>
      <h1>Neue Nachricht von ${name}</h1>
      <div class='message'>
          <p>${message}</p>
      </div>
  </body>`,
    });
    return response.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ error: 'Error sending email' });
  }
}
