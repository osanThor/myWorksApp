import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const ResumeContent = () => {
  return (
    <ResumeContentBlock>
      <ul>
        <li>
          <div className="item">
            수원대 미술대학 입학
            <span className="date">2015.03</span>
          </div>
        </li>
        <li>
          <div className="item">
            대한민국 육군 입대 및 전역
            <span className="date">2017.03~2018.12</span>
          </div>
        </li>
        <li>
          <div className="item">
            수원대 미술대학 졸업
            <span className="date">2021.02</span>
          </div>
        </li>
        <li>
          <div className="item">
            굿잡아카데미 강남점 UI/UX 수료
            <span className="date">2021.04~2021.09</span>
          </div>
        </li>
        <li>
          <div className="item">
            Softlabs
            <span className="date">2021.11~</span>
          </div>
        </li>
      </ul>
    </ResumeContentBlock>
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
    &::before {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${colors.cyan};
      position: absolute;
      top: 0;
      left: 0;
    }
    li {
      width: 100%;
      padding: 2rem 1rem;
      position: relative;
      .item {
        display: flex;
        flex-direction: column;
        line-height: 1.785em;
        span.date {
          font-size: 0.75rem;
          color: ${colors.blue};
        }
      }
    }
  }
`;

export default ResumeContent;
