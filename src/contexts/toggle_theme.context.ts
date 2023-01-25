import { createContext, useContext } from 'react';

interface IthemeContext {
  theme: string;
}

const ThemeContext = createContext<IthemeContext>({ theme: 'light' });

export const useTheme = () => useContext(ThemeContext);
