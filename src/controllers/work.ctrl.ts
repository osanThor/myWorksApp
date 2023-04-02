import { NextApiRequest, NextApiResponse } from 'next';
import WorkModel from '../models/work.model';
import BadReqError from './error/bad_request_error';

const add = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    projectLogo,
    projectName,
    period,
    bgColor,
    category,
    link,
    description,
    skills,
    work,
  } = req.body;
  if (
    projectLogo === null ||
    projectLogo === undefined ||
    !projectName ||
    !period ||
    !bgColor ||
    !category ||
    link === undefined ||
    !description ||
    !skills ||
    !work
  ) {
    throw new BadReqError('값을 모두 채워주세요');
  }
  const addResult = await WorkModel.add({
    projectLogo,
    projectName,
    period,
    bgColor,
    category,
    link,
    description,
    skills,
    work,
  });
  if (addResult.result) return res.status(201).json(addResult);
  res.status(500).json(addResult);
};

const getMain = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, length } = req.query;
  const convertCategory = category ? category : 'mainWorks';
  const convertLength = length === undefined ? '8' : length;
  const categoryStr = Array.isArray(convertCategory)
    ? convertCategory[0]
    : convertCategory;
  const lengthStr = Array.isArray(convertLength)
    ? convertLength[0]
    : convertLength;
  const getMainRes = await WorkModel.getMain({
    category: categoryStr,
    length: parseInt(lengthStr, 10),
  });

  if (!getMainRes) return res.status(404).json(getMainRes);
  return res.status(200).json(getMainRes);
};

const getList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, length, page } = req.query;
  if (!category) {
    return new BadReqError('카테고리를 선택주세요');
  }
  const convertPage = page === undefined ? '8' : page;
  const convertLength = length === undefined ? '8' : length;
  const pageStr = Array.isArray(convertPage) ? convertPage[0] : convertPage;
  const lengthStr = Array.isArray(convertLength)
    ? convertLength[0]
    : convertLength;
  const categoryStr = Array.isArray(category) ? category[0] : category;
  const getListRes = await WorkModel.getList({
    category: categoryStr,
    page: parseInt(pageStr, 10),
    length: parseInt(lengthStr, 10),
  });
  return res.status(200).json(getListRes);
};

const WorkCtrl = { add, getMain, getList };
export default WorkCtrl;
