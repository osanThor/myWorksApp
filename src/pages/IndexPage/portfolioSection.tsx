import React from 'react';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';

const PortfolioSection = () => {
  return (
    <Section>
      <Title title={'PORTFOLIO'} />
      <PortfolioList />
    </Section>
  );
};

export default PortfolioSection;
