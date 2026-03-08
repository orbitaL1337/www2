'use client';

import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Przełącz motyw"
      className="btn-secondary rounded-full px-4 py-2 text-sm"
    >
      {theme === 'dark' ? '☀️ Jasny' : '🌙 Ciemny'}
    </button>
  );
}
