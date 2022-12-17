import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <h1 className="logo">로고</h1>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled.div`
  width: 70px;
  border: 1px solid;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet} {
    width: 100%;
    height: 70px;
    padding: 1rem;
    justify-content: flex-start;
  }
`;
const Spacer = styled.div`
  width: 70px;
  height: 100%;
  ${media.tablet} {
    width: 100%;
    height: auto;
    min-height: 70px;
  }
`;

export default Header;
