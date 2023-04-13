import styled from 'styled-components';
import { media } from '../../../styles/theme';

const Tab = ({
  active,
  onClick,
}: {
  active: string;
  onClick: (s: string) => void;
}) => {
  return (
    <TabBlock>
      <TabItem
        className={active === 'main' ? 'active' : ''}
        onClick={() => onClick('main')}
      >
        <span>MAIN</span>
      </TabItem>
      <TabItem
        className={active === 'sub' ? 'active' : ''}
        onClick={() => onClick('sub')}
      >
        <span>SUB</span>
      </TabItem>
    </TabBlock>
  );
};

const TabBlock = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.mode.mainColor};
`;

const TabItem = styled.div`
  min-width: 200px;
  min-height: 45px;
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  transition: all 0.2s;
  color: ${({ theme }) => theme.mode.mTxtColor};
  position: relative;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    width: 99%;
    height: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.5s;
    border-radius: 5px 5px 0 0;
    opacity: 0;
    visibility: hidden;
    border: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-bottom: none;
    z-index: 8;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.mode.mainColor};
    }
    &::after {
      height: 99%;
      opacity: 1;
      visibility: visible;
    }
  }

  &.active {
    border-top: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-left: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-right: 1px solid ${({ theme }) => theme.mode.mainColor};
    background-color: ${({ theme }) => theme.mode.mainColor};
    border-bottom: none;
    color: white;
    &:hover {
      span {
        color: white;
      }
    }
  }

  ${media.mobile} {
    min-width: auto;
    width: 50%;
  }
`;

export default Tab;
