import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Section from '../../components/common/section';
import SubTitle from '../../components/common/subTitle';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';
import Tab from '../../components/portfolio/tab';
import WorkModal from '../../components/portfolio/workModal';
import { InWork } from '../../interface/in_work';

interface Props {}

const WorksPage: NextPage<Props> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(false);
  const [subLoading, setSubLoading] = useState<boolean>(false);
  const [mainworks, setMainWorks] = useState([]);
  const [subworks, setSubWorks] = useState([]);
  const [work, setWork] = useState<InWork | null>(null);
  const getMainList = async () => {
    try {
      setMainLoading(true);
      const res = await axios.get('/api/work.getList?category=mainWorks');
      setMainWorks(res.data);
      setMainLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  const getSubList = async () => {
    try {
      setSubLoading(true);
      const res = await axios.get('/api/work.getList?category=subWorks');
      setSubWorks(res.data);
      setSubLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMainList();
    getSubList();
  }, []);
  const handleClickWork = (work: InWork) => {
    setModalOpen(true);
    setWork(work);
  };
  const handleClose = () => {
    setModalOpen(false);
    setWork(null);
  };
  return (
    <>
      <Section>
        <Title title={'WORKS'} mt={2} />
        <Tab />
        <PortfolioList
          works={mainworks}
          subTitle={<SubTitle title="MAIN WORKS" />}
          onClick={handleClickWork}
          loading={mainLoading}
        />
        <PortfolioList
          works={subworks}
          subTitle={<SubTitle title="SUB WORKS" />}
          onClick={handleClickWork}
          loading={subLoading}
        />
      </Section>
      {modalOpen && <WorkModal close={handleClose} work={work} />}
    </>
  );
};

export default WorksPage;
