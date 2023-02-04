import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { ThemeContext, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import { useDarkMode } from '../src/hooks/useDarkmode';
import { darkTheme, lightTheme } from '../styles/theme';
import DefaultLayout from '../src/layout/defaultLayout';
import { useContext, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  const theme =
    themeMode === 'light' ? { mode: lightTheme } : { mode: darkTheme };

  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
