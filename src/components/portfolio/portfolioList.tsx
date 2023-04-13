import styled from 'styled-components';
import { media } from '../../../styles/theme';
import ImageBox from '../common/imageBox';
import colors from '../../assets/colors';
import { InWork, InWorksProps } from '../../interface/in_work';
import { ClipLoader } from 'react-spinners';
import { useThemeContext } from '../../contexts/theme.context';

interface ProjectProps {
  pj: InWork;
  onClick: (work: InWork) => void;
}

const PortfolioList = ({
  works,
  children,
  subTitle,
  onClick,
  loading,
}: {
  works: InWorksProps;
  children?: React.ReactNode;
  subTitle?: React.ReactNode;
  onClick: (work: InWork) => void;
  loading: boolean;
}) => {
  const themeName = useThemeContext();

  if (!works || works.length <= 0) {
    return (
      <PortfolioListBlock>
        {subTitle}
        <div className="container">
          <p>데이터를 가져오는데 실패했습니다.</p>
        </div>
      </PortfolioListBlock>
    );
  }
  return (
    <PortfolioListBlock>
      {subTitle}
      <div className="project_list">
        {works?.map((pj) => (
          <ProjectItem key={pj?.projectLogo} pj={pj} onClick={onClick} />
        ))}
      </div>
      {loading && (
        <div className="container">
          <ClipLoader
            color={themeName === 'dark' ? colors.red[1] : colors.blue[1]}
            loading={loading}
            size={50}
          />
        </div>
      )}
      {children}
    </PortfolioListBlock>
  );
};

const ProjectItem = ({ pj, onClick }: ProjectProps) => {
  return (
    <div
      className="item"
      style={{ backgroundColor: pj?.bgColor }}
      onClick={() => onClick(pj)}
    >
      <div className="hover_effct" />
      <div className="hover_effct" />
      <div className="hover_txt">
        <span className="project_name">{pj?.projectName}</span>
      </div>
      <ImageBox src={pj.logoUrl} alt={pj?.projectName} isLogo />
    </div>
  );
};

const PortfolioListBlock = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 2rem;
  position: relative;
  flex: 1;
  .container {
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
      .image_box {
        max-width: 200px;
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
