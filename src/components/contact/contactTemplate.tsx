import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import Lottie from 'lottie-react';
import developerAnimation from '../../data/lottie/developer.json';

const ContactTemplate = ({
  children,
  submit,
}: {
  children: React.ReactNode;
  submit: (e: React.FormEvent) => void;
}) => {
  return (
    <ContactTemplateBlock>
      <Lottie animationData={developerAnimation} />
      <form onSubmit={submit}>{children}</form>
    </ContactTemplateBlock>
  );
};

const ContactTemplateBlock = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  margin-top: 1rem;
  position: relative;
  padding: 3rem 1rem;
  gap: 1rem;
  form {
    flex-grow: 1;
  }
  &::before {
    content: '<form>';
    top: 0;
  }
  &::after {
    content: '</form>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.mode.subColor};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }
  .btns_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 3rem;
    padding: 0 1rem;
    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: ${({ theme }) => theme.mode.pointColor};
    }
    & > span {
      margin: 0 1.5rem;
    }
  }
  ${media.tablet} {
    flex-direction: column;
    .btns_wrap {
      flex-direction: column;
      padding: 0;
      & > button {
        order: 1;
        min-height: 50px;
      }
      & > a {
        order: 3;
      }
      & > span {
        order: 2;
        margin: 1rem 0;
      }
    }
  }
`;

export default ContactTemplate;
