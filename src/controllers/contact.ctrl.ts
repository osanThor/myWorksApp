import { NextApiRequest, NextApiResponse } from 'next';
import ContactModel from '../models/contact.model';
import BadReqError from './error/bad_request_error';

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, ci, name, phone, email, message } = req.body;
  if (!id) {
    throw new BadReqError('id값이 없습니다.');
  }
  if (!ci) {
    throw new BadReqError('기업명이 없습니다.');
  }
  if (!name) {
    throw new BadReqError('성함이 없습니다.');
  }
  if (!phone) {
    throw new BadReqError('연락처가 없습니다.');
  }
  const addResult = await ContactModel.contact({
    id,
    ci,
    name,
    phone,
    email,
    message,
  });
  if (addResult.result) return res.status(201).json(addResult);
  res.status(500).json(addResult);
};

const ContactCtrl = { contact };
export default ContactCtrl;
