import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Row = ({
  label,
  required,
  placeholder,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef.current) return;
  }, [inputRef]);
  return (
    <RowBlock>
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      <StyledInput
        ref={inputRef}
        placeholder={placeholder ? placeholder : ''}
      />
    </RowBlock>
  );
};

const RowBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  & + & {
    margin-top: 1rem;
  }
  label {
    min-width: 100px;
    margin-right: 0.7em;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.mode.mTxtColor};
    transition: all 0.2s;
    .req {
      color: ${({ theme }) => theme.mode.mainColor};
      margin-left: 0.2em;
    }
  }
`;

const StyledInput = styled.input`
  flex: 1;
  height: 50px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.mode.pTxtColor};
  background-color: ${({ theme }) => theme.mode.bgColor};
  border-radius: 0;
  transition: all 0.2s;
  padding: 0.2em 0.3rem;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.mode.mainColor};
  }
`;

export default Row;
