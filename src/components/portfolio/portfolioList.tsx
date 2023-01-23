import React from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/theme';
import Button from '../common/button';
import Image from 'next/image';
import { PLogo } from '../../assets/images';
import projects from '../../data/main_project.json';
import ImageBox from '../common/imageBox';
import colors from '../../assets/colors';

interface ProjectProps {
  pj: {
    id: number;
    projectLogo: number;
    projectName: string;
    period: string;
    bgColor: string;
  };
}

const PortfolioList = () => {
  return (
    <PortfolioListBlock>
      <div className="project_list">
        {projects?.map((pj) => (
          <ProjectItem key={pj?.id} pj={pj} />
        ))}
      </div>
      <div className="btn_area">
        <Button blue>더보기</Button>
      </div>
    </PortfolioListBlock>
  );
};

const ProjectItem = ({ pj }: ProjectProps) => {
  return (
    <div className="item" style={{ backgroundColor: pj?.bgColor }}>
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
      img {
        max-width: calc(100% - 36px);
      }
      &:hover {
        scale: 1.1;
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
    color: ${colors.blue[1]};
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
    .project_list {
      .item {
        width: 50%;
      }
    }
  }
`;

export default PortfolioList;
