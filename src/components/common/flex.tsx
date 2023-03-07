import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Flex = ({ children }: { children: React.ReactNode }) => {
  return <FlexBlock>{children}</FlexBlock>;
};

const FlexBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export default Flex;
