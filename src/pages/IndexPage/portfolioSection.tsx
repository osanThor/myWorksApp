import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';

const PortfolioSection = () => {
  const [works, setWorks] = useState([]);
  const getMainList = async () => {
    try {
      const res = await axios.get('/api/work.getMain');
      setWorks(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMainList();
  }, []);
  return (
    <Section>
      <Title title={'PORTFOLIO'} />
      <PortfolioList works={works} />
    </Section>
  );
};

export default PortfolioSection;
