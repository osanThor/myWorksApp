import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';

const SkillWrap = () => {
  return (
    <SkillWrapBlock>
      <div className="description">
        HTML5, CSS3, ES6에 준수하여 바닐라 Javascript 작성
        <br />
        시멘틱 마크업, 효율적인 DOM 조작과 비동기 프로세스를 이해하고 있습니다.
        <br />
        React 라이브러리를 이용한 SPA 구현과 Next 프레임워크를 사용한 SSR,
        <br />
        React 라이프사이클에 대해 이해하고 있으며 이를 활용해 웹을 구축할 수
        있습니다. <br />
        Redux를 이용해 효율적인 컴포넌트 상태관리와 Redux 미들웨어를 이용한
        비동기 <br />
        RestAPI 서버통신을 할 수 있습니다.
      </div>
      <div className="stacks">
        <div className="skill_wrap">
          <div className="title">FrontEnd</div>
        </div>
        <div className="skill_wrap">
          <div className="title">BackEnd</div>
        </div>
        <div className="skill_wrap">
          <div className="title">Etc</div>
        </div>
      </div>
    </SkillWrapBlock>
  );
};

const SkillWrapBlock = styled.div`
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .description {
    padding: 2rem;
    margin: 1rem 0;
    position: relative;
    color: ${colors.gray[5]};
    line-height: 1.5rem;
    word-break: keep-all;

    span {
      &.bold {
        font-weight: 600;
      }
      &.red {
        color: ${colors.red[2]};
      }
    }
    &::before {
      content: '<p>';
      top: 0;
    }
    &::after {
      content: '</p>';
      bottom: 0;
    }
    &:after,
    &:before {
      position: absolute;
      left: 0;
      color: ${colors.blue[1]};
      font-size: 1.7rem;
      font-family: 'Caramel';
    }
  }
  .stacks {
    padding: 1rem;
    background-color: ${colors.gray[0]};
    display: flex;
    flex-direction: column;
    flex: 1;
    > div + div {
      margin-top: 1rem;
    }
    .skill_wrap {
      border-bottom: 1px solid ${colors.blue[0]};
      .title {
        color: ${colors.dark[0]};
        margin-bottom: 1rem;
      }
    }
  }

  ${media.tablet} {
    flex-direction: column;
  }
`;

export default SkillWrap;
