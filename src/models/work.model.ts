import CustomServerError from '../controllers/error/custom_server_error';
import { InWork } from '../interface/in_work';
import FirebaseAdmin from './firebase_admin';

const WORK_COL = 'works';

const { Firestore } = FirebaseAdmin.getInstance();

type addResult = { result: boolean; message: string };

const add = async ({
  projectLogo,
  projectName,
  period,
  bgColor,
}: InWork): Promise<addResult> => {
  try {
    const addResult = await Firestore.runTransaction(async (transaction) => {
      const workRef = FirebaseAdmin.getInstance()
        .Firestore.collection(WORK_COL)
        .doc(projectName);
      const workDoc = await transaction.get(workRef);
      if (workDoc.exists) {
        // 이미 추가된 상태
        return false;
      }
      const addData = {
        projectLogo,
        projectName,
        period,
        bgColor,
      };
      await transaction.set(workRef, addData);
      return true;
    });
    if (addResult === false) {
      return { result: true, message: 'SUCCESS' };
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
      .orderBy('projectLogo')
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
};

export default WorkModel;
