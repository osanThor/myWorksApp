import React from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../assets/colors';

const IntroDescript = () => {
  return (
    <IntroDescriptBlock>
      <div className="txt">I'm a</div>
      <div className="dynamic-txts">
        <div>
          <span>FE Developer</span>
        </div>
        <div>
          <span>UI/UX Designer</span>
        </div>
        <div>
          <span>Web Publisher</span>
        </div>
      </div>
    </IntroDescriptBlock>
  );
};

const Slide = keyframes`
     100% {
         top: -96px;
  }
`;
const Typing = keyframes`
    to {
        left: 100%;
        margin-left: 1rem;
    }
`;
const Blink = keyframes`
     to {
        border-color: transparent;
    }
`;

const IntroDescriptBlock = styled.div`
  width: 100%;
  display: flex;
  font-size: 1rem;
  align-items: center;
  position: relative;
  padding: 1.5rem 2rem;
  z-index: 6;
  &::before {
    content: '<p>';
    top: 0;
  }
  &::after {
    content: '</p>';
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

  .txt {
    margin-top: 1px;
    color: ${colors.gray[5]};
    margin-right: 0.5rem;
  }
  .dynamic-txts {
    height: 2rem;
    line-height: 2.1rem;
    overflow: hidden;

    & > div {
      width: 200px;
      height: 32px;
      color: #fc6d6c;
      position: relative;
      top: 0;
      animation: ${Slide} 6s steps(3) infinite;
      span {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          border-left: 2px solid #fc6d6c;
          width: 100%;
          height: 100%;
          background: ${colors.white};
          animation: ${Typing} 2s steps(13) infinite,
            ${Blink} 0.75s steps(12) infinite;
        }
      }
    }
  }
`;

export default IntroDescript;
