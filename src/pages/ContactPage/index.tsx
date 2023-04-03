import { NextPage } from 'next';
import Link from 'next/link';
import Section from '../../components/common/section';
import { AiOutlineMail } from 'react-icons/ai';
import Title from '../../components/common/title';
import ContactTemplate from '../../components/contact/contactTemplate';
import Row, { StyledInput, StyledTextarea } from '../../components/contact/row';
import Button from '../../components/common/button';
import React, { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

type ChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

const ContactPage: NextPage = () => {
  const [ci, setCi] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    if (name === 'ci') {
      setCi(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      if (value) {
        const lineCount =
          (e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
        if (lineCount > 3) {
          alert('메세지는 최대 3줄까지 입력가능합니다.');
          return;
        }
      }
      setMessage(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ci) return alert('기업명을 입력해주세요.');
    if (!name) return alert('성함을 입력해주세요.');
    if (!phone) return alert('연라처를 입력해주세요.');
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email && !regExp.test(email)) {
      //경고
      alert('이메일 형식이 맞지 않습니다.');
      return;
    }
    try {
      const res = await axios.post('/api/contact.contact', {
        id: uuid(),
        ci,
        name,
        phone,
        email,
        message,
      });

      if (res.status === 201) {
        alert('전송이 완료되었습니다.');
        setCi('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Section>
      <Title title="CONTACT" mt={2} />
      <ContactTemplate submit={handleSubmit}>
        <Row label={'기업명'} required>
          <StyledInput
            placeholder="기업명을 입력해주세요."
            name="ci"
            value={ci ? ci : ''}
            onChange={handleChange}
          />
        </Row>
        <Row label={'성함'} required>
          <StyledInput
            placeholder="성함을 입력해주세요."
            name="name"
            value={name ? name : ''}
            onChange={handleChange}
          />
        </Row>
        <Row label={'연락처'} required>
          <StyledInput
            placeholder="연락처를 입력해주세요."
            name="phone"
            value={phone ? phone : ''}
            onChange={handleChange}
          />
        </Row>
        <Row label={'이메일'}>
          <StyledInput
            placeholder="이메일을 입력해주세요."
            name="email"
            value={email ? email : ''}
            onChange={handleChange}
          />
        </Row>
        <Row label={'메세지'}>
          <StyledTextarea
            placeholder="메세지를 입력해주세요."
            name="message"
            value={message ? message : ''}
            onChange={handleChange}
          />
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
