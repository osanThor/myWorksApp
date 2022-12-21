import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from '../../layout/defaultLayout';
import CareerSection from './careerSection';
import IntroSection from './introSection';
import PortfolioSection from './portfolioSection';
import SkillsSection from './skillsSection';

const index: NextPage = () => {
  return (
    <DefaultLayout>
      <IntroSection />
      <CareerSection />
      <SkillsSection />
      <PortfolioSection />
    </DefaultLayout>
  );
};

export default index;
