import React from 'react';
import styled from 'styled-components';

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
`;
const Spacer = styled.div`
  width: 70px;
  height: 100%;
`;

export default Header;
