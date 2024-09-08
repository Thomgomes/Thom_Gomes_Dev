// src/components/ThemeToggle.js
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(savedMode);
      document.documentElement.classList.toggle('dark', savedMode);
    }, []);
  
    const toggleTheme = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark', !darkMode);
      localStorage.setItem('darkMode', !darkMode);
    };
  
    return (
      <button onClick={toggleTheme} className="p-2 bg-gray-800 text-white rounded">
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    );
  };

export default ThemeToggle;
