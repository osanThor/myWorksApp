import React from 'react';
import colors from '../../assets/colors';
import Section from '../../components/common/section';
import IntroDescript from '../../components/intro/introDescript';
import MainTxt from '../../components/intro/mainTxt';

const IntroSection = () => {
  return (
    <Section>
      <MainTxt />
      <IntroDescript />
    </Section>
  );
};

export default IntroSection;
