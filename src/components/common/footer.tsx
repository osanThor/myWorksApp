import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import { Logo } from '../../assets/images';
import Flex from './flex';

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer_container">
        <Flex>
          <div className="copy_txt">Copyright © 2023 GIVEN</div>
          <div className="f_logo">
            <Image src={Logo[1]} alt="footer_logo" layout="fill" />
          </div>
        </Flex>
      </div>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  width: 100%;
  padding: 1rem 2rem 5rem;
  background-color: ${({ theme }) => theme.mode.mainColor};
  position: relative;
  color: white;
  .footer_container {
    width: 100%;
    position: relative;
    padding: 3rem 1rem;
    .f_logo {
      width: 100px;
      height: 30px;
      position: relative;
    }
    &::before {
      content: '<footer> ';
      top: 0;
    }
    &::after {
      content: '</footer>';
      bottom: 0;
    }
    &::before,
    &::after {
      position: absolute;
      font-family: 'Caramel';
      font-size: 1.7rem;
      left: 0;
      color: white;
    }
  }
  &::before {
    content: '</body> ';
    bottom: 3rem;
    left: 2rem;
  }
  &::after {
    content: '</html>';
    bottom: 1rem;
    left: 1rem;
  }
  &::before,
  &::after {
    position: absolute;
    font-family: 'Caramel';
    font-size: 1.7rem;
    color: white;
  }

  ${media.tablet} {
    padding: 1rem 1rem 5rem;
    &::before,
    &::after {
      left: 1rem;
    }
    .footer_container {
      .f_logo {
        order: 1;
        margin-bottom: 1rem;
      }
      .copy_txt {
        order: 2;
      }
      &::before,
      &::after {
        left: 0;
      }
    }
  }
`;

export default Footer;
