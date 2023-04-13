import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Section from '../../components/common/section';
import SubTitle from '../../components/common/subTitle';
import Title from '../../components/common/title';
import PortfolioList from '../../components/portfolio/portfolioList';
import Tab from '../../components/portfolio/tab';
import WorkModal from '../../components/portfolio/workModal';
import { InWork, InWorksProps } from '../../interface/in_work';
import { useQuery } from 'react-query';
import Button from '../../components/common/button';

interface Props {}

const WorksPage: NextPage<Props> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [mainPage, setMainPage] = useState(1);
  const [mainTotalPage, setMainTotalPage] = useState(1);
  const [subPage, setSubPage] = useState(1);
  const [subTotalPage, setSubTotalPage] = useState(1);
  const [mainLoading, setMainLoading] = useState<boolean>(false);
  const [subLoading, setSubLoading] = useState<boolean>(false);
  const [mainWorks, setMainWorks] = useState<InWorksProps>([]);
  const [subWorks, setSubWorks] = useState<InWorksProps>([]);
  const [work, setWork] = useState<InWork | null>(null);
  const mainWorksQueryKey = ['mainworks', mainPage];
  const getMain = useQuery(
    mainWorksQueryKey,
    async () =>
      await axios.get<{
        totalElements: number;
        totalPages: number;
        page: number;
        size: number;
        works: InWorksProps;
      }>(`/api/work.getList?category=mainWorks&page=${mainPage}&length=8`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setMainTotalPage(data.data.totalPages);
        if (mainPage === 1) {
          setMainWorks([...data.data.works]);
          return;
        }
        setMainWorks((prev) => [...prev, ...data.data.works]);
      },
    },
  );

  const subWorksQueryKey = ['subWorks', subPage];
  const getSub = useQuery(
    subWorksQueryKey,
    async () =>
      await axios.get<{
        totalElements: number;
        totalPages: number;
        page: number;
        size: number;
        works: InWorksProps;
      }>(`/api/work.getList?category=subWorks&page=${subPage}&length=8`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setSubTotalPage(data.data.totalPages);
        if (mainPage === 1) {
          setSubWorks([...data.data.works]);
          return;
        }
        setSubWorks((prev) => [...prev, ...data.data.works]);
      },
    },
  );

  useEffect(() => {
    if (getMain.isLoading) {
      setMainLoading(true);
    } else {
      setMainLoading(false);
    }
    if (getSub.isLoading) {
      setSubLoading(true);
    } else {
      setSubLoading(false);
    }
  }, [getMain, getSub]);

  const handleClickWork = (work: InWork) => {
    setModalOpen(true);
    setWork(work);
  };
  const handleClose = () => {
    setModalOpen(false);
    setWork(null);
  };

  const [active, setActive] = useState<string>('main');
  const handleClickActive = (cate: string) => {
    setActive(cate);
  };
  return (
    <>
      <Section>
        <Title title={'WORKS'} mt={2} />
        <Tab active={active} onClick={handleClickActive} />
        {active === 'main' ? (
          <PortfolioList
            works={mainWorks}
            subTitle={<SubTitle title="MAIN WORKS" />}
            onClick={handleClickWork}
            loading={mainLoading}
          >
            {mainTotalPage > mainPage && (
              <div className="btn_area">
                <Button
                  blue
                  fullWidth
                  onClick={() => setMainPage((prev) => prev + 1)}
                >
                  더보기
                </Button>
              </div>
            )}
          </PortfolioList>
        ) : (
          <PortfolioList
            works={subWorks}
            subTitle={<SubTitle title="SUB WORKS" />}
            onClick={handleClickWork}
            loading={subLoading}
          >
            {subTotalPage > subPage && (
              <div className="btn_area">
                <Button
                  blue
                  fullWidth
                  onClick={() => setSubPage((prev) => prev + 1)}
                >
                  더보기
                </Button>
              </div>
            )}
          </PortfolioList>
        )}
      </Section>
      {modalOpen && <WorkModal close={handleClose} work={work} />}
    </>
  );
};

export default WorksPage;
