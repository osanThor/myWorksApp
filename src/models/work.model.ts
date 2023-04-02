import { InWork } from '../interface/in_work';
import FirebaseAdmin from './firebase_admin';

const WORK_COL = 'works';
const MAIN_COL = 'mainWorks';
const SUB_COL = 'mainWorks';

const { Firestore } = FirebaseAdmin.getInstance();

type addResult = { result: boolean; message: string };

const add = async ({
  projectLogo,
  projectName,
  period,
  bgColor,
  category,
}: InWork): Promise<addResult> => {
  if (!category) {
    return { result: false, message: '카테고리가 없습니다.' };
  }
  try {
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
      const workRef = worksRef.collection(docName).doc(projectName);
      const workDoc = await transaction.get(workRef);
      if (workDoc.exists) {
        // 이미 있는 프로젝트
        return false;
      }
      const addData = {
        projectLogo,
        projectName,
        period,
        bgColor,
        category,
      };
      await transaction.set(workRef, addData);
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

const getMain = async ({ length = 8 }: { length: number }) => {
  const listData = await Firestore.runTransaction(async (transaction) => {
    const workCol = Firestore.collection(WORK_COL)
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
  page = 1,
  length = 8,
}: {
  page?: number;
  length?: number;
}) => {
  const listData = await Firestore.runTransaction(async (transaction) => {
    const workCol = Firestore.collection(WORK_COL)
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

const WorkModel = {
  add,
  getMain,
  getList,
};

export default WorkModel;
