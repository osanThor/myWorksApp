// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import checkSupportMethod from '../../src/controllers/error/check_support_method';
import handleError from '../../src/controllers/error/handle_error';
import WorkCtrl from '../../src/controllers/work.ctrl';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  const supportMethod = ['POST'];
  try {
    checkSupportMethod(supportMethod, method);
    await WorkCtrl.add(req, res);
  } catch (err) {
    console.error(err);
    //에러 처리
    handleError(err, res);
  }
}
