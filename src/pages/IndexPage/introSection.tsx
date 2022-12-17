import React from 'react';
import colors from '../../assets/colors';
import Section from '../../components/common/section';
import IntroDescript from '../../components/intro/introDescript';
import Introdeuce from '../../components/intro/introdeuce';
import MainTxt from '../../components/intro/mainTxt';
import MouseCanvase from '../../components/intro/mouseCanvase';

const IntroSection = () => {
  return (
    <Section>
      <MainTxt />
      <Introdeuce />
      <IntroDescript />
    </Section>
  );
};

export default IntroSection;
