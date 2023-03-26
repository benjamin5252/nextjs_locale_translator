// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { translate } from '@vitalets/google-translate-api';
import translate from '@iamtraction/google-translate';

// import translate from 'google-translate-api';
type Data = {
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    const body = JSON.parse(req.body)
    
    const { text } = await translate(body.string, { to: body.locale});
    res.status(200).json({ content: text })
  }else{
    const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });
    res.status(200).json({ content: text })
  }
  
}
