import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';
import { Logo } from '../../assets/images';
import { useThemeContext } from '../../contexts/theme.context';
import ToggleThemeBtn from './toggleThemeBtn';

const Header = () => {
  const theme = useThemeContext();

  console.log(theme);

  return (
    <>
      <HeaderBlock>
        <div className="logo">
          <Image src={Logo[0]} alt="main logo" layout="fill" sizes="" />
        </div>
        <ToggleThemeBtn />
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
  flex-direction: column;
  justify-content: space-between;
  z-index: 990;
  padding: 1rem;
  box-shadow: 0 0 10px ${colors.gray[3]};
  background-color: ${({ theme }) => theme.mode.headerBgColor};

  .logo {
    width: 100%;
    height: 30px;
    position: relative;
  }

  ${media.tablet} {
    width: 100%;
    height: 70px;
    padding: 1rem;
    flex-direction: row;
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
