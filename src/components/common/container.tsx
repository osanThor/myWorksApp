import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};

const ContainerBlock = styled.div`
  flex: 1;
  min-height: 100%;
  overflow-y: auto;
  position: relative;
`;

export default Container;
