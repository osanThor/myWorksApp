import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import GlobalStyle from '../styles/global-styles';
import DefaultLayout from '../src/layout/defaultLayout';
import { CustomThemeProvider } from '../src/contexts/theme.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </CustomThemeProvider>
    </>
  );
}
