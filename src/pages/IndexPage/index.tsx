import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from '../../layout/defaultLayout';
import CareaSection from './careaSection';
import IntroSection from './introSection';
import PortfolioSection from './portfolioSection';
import SkillsSection from './skillsSection';

const index: NextPage = () => {
  return (
    <DefaultLayout>
      <IntroSection />
      <CareaSection />
      <SkillsSection />
      <PortfolioSection />
    </DefaultLayout>
  );
};

export default index;
