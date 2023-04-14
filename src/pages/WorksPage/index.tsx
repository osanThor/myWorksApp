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
import { ClipLoader } from 'react-spinners';
import colors from '../../assets/colors';
import { useThemeContext } from '../../contexts/theme.context';

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

  useEffect(() => {
    setMainLoading(true);
  }, [mainPage]);
  useEffect(() => {
    setSubLoading(true);
  }, [subPage]);

  useQuery(
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
          setMainLoading(false);
          return;
        }
        setMainWorks((prev) => [...prev, ...data.data.works]);
        setMainLoading(false);
      },
    },
  );

  const subWorksQueryKey = ['subWorks', subPage];
  useQuery(
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
          setSubLoading(false);
          return;
        }
        setSubWorks((prev) => [...prev, ...data.data.works]);
        setSubLoading(false);
      },
    },
  );

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

  const themeName = useThemeContext();

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
            page={mainPage}
          >
            {mainPage !== 1 && mainLoading && (
              <div className="container">
                <ClipLoader
                  color={themeName === 'dark' ? colors.red[1] : colors.blue[1]}
                  loading={mainLoading}
                  size={50}
                />
              </div>
            )}
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
            page={subPage}
          >
            {subPage !== 1 && subLoading && (
              <div className="container">
                <ClipLoader
                  color={themeName === 'dark' ? colors.red[1] : colors.blue[1]}
                  loading={subLoading}
                  size={50}
                />
              </div>
            )}
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
