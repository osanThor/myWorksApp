import React from 'react';
import styled, { keyframes } from 'styled-components';

const TAGS = [
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'Tailwind',
  'React',
  'Next.js',
  'Gatsby',
  'UI/UX',
  'SVG',
  'animation',
  'webdev',
];

const SkillsLayout = () => {
  return <SkillsLayoutBlock></SkillsLayoutBlock>;
};

const Loop = keyframes`
      0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
`;

const SkillsLayoutBlock = styled.div`
  width: 100%;
`;

export default SkillsLayout;
