import styled, { keyframes } from 'styled-components';
import { Profile } from '../../assets/images';
import colors from '../../assets/colors';
import { media } from '../../../styles/theme';
import ImageBox from '../common/imageBox';

const AboutMeImage = () => {
  return (
    <AboutMeImageBlock>
      <div className="image_box">
        <ImageBox src={Profile[0]} alt="profile" />
      </div>
    </AboutMeImageBlock>
  );
};

const Rotate = keyframes`
     from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const AboutMeImageBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem;

  &::before {
    content: '<img src=';
    top: 0;
    left: 0;
    transform: translateY(-100%);
  }
  &::after {
    content: 'alt="it is me!" />';
    bottom: 0;
    right: 0;
    transform: translateY(100%);
  }
  &:after,
  &:before {
    position: absolute;
    color: ${({ theme }) => theme.mode.subColor};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }
  .image_box {
    position: relative;
    &::before {
      content: 'ㄱ';
      top: 0;
      right: 0;
      transform: translate(60%, -60%);
    }
    &::after {
      content: 'ㄴ';
      bottom: 0;
      left: 0;
      transform: translate(-60%, 60%);
    }
    &:after,
    &:before {
      position: absolute;
      color: ${({ theme }) => theme.mode.subColor};
      font-size: 2rem;
    }
  }
  .loading {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;

    border: 4px solid ${colors.blue[0]};
    border-top-color: transparent;
    border-left-color: transparent;

    animation: ${Rotate} 0.8s infinite linear;
    z-index: 100;
  }
  img {
    max-width: 100%;
    transition: all 0.2s;
  }

  ${media.tablet} {
    width: 100%;
    margin: 2rem 0;
  }
`;

export default AboutMeImage;
