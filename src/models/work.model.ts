import CustomServerError from '../controllers/error/custom_server_error';
import { InWork, InWorksColProps } from '../interface/in_work';
import FirebaseAdmin from './firebase_admin';

const WORK_COL = 'works';
const MAIN_COL = 'mainWorks';
const SUB_COL = 'subWorks';

const { Firestore } = FirebaseAdmin.getInstance();

type addResult = { result: boolean; message: string };

const add = async ({
  projectName,
  period,
  bgColor,
  category,
  link,
  description,
  skills,
  work,
  logoUrl,
  imageUrl,
}: InWork): Promise<addResult> => {
  try {
    let worksCount = 1;
    const addResult = await Firestore.runTransaction(async (transaction) => {
      const docName =
        category === 'mainWorks'
          ? MAIN_COL
          : category === 'subWorks'
          ? SUB_COL
          : '';
      const worksRef = Firestore.collection(WORK_COL).doc(docName);
      const worksDoc = await transaction.get(worksRef);
      if (worksDoc.exists === false) {
        // 없는 컬렉션
        return false;
      }
      const worksInfo = worksDoc.data() as InWorksColProps;
      if (worksInfo.worksCount !== undefined) {
        worksCount = worksInfo.worksCount;
      }
      const workRef = worksRef.collection(docName).doc(projectName);
      const workDoc = await transaction.get(workRef);
      if (workDoc.exists) {
        // 이미 있는 프로젝트
        return false;
      }
      const addData = {
        projectLogo: worksCount,
        projectName,
        period,
        bgColor,
        category,
        link,
        description,
        skills,
        work,
        logoUrl,
        imageUrl,
      };
      await transaction.set(workRef, addData);
      await transaction.update(worksRef, { worksCount: worksCount + 1 });
      return true;
    });
    if (addResult === false) {
      return { result: false, message: 'FAILURE' };
    }
    return { result: true, message: 'SUCCESS' };
  } catch (e) {
    console.error(e);
    return { result: false, message: '서버 에러' };
  }
};

const getMain = async ({
  category,
  length = 8,
}: {
  category: string;
  length: number;
}) => {
  const docName =
    category === 'mainWorks'
      ? MAIN_COL
      : category === 'subWorks'
      ? SUB_COL
      : '';
  const listData = await Firestore.runTransaction(async (transaction) => {
    const worksRef = Firestore.collection(WORK_COL).doc(docName);
    if (!worksRef) {
      return false;
    }
    const workCol = worksRef
      .collection(docName)
      .orderBy('projectLogo', 'desc')
      .limit(length);
    const workColDoc = await transaction.get(workCol);
    const data = workColDoc.docs.map((mv) => {
      const docData = mv.data();
      const returnData = { ...docData };
      return returnData;
    });
    return data;
  });
  return listData;
};

const getList = async ({
  category,
  page = 1,
  length = 8,
}: {
  category: string;
  page: number;
  length: number;
}) => {
  const docName =
    category === 'mainWorks'
      ? MAIN_COL
      : category === 'subWorks'
      ? SUB_COL
      : '';
  const listData = await Firestore.runTransaction(async (transaction) => {
    const worksRef = Firestore.collection(WORK_COL).doc(docName);
    if (!worksRef) {
      return false;
    }
    const worksDoc = await transaction.get(worksRef);
    if (worksDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: '잘못된 요청입니다.',
      });
    }
    const worksDate = worksDoc.data() as InWorksColProps;
    const { worksCount = 0 } = worksDate;
    const totalElements = worksCount !== 0 ? worksCount - 1 : 0;
    const remains = totalElements % length;
    const totalPages =
      (totalElements - remains) / length + (remains > 0 ? 1 : 0);
    const startAt = totalElements - (page - 1) * length;
    if (startAt < 0) {
      return { totalElements, totalPages: 0, page, length, works: [] };
    }
    const workCol = worksRef
      .collection(docName)
      .orderBy('projectLogo', 'desc')
      .startAt(startAt)
      .limit(length);
    const workColDoc = await transaction.get(workCol);
    const data = workColDoc.docs.map((mv) => {
      const docData = mv.data();
      const returnData = { ...docData };
      return returnData;
    });
    return { totalElements, totalPages, page, length, works: data };
  });
  return listData;
};

const WorkModel = {
  add,
  getMain,
  getList,
};

export default WorkModel;
