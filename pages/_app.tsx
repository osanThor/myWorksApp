import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import { useDarkMode } from '../src/hooks/useDarkmode';
import { darkTheme, lightTheme } from '../styles/theme';
import DefaultLayout from '../src/layout/defaultLayout';

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, useDarkmode] = useDarkMode();
  const theme =
    themeMode === 'light' ? { mode: lightTheme } : { mode: darkTheme };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout themeMode={themeMode} useDarkmode={useDarkmode}>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </>
  );
}
