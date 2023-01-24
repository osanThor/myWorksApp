import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import Container from '../components/common/container';
import Footer from '../components/common/footer';
import Header from '../components/common/header';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayoutBlock>
      <Header />
      <Container>
        {children}
        <Footer />
      </Container>
    </DefaultLayoutBlock>
  );
};

const DefaultLayoutBlock = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.textColor};
  position: relative;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export default DefaultLayout;
