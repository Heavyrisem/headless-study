// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const bundleCode = readFileSync(path.resolve('./node_modules/ui/dist/index.js'), {
    encoding: 'utf-8',
  });
  return res.status(200).send(bundleCode);
}
