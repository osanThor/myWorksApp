import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
export const useThemeContext = () => useContext(ThemeContext).mode.themeName;
