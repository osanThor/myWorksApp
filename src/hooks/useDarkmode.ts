import { useState, useEffect } from 'react';
export const useDarkMode = (): [string, () => void] => {
  let localTheme;
  useEffect(() => {
    localTheme = localStorage.getItem('theme');
  }, []);
  const initialState = localTheme ? localTheme : 'light';
  const [theme, setTheme] = useState(initialState);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };
  return [theme, toggleTheme];
};
