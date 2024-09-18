import { DarkModeContext } from '@/context/ContextProvider';
import { useContext, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggler() {
  const [theme, toggleTheme] = useContext(DarkModeContext);
  const [icon, setIcon] = useState('moon'); // Default to 'moon' icon

  useEffect(() => {
    // Check if sessionStorage is available before using it
    if (typeof window !== 'undefined') {
      const savedIcon = sessionStorage.getItem('icon');
      if (savedIcon) {
        setIcon(savedIcon);
      }
    }

    // Update the icon when the theme changes
    setIcon(theme === 'dark' ? 'moon' : 'sun');
  }, [theme]);

  const toggleThemeHandler = () => {
    toggleTheme();
    // Save the icon choice in local storage (if available)
    if (typeof window !== 'undefined') {
      const newIcon = icon === 'moon' ? 'sun' : 'moon';
      sessionStorage.setItem('icon', newIcon);
    }
  };

  return (
    <button
      aria-label="toggle icon"
      onClick={toggleThemeHandler}
      className="inline-flex items-center justify-center rounded-md text-lg"
      style={{
        cursor: 'var(--pointer-cursor)',
      }}
    >
      {icon === 'moon' ? (
        <div aria-label="moon">
          <FaMoon aria-label="moon" color="grey" className="h-6 w-6" />
        </div>
      ) : (
        <div aria-label="sun">
          <FaSun aria-label="sun" color="yellow" className="h-6 w-6" />
        </div>
      )}
    </button>
  );
}
