import React from 'react';
import styled from 'styled-components';

const ContactTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContactTemplateBlock>
      <form>{children}</form>
    </ContactTemplateBlock>
  );
};

const ContactTemplateBlock = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
  padding: 3rem 1rem;
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
`;

export default ContactTemplate;
