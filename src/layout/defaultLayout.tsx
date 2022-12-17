import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayoutBlock>
      <Header />
      {children}
    </DefaultLayoutBlock>
  );
};

const DefaultLayoutBlock = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export default DefaultLayout;
