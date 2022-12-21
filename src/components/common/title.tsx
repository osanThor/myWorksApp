import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const Title = ({ title }: { title: string }) => {
  return (
    <TitleBlock>
      <div className="title">
        <svg viewBox="0 0 100 100">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            {title}
          </text>
        </svg>
      </div>
    </TitleBlock>
  );
};

const Stroke = keyframes`
  0%   {
		fill: rgba(72,138,20,0); stroke: ${colors.blue};
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(72,138,20,0); stroke: ${colors.blue}; }
	80%  {fill: rgba(72,138,20,0); stroke: ${colors.blue}; stroke-width: 4; }
	100% {
		fill: ${colors.blue}; stroke: rgba(54,95,160,0); 
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
  `;

const TitleBlock = styled.div`
  width: 100%;
  position: relative;
  .title {
    position: relative;
    min-height: 150px;
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    text {
      animation: ${Stroke} 5s alternate;
      stroke-width: 2;
      stroke: ${colors.blue};
      font-size: 50px;
      font-weight: 800;
      fill: ${colors.blue};
      position: absolute;
      transition: all 0.3s ease-in-out;
      &:hover {
        fill: ${colors.white};
      }
    }
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
      width: 100%;
      min-height: 100px;
      svg {
        text {
          font-size: 30px;
        }
      }
    }
  }
`;

export default Title;
