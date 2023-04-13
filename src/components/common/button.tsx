import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { css } from 'styled-components';
import colors from '../../assets/colors';
import { media } from '../../../styles/theme';

interface PropsType {
  fullWidth?: boolean;
  blue?: boolean;
}

const Button = (props: any) => {
  return props.href ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

const buttonStyle = css`
  border: none;
  min-width: 120px;
  min-height: 38px;
  border-radius: 30px;
  padding: 7px 1rem;
  font-size: 1rem;
  font-family: 'LINESeedKR';
  color: ${({ theme }) => theme.mode.pTxtColor};
  border: 1px solid ${({ theme }) => theme.mode.pTxtColor};
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ theme }) => theme.mode.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  &:hover {
    background-color: ${({ theme }) => theme.mode.pTxtColor};
    color: white;
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
      border-color: ${({ theme }) => theme.mode.mainColor};
      color: ${({ theme }) => theme.mode.mainColor};

      &:hover {
        background-color: ${({ theme }) => theme.mode.mainColor};
        color: white;
      }
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
  ${buttonStyle}
`;

export default Button;
