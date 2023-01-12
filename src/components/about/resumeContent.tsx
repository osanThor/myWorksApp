import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';
import Observer from '../../utils/observer';
import resume from '../../data/resume.json';

interface ResumeProps {
  rs: {
    id: number;
    resumeEvent: string;
    dataTime: string;
  };
}

const ResumeContent: React.FC = () => {
  return (
    <ResumeContentBlock>
      <ul>
        {resume?.map((rs) => (
          <ResumeItem key={rs.id} rs={rs} />
        ))}
      </ul>
    </ResumeContentBlock>
  );
};

const ResumeItem = ({ rs }: ResumeProps) => {
  const targetRef = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    Observer(targetRef, setVisible);
  }, [targetRef]);

  return (
    <li className={visible ? 'on' : ''} ref={targetRef}>
      <div className="item">
        {rs.resumeEvent}
        <span className="date">{rs.dataTime}</span>
      </div>
    </li>
  );
};

const ResumeContentBlock = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  position: relative;
  &::before {
    content: '<ul>';
    top: 0;
  }
  &::after {
    content: '</ul>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    left: 0;
    color: ${colors.blue};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }
  ul {
    width: 100%;
    position: relative;
    /* background-color: ${colors.gray[1]}; */
    background-color: ${colors.cyan};
    border-radius: 0 7px 7px 0;
    padding: 1rem 0;

    &::before {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${colors.pink};
      position: absolute;
      top: 0;
      left: 0;
    }
    li {
      width: 100%;
      padding: 2.5rem 1rem;
      position: relative;
      margin-bottom: 1rem;
      transition: all 0.3s;
      opacity: 0;
      transform: translateX(-77px);
      &.on {
        opacity: 1;
        transform: translateX(0);
      }

      &::before {
        content: '';
        width: 10px;
        height: 10px;
        border: 3px solid ${colors.blue};
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
      .item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 1.785em;
        position: absolute;
        top: 0;
        left: 1rem;
        padding: 0 2rem;
        background-color: ${colors.white};
        border-radius: 7px;
        span.date {
          font-size: 0.75rem;
          color: ${colors.blue};
        }
        &::before {
          content: '<li>';
          left: 3px;
          top: 0;
        }
        &::after {
          content: '</li>';
          right: 5px;
          bottom: 0;
        }
        &:after,
        &:before {
          position: absolute;
          color: ${colors.blue};
          font-size: 1.25rem;
          font-family: 'Caramel';
        }
      }
    }
  }
`;

export default ResumeContent;
