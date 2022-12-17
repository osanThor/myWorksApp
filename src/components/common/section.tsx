import React from 'react';
import styled from 'styled-components';
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
`;

export default Section;
