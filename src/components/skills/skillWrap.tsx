import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import colors from '../../assets/colors';
import { Be, Etc, Fe } from '../../assets/images';
import skills from '../../data/skills.json';

interface SkillProps {
  skill: { imageNum: number; name: string; type: string };
}

const SkillWrap = () => {
  return (
    <SkillWrapBlock>
      <div className="description">
        HTML5, CSS3, ES6에 준수하여 바닐라 Javascript 시멘틱 마크업, 효율적인
        DOM 조작과 비동기 프로세스를 이해하고 있습니다.
        <br />
        React 라이브러리를 이용한 SPA 구현과 Next 프레임워크를 사용한 SSR, React
        라이프사이클에 대해 이해하고 있으며 이를 활용해 웹을 구축할 수 있습니다.{' '}
        <br />
        Redux를 이용해 효율적인 컴포넌트 상태관리와 Redux 미들웨어를 이용한
        비동기 RestAPI 서버통신을 할 수 있습니다.
      </div>
      <div className="stacks">
        <div className="skill_wrap">
          <div className="title">FrontEnd</div>
          <ul className="skill_list">
            {skills?.fes?.map((fe) => (
              <SkillItem key={fe?.imageNum} skill={fe} />
            ))}
          </ul>
        </div>
        <div className="skill_wrap">
          <div className="title">BackEnd</div>
          <ul className="skill_list">
            {skills?.bes?.map((be) => (
              <SkillItem key={be?.imageNum} skill={be} />
            ))}
          </ul>
        </div>
        <div className="skill_wrap">
          <div className="title">Etc</div>
          <ul className="skill_list">
            {skills?.etcs?.map((etc) => (
              <SkillItem key={etc?.imageNum} skill={etc} />
            ))}
          </ul>
        </div>
      </div>
    </SkillWrapBlock>
  );
};

const SkillItem = ({ skill }: SkillProps) => {
  return (
    <li>
      <div className="icon">
        {skill?.type === 'Fe' && (
          <Image
            src={Fe[skill.imageNum]}
            alt={`${skill.name}${skill.imageNum}`}
            layout="fill"
          />
        )}
        {skill?.type === 'Be' && (
          <Image
            src={Be[skill.imageNum]}
            alt={`${skill.name}${skill.imageNum}`}
            layout="fill"
          />
        )}
        {skill?.type === 'Etc' && (
          <Image
            src={Etc[skill.imageNum]}
            alt={`${skill.name}${skill.imageNum}`}
            layout="fill"
          />
        )}
      </div>
      <span className="cloudWin">{skill?.name}</span>
    </li>
  );
};

const SkillWrapBlock = styled.div`
  width: 100%;
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .description {
    padding: 2rem;
    margin: 1rem 0;
    position: relative;
    color: ${colors.gray[5]};
    line-height: 1.5rem;
    word-break: keep-all;
    text-align: center;

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
      left: 0;
    }
    &::after {
      content: '</p>';
      bottom: 0;
      right: 0;
    }
    &:after,
    &:before {
      position: absolute;
      color: ${colors.blue[1]};
      font-size: 1.7rem;
      font-family: 'Caramel';
    }
  }
  .stacks {
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    > div + div {
      margin-top: 1rem;
    }
    .skill_wrap {
      padding: 1em 0 2rem;
      border-bottom: 1px solid ${colors.blue[0]};
      .title {
        color: ${colors.dark[0]};
        margin-bottom: 1rem;
        padding-left: 1rem;
        position: relative;
        &::before {
          content: '';
          width: 7px;
          height: 7px;
          background-color: ${colors.blue[0]};
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .skill_list {
        display: flex;
        flex-wrap: wrap;
        li {
          margin: 1rem 0;
          width: 16.666%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .icon {
            width: 72px;
            min-width: 72px;
            height: 72px;
            position: relative;
            background-color: ${colors.white};
            border-radius: 11px;
            overflow: hidden;
          }
          span.cloudWin {
            background-color: ${colors.white};
            position: absolute;
            padding: 4px 7px;
            border-radius: 7px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            top: 0;
            left: 50%;
            transform: translate(-50%, -20px);
            text-align: center;
            transition: all 0.3s ease-in;
            opacity: 0;
            visibility: hidden;
            &::after {
              content: '';
              width: 0;
              height: 0;
              border-bottom: 10px solid ${colors.white};
              border-left: 7px solid transparent;
              border-right: 7px solid transparent;
              position: absolute;
              left: 50%;
              top: 100%;
              transform: rotate(180deg) translateX(50%);
            }
          }
          &:hover {
            span.cloudWin {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }
  }

  ${media.mobile} {
    .stacks {
      .skill_wrap {
        .title {
        }
        .skill_list {
          li {
            width: 33%;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
              width: 72px;
              min-width: 72px;
              height: 72px;
              position: relative;
              background-color: ${colors.white};
              border-radius: 11px;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
`;

export default SkillWrap;
