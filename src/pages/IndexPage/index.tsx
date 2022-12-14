import { NextPage } from 'next';
import React from 'react';
import DefaultLayout from '../../layout/defaultLayout';
import AboutMeSection from './aboutMeSection';
import IntroSection from './introSection';
import PortfolioSection from './portfolioSection';
import SkillsSection from './skillsSection';

const index: NextPage = () => {
  return (
    <DefaultLayout>
      <IntroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />
    </DefaultLayout>
  );
};

export default index;
