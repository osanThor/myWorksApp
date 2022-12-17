import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

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
      color: ${colors.blue};
    }
  }

  ${media.tablet} {
    padding: 1rem;
    min-height: calc(100vh - 70px);
    &:first-child {
      &::after {
        left: 1rem;
      }
    }
  }
`;

export default Section;
