import React from 'react';
import colors from '../../assets/colors';
import AboutDescrition from '../../components/about/aboutDescrition';
import AboutMeImage from '../../components/about/aboutMeImage';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import Flex from '../../layout/flex';

const AboutMeSection = () => {
  return (
    <Section>
      <Title title={'About Me'} />
      <Flex>
        <AboutDescrition />
        <AboutMeImage />
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
