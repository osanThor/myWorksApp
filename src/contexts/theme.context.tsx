import { ThemeContext, ThemeProvider } from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/useDarkmode';
import { darkTheme, lightTheme } from '../../styles/theme';
import GlobalStyle from '../../styles/global-styles';
import DefaultLayout from '../layout/defaultLayout';
import Loading from '../components/common/loading/loading';

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [firstLoading, setfirstLoading] = useState<boolean>(false);

  useEffect(() => {
    setfirstLoading(true);
    setTimeout(() => {
      setfirstLoading(false);
    }, 2200);
  }, []);

  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  const theme =
    themeMode === 'light' ? { mode: lightTheme } : { mode: darkTheme };

  if (!mountedComponent) return <div />;
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {firstLoading && <Loading />}
        <DefaultLayout themeToggler={themeToggler}>{children}</DefaultLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext).mode.themeName;
