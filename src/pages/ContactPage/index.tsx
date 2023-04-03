import { NextPage } from 'next';
import Link from 'next/link';
import Section from '../../components/common/section';
import { AiOutlineMail } from 'react-icons/ai';
import Title from '../../components/common/title';
import ContactTemplate from '../../components/contact/contactTemplate';
import Row from '../../components/contact/row';
import Flex from '../../components/common/flex';

const ContactPage: NextPage = () => {
  return (
    <Section>
      <Title title="CONTACT" mt={2} />
      <ContactTemplate>
        <Row label={'기업명'} required placeholder="기업명을 입력해주세요." />
        <Row label={'성함'} required placeholder="성함을 입력해주세요." />
        <Row label={'연락처'} required placeholder="연락처를 입력해주세요." />
        <Link href={'mailto:jadw15@naver.com'}>
          <AiOutlineMail />
        </Link>
      </ContactTemplate>
    </Section>
  );
};

export default ContactPage;
