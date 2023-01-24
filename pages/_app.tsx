import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-styles';
import { useDarkMode } from '../src/hooks/useDarkmode';
import { darkTheme, lightTheme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [themeMode] = useDarkMode();
  const theme =
    themeMode === 'light' ? { mode: lightTheme } : { mode: darkTheme };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
