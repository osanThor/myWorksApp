import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { CustomThemeProvider } from '../src/contexts/theme.context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRef } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <CustomThemeProvider>
          <Component {...pageProps} />
        </CustomThemeProvider>
      </QueryClientProvider>
    </>
  );
}
