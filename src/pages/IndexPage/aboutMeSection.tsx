import React from 'react';
import AboutDescrition from '../../components/about/aboutDescrition';
import AboutMeImage from '../../components/about/aboutMeImage';
import ResumeContent from '../../components/about/resumeContent';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import Flex from '../../layout/flex';

const AboutMeSection = () => {
  return (
    <Section>
      <Title title={'About Me'} />
      <Flex>
        <div style={{ flex: '1.5' }}>
          <AboutDescrition />
          <ResumeContent />
        </div>
        <AboutMeImage />
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
