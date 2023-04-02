import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { InWork } from '../../interface/in_work';
import ImageBox from '../common/imageBox';
import { NoImage } from '../../assets/images';
import Button from '../common/button';
import { media } from '../../../styles/theme';

const WorkModal = ({
  close,
  work,
}: {
  close: () => void;
  work: InWork | null;
}) => {
  console.log(work?.link);
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
              <ImageBox
                src={work.imageUrl ? work.imageUrl : NoImage}
                alt={work.projectName}
                width={1000}
                height={400}
              />
              <div className="desc_con">
                {work.description && (
                  <div className="work_con_row">
                    서비스 소개: <span>{work.description}</span>
                  </div>
                )}
                {work.period && (
                  <div className="work_con_row">
                    작업기간: <span>{work.period}</span>
                  </div>
                )}
                {work.skills && (
                  <div className="work_con_row">
                    사용기술: <span>{work.skills}</span>
                  </div>
                )}
                <Button
                  href={work.link}
                  fullWidth
                  blue={work.link}
                  disabled={!work.link}
                >
                  {work.projectName} 바로가기
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="no_info">작업을 가져오는데 실패했습니다.</div>
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
    .work_con {
      img {
        max-width: 100%;
      }
      .desc_con {
        margin-top: 2rem;
        & > .work_con_row + .work_con_row {
          margin-top: 0.7rem;
        }
        .work_con_row {
          font-size: 1.125rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          color: ${({ theme }) => theme.mode.mainColor};
          word-break: keep-all;

          span {
            font-size: 1rem;
            font-weight: normal;
            margin-left: 0.7rem;
            color: ${({ theme }) => theme.mode.textColor};
          }
        }
        & > a,
        & > button {
          min-height: 50px;
          margin-top: 1.5rem;
        }
      }
    }
  }
  ${media.tablet} {
    .modal_con {
      .work_con {
        .desc_con {
          margin-top: 2rem;
          & > .work_con_row + .work_con_row {
            margin-top: 1rem;
          }
          .work_con_row {
            font-size: 1.125rem;
            font-weight: 600;
            flex-direction: column;
            align-items: flex-start;

            span {
              font-size: 1rem;
              font-weight: normal;
              margin-left: 0;
              margin-top: 0.5em;
              color: ${({ theme }) => theme.mode.textColor};
            }
          }
          & > a,
          & > button {
            margin-top: 1.5rem;
          }
        }
      }
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
