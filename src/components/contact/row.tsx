import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const Row = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <RowBlock>
      <label>
        {label}
        {required && <span className="req">*</span>}
      </label>
      {children}
    </RowBlock>
  );
};

const RowBlock = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  & + & {
    margin-top: 1rem;
  }
  label {
    line-height: 50px;
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

  ${media.tablet} {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    label {
      line-height: 3rem;
    }
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  min-height: 50px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.mode.pTxtColor};
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.textColor};
  border-radius: 0;
  transition: all 0.2s;
  padding: 1em;
  font-size: 1rem;
  &::placeholder {
    font-size: 0.875rem;
    color: ${colors.gray};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.mode.mainColor};
  }
  ${media.tablet} {
    width: 100%;
  }
`;
export const StyledTextarea = styled.textarea`
  flex: 1;
  min-height: 100px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.mode.pTxtColor};
  background-color: ${({ theme }) => theme.mode.bgColor};
  color: ${({ theme }) => theme.mode.textColor};
  border-radius: 0;
  transition: all 0.2s;
  padding: 1em;
  font-size: 1rem;
  resize: none;
  &::placeholder {
    font-size: 0.875rem;
    color: ${colors.gray};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.mode.mainColor};
  }
  ${media.tablet} {
    width: 100%;
  }
`;

export default Row;
