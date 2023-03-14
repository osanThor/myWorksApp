import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { CustomThemeProvider } from '../src/contexts/theme.context';
import { Router } from 'next/router';
import { useState, useEffect } from 'react';
import PageLoading from '../src/components/common/loading/pageLoading';

export default function App({ Component, pageProps }: AppProps) {
  const [pageLoading, setpageLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setpageLoading(true);
    };
    const end = () => {
      setpageLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <>
      <CustomThemeProvider>
        {pageLoading ? <PageLoading /> : <Component {...pageProps} />}
      </CustomThemeProvider>
    </>
  );
}
