import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../../components/common/button';
import Section from '../../components/common/section';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';
import WorkModal from '../../components/portfolio/workModal';
import { InWork } from '../../interface/in_work';

const PortfolioSection = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [workOpen, setWorkOpen] = useState<boolean>(false);
  const [work, setWork] = useState<InWork | null>(null);
  const router = useRouter();
  const getMainList = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/work.getMain');
      setWorks(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMainList();
  }, []);
  const handleClickWork = (work: InWork) => {
    setWorkOpen(true);
    setWork(work);
  };
  const handleClose = () => {
    setWorkOpen(false);
    setWork(null);
  };

  return (
    <>
      <Section>
        <Title title={'PORTFOLIO'} />
        <PortfolioList
          works={works}
          onClick={handleClickWork}
          loading={loading}
          page={1}
        >
          <div className="btn_area">
            <Button blue onClick={() => router.push('/works')}>
              더보기
            </Button>
          </div>
        </PortfolioList>
      </Section>
      {workOpen && <WorkModal close={handleClose} work={work} />}
    </>
  );
};

export default PortfolioSection;
