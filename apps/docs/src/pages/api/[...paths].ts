// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path, { normalize, resolve } from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  if (!Array.isArray(req.query.paths)) throw new Error('Paths is empty');

  const path = resolve('./' + req.query.paths.join('/'));
  console.log({ path });

  const bundleCode = readFileSync(path, {
    encoding: 'utf-8',
  });
  return res.status(200).send(bundleCode);
}
