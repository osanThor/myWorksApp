import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
