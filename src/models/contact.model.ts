import { InContact } from '../interface/in_contact';
import FirebaseAdmin from './firebase_admin';

const { Firestore } = FirebaseAdmin.getInstance();

type addResult = { result: boolean; message: string };

const CONTACT_COL = 'contacts';

const contact = async ({
  id,
  ci,
  name,
  phone,
  email,
  message,
}: InContact): Promise<addResult> => {
  try {
    const addResult = await Firestore.runTransaction(async (transaction) => {
      const contactRef = Firestore.collection(CONTACT_COL).doc(id);
      const contactDoc = await transaction.get(contactRef);
      if (contactDoc.exists) {
        // 이미 있는 id
        return false;
      }
      const addData = {
        id,
        ci,
        name,
        phone,
        email: email ? email : '',
        message: message ? message : '',
      };
      await transaction.set(contactRef, addData);
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

const ContactModel = { contact };
export default ContactModel;
