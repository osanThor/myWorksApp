import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Profile } from '../../assets/images';
import colors from '../../assets/colors';
import { media } from '../../../styles/theme';

const AboutMeImage = () => {
  return (
    <AboutMeImageBlock>
      <div className="image_box">
        <Image src={Profile[0]} alt="profile" width={470} height={650} />
      </div>
    </AboutMeImageBlock>
  );
};

const AboutMeImageBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem;

  &::before {
    content: '<img src=';
    top: 0;
    left: 0;
    transform: translateY(-100%);
  }
  &::after {
    content: 'alt="it is me!" />';
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }
  &:after,
  &:before {
    position: absolute;
    color: ${colors.blue};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }
  .image_box {
    position: relative;
    &::before {
      content: 'ㄱ';
      top: 0;
      right: 0;
      transform: translate(60%, -60%);
    }
    &::after {
      content: 'ㄴ';
      bottom: 0;
      left: 0;
      transform: translate(-60%, 60%);
    }
    &:after,
    &:before {
      position: absolute;
      color: ${colors.blue};
      font-size: 2rem;
    }
  }
  img {
    max-width: 100%;
    transition: all 0.2s;
  }

  ${media.tablet} {
    width: 100%;
    margin: 1rem 0;
    img {
    }
  }
`;

export default AboutMeImage;
