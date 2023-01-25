import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: {
      bgColor: string;
      textColor: string;
      boxShadow: string;
      headerBgColor: string;
    };
  }
}
