import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Section from '../../components/common/section';
import SubTitle from '../../components/common/subTitle';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';
import WorkModal from '../../components/portfolio/workModal';
import { InWork } from '../../interface/in_work';

interface Props {}

const WorksPage: NextPage<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState<InWork | null>(null);
  const getMainList = async () => {
    try {
      const res = await axios.get('/api/work.getList?category=mainWorks');
      setWorks(res.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMainList();
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
        <PortfolioList
          works={works}
          subTitle={<SubTitle title="MAIN WORKS" />}
          onClick={handleClickWork}
        />
      </Section>
      {modalOpen && <WorkModal close={handleClose} work={work} />}
    </>
  );
};

export default WorksPage;
