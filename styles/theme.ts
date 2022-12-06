export const darkTheme = {
  bgColor: 'black',
  textColor: 'white',
  boxShadow: '0 4px 12px rgba(0 0 0 / 10%)',
};
export const lightTheme = {
  bgColor: 'white',
  textColor: 'black',
  boxShadow: '0 4px 12px rgba(0 0 0 / 10%)',
};

const theme = {
  darkTheme,
  lightTheme,
};

export default theme;

export type themeType = {
  bgColor: string;
  textColor: string;
  boxShadow: string;
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(1024),
  mobile: customMediaQuery(768),
};
