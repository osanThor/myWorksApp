import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../../../styles/theme';

const Introdeuce = () => {
  return (
    <IntrodeuceBlock>
      <svg viewBox="0 0 2000 200">
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          My Name is GIVEN:)
        </text>
      </svg>
    </IntrodeuceBlock>
  );
};

function StrokeAnima(props: any) {
  return keyframes`
        0%   {
		fill: rgba(72,138,20,0); stroke: ${props.mode.mainColor};
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(72,138,20,0); stroke: ${props.mode.subColor} }
	80%  {fill: rgba(72,138,20,0); stroke: ${props.mode.mainColor}; stroke-width: 4; }
	100% {
		fill: ${props.mode.mainColor}; stroke: rgba(54,95,160,0); 
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
    `;
}

const IntrodeuceBlock = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  font-size: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  position: relative;
  z-index: 7;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  svg text {
    animation: ${({ theme }) => StrokeAnima(theme)} 5s alternate;
    stroke-width: 2;
    stroke: ${({ theme }) => theme.mode.mainColor};
    font-size: 140px;
    font-weight: 800;
    fill: ${({ theme }) => theme.mode.mainColor};
    position: absolute;
    transform: translate(-15%, -13%);
    transition: all 0.3s ease-in-out;
  }

  &::after {
    content: '</h1>';
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
    min-height: 100px;
    padding-bottom: 1rem;
    svg text {
      stroke-width: 4px;
      font-size: 200px;
      transform: translateX(0);
    }
  }
`;

export default Introdeuce;
