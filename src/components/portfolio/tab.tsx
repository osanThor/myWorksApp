import styled from 'styled-components';

const Tab = () => {
  return (
    <TabBlock>
      <TabItem className="active">
        <span>MAIN</span>
      </TabItem>
      <TabItem>
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
  overflow: hidden;
  transition: all 0.2s;
  color: ${({ theme }) => theme.mode.mTxtColor};
  position: relative;
  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    transition: all 0.5s;
  }
  &::after {
    content: '';
    width: 100%;
    height: 0;
    background-color: ${({ theme }) => theme.mode.mainColor};
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.5s;
    z-index: 8;
  }
  &:hover {
    &::after {
      height: 100%;
    }
  }

  &.active {
    border-top: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-left: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-right: 1px solid ${({ theme }) => theme.mode.mainColor};
    border-bottom: none;
    color: ${({ theme }) => theme.mode.mainColor};
    &:hover {
      color: white;
    }
  }
`;

export default Tab;
