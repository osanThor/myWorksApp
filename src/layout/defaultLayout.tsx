import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import Container from '../components/common/container';
import Footer from '../components/common/footer';
import HeaderContainer from '../containers/headerContainer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  themeToggler: () => void;
}

const DefaultLayout = ({ children, themeToggler }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutBlock>
      <HeaderContainer themeToggler={themeToggler} />
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
  transition: all 0.5s;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export default DefaultLayout;
