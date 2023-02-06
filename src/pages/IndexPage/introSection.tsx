import React from 'react';
import Section from '../../components/common/section';
import Effect from '../../components/intro/effect';
import IntroDescript from '../../components/intro/introDescript';
import Introdeuce from '../../components/intro/introdeuce';
import MainTxt from '../../components/intro/mainTxt';

const IntroSection = () => {
  return (
    <Section>
      <MainTxt />
      <Introdeuce />
      <IntroDescript />
      <Effect />
    </Section>
  );
};

export default IntroSection;
