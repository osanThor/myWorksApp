import axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Section from '../../components/common/section';
import SubTitle from '../../components/common/subTitle';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';

interface Props {}

const WorksPage: NextPage<Props> = () => {
  const [works, setWorks] = useState([]);
  const getMainList = async () => {
    try {
      const res = await axios.get('/api/work.getList');
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
      <Title title={'WORKS'} />
      <SubTitle title="MAIN WORKS" />
      <PortfolioList works={works} />
    </Section>
  );
};

export default WorksPage;
