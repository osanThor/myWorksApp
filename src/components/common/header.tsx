import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';
import { Logo } from '../../assets/images';

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <div className="logo">
          <Image src={Logo} alt="main logo" layout="fill" />
        </div>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled.div`
  width: 120px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 990;
  padding: 1rem;
  box-shadow: 0 0 10px ${colors.gray[3]};
  background-color: rgba(255, 248, 243, 0.7);

  .logo {
    width: 100%;
    height: 38px;
    position: relative;
  }

  ${media.tablet} {
    width: 100%;
    height: 70px;
    padding: 1rem;
    justify-content: flex-start;
    align-items: center;

    .logo {
      width: 100px;
    }
  }
`;
const Spacer = styled.div`
  width: 120px;
  height: 100%;
  ${media.tablet} {
    width: 100%;
    height: auto;
    min-height: 60px;
  }
`;

export default Header;
