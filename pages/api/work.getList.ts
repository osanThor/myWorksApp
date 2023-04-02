import { NextApiRequest, NextApiResponse } from 'next';
import checkSupportMethod from '../../src/controllers/error/check_support_method';
import handleError from '../../src/controllers/error/handle_error';
import WorkCtrl from '../../src/controllers/work.ctrl';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;
  const supportMethod = ['GET'];
  try {
    checkSupportMethod(supportMethod, method);
    await WorkCtrl.getList(req, res);
  } catch (err) {
    console.log(err);
    handleError(err, res);
  }
}
