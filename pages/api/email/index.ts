// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import mailgun from 'mailgun-js';

type Data = {
  ok: boolean;
  message: string;
}

export default function handler ( req: NextApiRequest,  res: NextApiResponse<Data> ) {

    switch( req.method ){
        case 'POST':
            sendMail(req, res);
        break;

        default:
            res.status(405).json({ ok: false, message: 'Bad Request' });
    }
}

const sendMail = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { firstName, lastName, email, message } = req.body;

    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY || '', domain: process.env.MAILGUN_DOMAIN || '' });
    const data = {
        from: `${ process.env.MAILGUN_FROM_NAME || '' } <${ process.env.MAILGUN_FROM_EMAIL || '' }>`,
        to: `${ process.env.MAILGUN_CONTACT_EMAIL || '' }`,
        subject: `Contacto desde formulario web`,
        text: `${firstName} ${lastName} (${email}) ha enviado un mensaje desde la web: ${message}`,
    };

    mg.messages().send(data, (error, body) => {
        if (error) {
            return res.status(500).json({ ok: false, message: error.message });
        } else {
            return res.status(200).json({ ok: true, message: 'Mensaje enviado' });
        }
    });
}

