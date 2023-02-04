import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      themeName: string;
      bgColor: string;
      textColor: string;
      boxShadow: string;
      headerBgColor: string;
    };
  }
}
