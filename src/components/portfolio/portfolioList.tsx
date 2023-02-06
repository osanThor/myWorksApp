import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import Button from '../common/button';
import Image from 'next/image';
import { PLogo } from '../../assets/images';
import projects from '../../data/main_project.json';
import ImageBox from '../common/imageBox';
import colors from '../../assets/colors';
import { useRouter } from 'next/router';

interface ProjectProps {
  pj: {
    id: number;
    projectLogo: number;
    projectName: string;
    period: string;
    bgColor: string;
  };
  onClick: () => void;
}

const PortfolioList = () => {
  const router = useRouter();
  const handleClick = () => {
    alert('준비중입니다.');
    return;
  };
  return (
    <PortfolioListBlock>
      <div className="project_list">
        {projects?.map((pj) => (
          <ProjectItem key={pj?.id} pj={pj} onClick={handleClick} />
        ))}
      </div>
      <div className="btn_area">
        <Button blue onClick={() => router.push('/works')}>
          더보기
        </Button>
      </div>
    </PortfolioListBlock>
  );
};

const ProjectItem = ({ pj, onClick }: ProjectProps) => {
  return (
    <div
      className="item"
      style={{ backgroundColor: pj?.bgColor }}
      onClick={onClick}
    >
      <div className="hover_effct" />
      <div className="hover_effct" />
      <div className="hover_txt">
        <span className="project_name">{pj?.projectName}</span>
      </div>
      <ImageBox
        src={PLogo[pj?.projectLogo]}
        alt={pj?.projectName}
        width={150}
        height={undefined}
      />
    </div>
  );
};

const PortfolioListBlock = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 2rem;
  position: relative;
  .project_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .item {
      width: 25%;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        transition: all 0.2s;
        opacity: 0;
      }
      .hover_effct {
        transition: all 0.5s ease-in-out;
        width: 0;
        height: 0;
        position: absolute;
        z-index: 9;
        opacity: 0;
        color: ${colors.white};

        &:first-child {
          border-top: 1px solid;
          border-left: 1px solid;
          top: 6px;
          left: 6px;
        }
        &:nth-child(2) {
          border-bottom: 1px solid;
          border-right: 1px solid;
          bottom: 6px;
          right: 6px;
        }
      }
      .hover_txt {
        transition: all 0.2s;
        color: ${colors.white};
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
        opacity: 0;
        span.project_name {
          font-size: 1.25rem;
          text-transform: uppercase;
          line-height: 2.25em;
        }
      }
      img {
        max-width: calc(100% - 36px);
        transition: all 0.2s;
      }
      &:hover {
        &::after {
          opacity: 0.5;
        }
        .hover_effct {
          opacity: 1;
          width: calc(100% - 12px);
          height: calc(100% - 12px);
        }
        .hover_txt {
          opacity: 1;
        }
        img {
          scale: 1.1;
        }
      }
    }
  }
  .btn_area {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &::before {
    content: '<div>';
    top: 0;
  }
  &::after {
    content: '</div>';
    bottom: 0;
  }
  &:after,
  &:before {
    position: absolute;
    color: ${({ theme }) => theme.mode.subColor};
    font-size: 1.7rem;
    left: 0;
    font-family: 'Caramel';
  }

  ${media.tablet} {
    padding: 2rem 0;
    .project_list {
      .item {
        width: 33.333%;
      }
    }
  }
  ${media.mobile} {
    padding: 3rem 0;
    .project_list {
      .item {
        width: 50%;
      }
    }
    .btn_area {
      button {
        width: 100%;
        height: 48px;
      }
    }
  }
`;

export default PortfolioList;
