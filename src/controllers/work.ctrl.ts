import { NextApiRequest, NextApiResponse } from 'next';
import WorkModel from '../models/work.model';
import BadReqError from './error/bad_request_error';

const add = async (req: NextApiRequest, res: NextApiResponse) => {
  const { projectLogo, projectName, period, bgColor } = req.body;
  if (!projectLogo || !projectName || !period || !bgColor) {
    throw new BadReqError('값을 모두 채워주세요');
  }
  const addResult = await WorkModel.add({
    projectLogo,
    projectName,
    period,
    bgColor,
  });
  if (addResult.result) return res.status(201).json(addResult);
  res.status(500).json(addResult);
};

const getMain = async (req: NextApiRequest, res: NextApiResponse) => {
  const { length } = req.query;
  const convertLength = length === undefined ? '8' : length;
  const lengthStr = Array.isArray(convertLength)
    ? convertLength[0]
    : convertLength;
  const getMainRes = await WorkModel.getMain({
    length: parseInt(lengthStr, 10),
  });
  return res.status(200).json(getMainRes);
};

const getList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { length, page } = req.query;
  const convertPage = page === undefined ? '8' : page;
  const convertLength = length === undefined ? '8' : length;
  const pageStr = Array.isArray(convertPage) ? convertPage[0] : convertPage;
  const lengthStr = Array.isArray(convertLength)
    ? convertLength[0]
    : convertLength;
  const getListRes = await WorkModel.getList({
    page: parseInt(pageStr, 10),
    length: parseInt(lengthStr, 10),
  });
  return res.status(200).json(getListRes);
};

const WorkCtrl = { add, getMain, getList };
export default WorkCtrl;
