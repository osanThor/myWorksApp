import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '../../styles/theme';
import Container from '../components/common/container';
import Footer from '../components/common/footer';
import PageLoading from '../components/common/loading/pageLoading';
import HeaderContainer from '../containers/headerContainer';

interface DefaultLayoutProps {
  children: React.ReactNode;
  themeToggler: () => void;
}

const DefaultLayout = ({ children, themeToggler }: DefaultLayoutProps) => {
  const [pageLoading, setpageLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setpageLoading(true);
    };
    const end = () => {
      setpageLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <DefaultLayoutBlock>
      <HeaderContainer themeToggler={themeToggler} />
      <Container>
        {pageLoading && <PageLoading />}
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
