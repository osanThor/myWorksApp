import colors from '../src/assets/colors';

const darkTheme = {
  themeName: 'dark',
  bgColor: `${colors.dark[2]}`,
  bgColor2: `${colors.dark[3]}`,
  bgColor3: `${colors.dark[3]}`,
  textColor: 'white',
  boxShadow: '0 4px 12px #6b2828',
  headerBgColor: 'rgba(37, 38, 43, 0.7)',
  mainColor: `${colors.red[1]}`,
  subColor: `${colors.red[2]}`,
  pointColor: `${colors.pink}`,
  pTxtColor: `${colors.gray[3]}`,
  mTxtColor: `${colors.gray[0]}`,
};
const lightTheme = {
  themeName: 'light',
  bgColor: `${colors.white}`,
  bgColor2: `${colors.white}`,
  bgColor3: `${colors.gray[1]}`,
  textColor: 'black',
  boxShadow: `0 0 10px ${colors.gray[3]}`,
  headerBgColor: 'rgba(255, 248, 243, 0.7)',
  mainColor: `${colors.blue[0]}`,
  subColor: `${colors.blue[1]}`,
  pointColor: `${colors.cyan}`,
  pTxtColor: `${colors.gray[5]}`,
  mTxtColor: `${colors.dark[0]}`,
};

export { darkTheme, lightTheme };

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(768),
};
