import colors from '../src/assets/colors';

const darkTheme = {
  themeName: 'dark',
  bgColor: `${colors.dark[1]}`,
  textColor: 'white',
  boxShadow: '0 4px 12px rgba(0 0 0 / 10%)',
  headerBgColor: 'rgba(37, 38, 43, 0.7)',
};
const lightTheme = {
  themeName: 'light',
  bgColor: `${colors.white}`,
  textColor: 'black',
  boxShadow: '0 4px 12px rgba(0 0 0 / 10%)',
  headerBgColor: 'rgba(255, 248, 243, 0.7)',
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
