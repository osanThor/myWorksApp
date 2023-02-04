import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      themeName: string;
      bgColor: string;
      bgColor2: string;
      bgColor3: string;
      textColor: string;
      boxShadow: string;
      headerBgColor: string;
      mainColor: string;
      subColor: string;
      pointColor: string;
      pTxtColor: string;
      mTxtColor: string;
    };
  }
}
