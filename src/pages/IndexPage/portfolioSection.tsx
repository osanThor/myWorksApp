import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../../components/common/button';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';

const PortfolioSection = () => {
  const [works, setWorks] = useState([]);
  const router = useRouter();
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
      <PortfolioList works={works}>
        <div className="btn_area">
          <Button blue onClick={() => router.push('/works')}>
            더보기
          </Button>
        </div>
      </PortfolioList>
    </Section>
  );
};

export default PortfolioSection;
