import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const SubTitle = ({ title }: { title: string }) => {
  return (
    <SubTitleBlock>
      <div className="title">
        <span>{title}</span>
      </div>
    </SubTitleBlock>
  );
};

const SubTitleBlock = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1rem;

  .title {
    padding: 2.5rem 2rem;
    background-size: 400%;
    font-size: 2rem;
    font-weight: 700;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        to left,
        ${colors.pink},
        ${({ theme }) => theme.mode.pointColor},
        ${({ theme }) => theme.mode.mainColor}
      ),
      radial-gradient(circle, #f415ce, #ff007d, #ff7328, #f8b800, #a8eb12);
    transition: all 0.3s ease-in;
  }

  &::before {
    content: '<h3>';
    top: 0;
  }
  &::after {
    content: '</h3>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.mode.subColor};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }

  ${media.tablet} {
    .title {
      padding: 1rem 0.5rem;
    }
  }
`;

export default SubTitle;
