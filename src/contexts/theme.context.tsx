import { ThemeContext, ThemeProvider } from 'styled-components';
import React, { useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkmode';
import { darkTheme, lightTheme } from '../../styles/theme';
import GlobalStyle from '../../styles/global-styles';
import DefaultLayout from '../layout/defaultLayout';

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();
  const theme =
    themeMode === 'light' ? { mode: lightTheme } : { mode: darkTheme };

  if (!mountedComponent) return <div />;
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultLayout themeToggler={themeToggler}>
          {''}
          {children}
        </DefaultLayout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext).mode.themeName;
