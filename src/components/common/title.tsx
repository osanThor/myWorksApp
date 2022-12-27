import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const Title = ({ title }: { title: string }) => {
  return (
    <TitleBlock>
      <div className="title">
        <span>{title}</span>
      </div>
    </TitleBlock>
  );
};

const Expand = keyframes`
 0% {
    background-size: 50%;
    background-position: 0 0;
  }
  20% {
    background-size: 55%;
    background-position: 0 1em;
  }
  100% {
    background-size: 325%;
    background-position: -10em -4em;
  }
`;

const ExpandRev = keyframes`
 0%{
                background-position: 0;
            }
            100%{

                background-position: 400%;
            }
`;

const TitleBlock = styled.div`
  width: 100%;
  position: relative;

  .title {
    padding: 2.5rem 2rem;
    background-size: 400%;
    font-size: 3rem;
    font-weight: 700;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        to left,
        ${colors.pink},
        #ff007d,
        #ff7328,
        #f8b800,
        ${colors.cyan},
        ${colors.blue}
      ),
      radial-gradient(circle, #f415ce, #ff007d, #ff7328, #f8b800, #a8eb12);
    animation: ${ExpandRev} 10s linear;
  }

  &::before {
    content: '<h2>';
    top: 0;
  }
  &::after {
    content: '</h2>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    color: ${colors.blue};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }

  ${media.tablet} {
    .title {
      padding: 2rem 1rem;
    }
  }
`;

export default Title;
