import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { InWork } from '../../interface/in_work';

const WorkModal = ({
  close,
  work,
}: {
  close: () => void;
  work: InWork | null;
}) => {
  return (
    <WorkModalBlock>
      <div className="modal_con">
        <CloseBtn onClick={close}>
          <AiOutlineClose />
        </CloseBtn>
        {work ? (
          <>
            <div className="title_con">{work.projectName}</div>
            <div className="work_con">
              <div className="work_con_row">작업기간: {work.period}</div>
            </div>
          </>
        ) : (
          <div className="no_info">값이 없습니다.</div>
        )}
      </div>
    </WorkModalBlock>
  );
};

const WorkModalBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .modal_con {
    width: calc(100% - 32px);
    max-width: 800px;
    min-height: 300px;
    background-color: ${({ theme }) => theme.mode.bgColor};
    color: ${({ theme }) => theme.mode.textColor};
    padding: 1.5em 2em;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    .title_con {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    .no_info {
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  font-size: 1.25rem;
  border: none;
  background: none;
  width: 1.7em;
  height: 1.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
  color: ${({ theme }) => theme.mode.textColor};
  &:hover {
    background-color: ${({ theme }) => theme.mode.mainColor};
    color: white;
  }
`;

export default WorkModal;
