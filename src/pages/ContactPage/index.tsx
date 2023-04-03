import { NextPage } from 'next';
import Link from 'next/link';
import Section from '../../components/common/section';
import { AiOutlineMail } from 'react-icons/ai';
import Title from '../../components/common/title';
import ContactTemplate from '../../components/contact/contactTemplate';
import Row, { StyledInput, StyledTextarea } from '../../components/contact/row';
import Button from '../../components/common/button';
import React from 'react';

const ContactPage: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Section>
      <Title title="CONTACT" mt={2} />
      <ContactTemplate submit={handleSubmit}>
        <Row label={'기업명'} required>
          <StyledInput placeholder="기업명을 입력해주세요." />
        </Row>
        <Row label={'성함'} required>
          <StyledInput placeholder="성함을 입력해주세요." />
        </Row>
        <Row label={'연락처'} required>
          <StyledInput placeholder="연락처를 입력해주세요." />
        </Row>
        <Row label={'이메일'}>
          <StyledInput placeholder="이메일을 입력해주세요." />
        </Row>
        <Row label={'메세지'}>
          <StyledTextarea placeholder="메세지를 입력해주세요." />
        </Row>
        <div className="btns_wrap">
          <Link href={'mailto:jadw15@naver.com'}>
            <AiOutlineMail />
          </Link>
          <span>OR</span>
          <Button blue fullWidth>
            보내기
          </Button>
        </div>
      </ContactTemplate>
    </Section>
  );
};

export default ContactPage;
