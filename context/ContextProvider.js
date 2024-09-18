import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('theme') || 'dark';
    } else {
      return 'dark';
    }
  });

  useEffect(() => {
    if (typeof sessionStorage !== 'undefined') {
      const storedTheme = sessionStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('theme', newTheme);
    }

    if (newTheme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </DarkModeContext.Provider>
  );
};
