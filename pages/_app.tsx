import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { CustomThemeProvider } from '../src/contexts/theme.context';
import { Router } from 'next/router';
import { useState, useEffect } from 'react';
import PageLoading from '../src/components/common/loading/pageLoading';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}
