import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const SkillWrap = () => {
  return <SkillWrapBlock>스킬</SkillWrapBlock>;
};

const SkillWrapBlock = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${colors.cyan};
`;

export default SkillWrap;
