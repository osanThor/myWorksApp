import React from 'react';
import styled from 'styled-components';
import colors from '../../assets/colors';

const AboutDescrition = () => {
  return (
    <AboutDescritionBlock>
      안녕하세요. 저는 프론트엔드 개발자 이준영입니다.
      <br />
      편안한 UI, 흥미로운 UX에 관심과 열정이 많으며, 끊임없이 고민하고 경험하며
      발전해 나가고 있습니다.
      <br />
      현재 SI 회사에서 Client 구축을 담당하고 있고, 필요에 따라 기획과 디자인도
      병행하고 있습니다.
      <br />
      도전을 두려워하지 않고 트랜드와 클린 코드에 관심을 기울이며
      <span className="bold red">매일 성장하는 개발자</span>가 되겠습니다.
      감사합니다.
    </AboutDescritionBlock>
  );
};

const AboutDescritionBlock = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  position: relative;
  color: ${({ theme }) => theme.mode.pTxtColor};
  line-height: 1.5rem;
  flex: 1.5;
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
    color: ${({ theme }) => theme.mode.subColor};
    font-size: 1.7rem;
    font-family: 'Caramel';
  }
`;

export default AboutDescrition;
