import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check if body already has light class
    setIsLight(document.body.classList.contains('light'));
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove('light');
      setIsLight(false);
    } else {
      document.body.classList.add('light');
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-16 right-8 md:bottom-20 md:right-16 z-50 w-14 h-14 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ease-in-out hover:scale-110 flex items-center justify-center gap-2 ${isLight
          ? 'bg-white/80 border-gray-200 text-black hover:shadow-gray-200/50'
          : 'bg-[#1a1a1a]/80 border-[#333] text-white hover:shadow-black/50'
        }`}
      aria-label="Toggle Dark Mode"
    >
      {isLight ? (
        // Outlined AI Star for Light Mode
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" />
        </svg>
      ) : (
        // Filled AI Star for Dark Mode
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
