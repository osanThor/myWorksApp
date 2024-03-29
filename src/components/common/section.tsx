import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Section = ({ children }: { children: React.ReactNode }) => {
  return <SectionBlock>{children}</SectionBlock>;
};
const SectionBlock = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:first-child {
    &::before {
      content: '<html> ';
      top: 1rem;
      left: 1rem;
    }
    &::after {
      content: '<body>';
      top: 2.5rem;
      left: 2rem;
    }
    &::before,
    &::after {
      position: absolute;
      font-family: 'Caramel';
      font-size: 1.7rem;
      color: ${({ theme }) => theme.mode.subColor};
    }
  }

  ${media.tablet} {
    padding: 2.5rem 1rem;
    min-height: calc(100vh - 70px);
    &:first-child {
      &::after {
        left: 1rem;
      }
    }
  }
`;

export default Section;
