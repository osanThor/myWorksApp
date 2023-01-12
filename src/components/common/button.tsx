import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { css } from 'styled-components';
import colors from '../../assets/colors';
import { media } from '../../../styles/theme';

interface PropsType {
  fullWidth: string;
  blue: string;
}

const Button = (props: any) => {
  return props.href ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

const buttonStyle = css`
  border: none;
  min-width: 120px;
  min-height: 38px;
  border-radius: 7px;
  padding: 7px 1rem;
  font-size: 1rem;
  color: ${colors.gray[5]};
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  background: ${colors.gray[2]};
  &:hover {
  }

  ${(props: PropsType) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props: PropsType) =>
    props.blue &&
    css`
      background: ${colors.blue[0]};
      color: white;
    `}
 
    &:disabled {
    background: ${colors.gray[0]};
    color: ${colors.gray[3]};
    cursor: not-allowed;
  }
  ${media.tablet} {
    font-size: 14px;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  a {
    ${buttonStyle}
  }
`;

export default Button;
