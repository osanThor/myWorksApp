import type { AppProps } from 'next/app';
import '../styles/fonts.css';
import { CustomThemeProvider } from '../src/contexts/theme.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}
