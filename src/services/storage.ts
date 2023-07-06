import { ThemeMode } from '@app/types/theme';

const STORAGE_KEYS = {
  THEME_MODE: 'THEME_MODE'
};

export const saveTheme = (newMode: ThemeMode) => {
  localStorage.setItem(STORAGE_KEYS.THEME_MODE, newMode);
};

export const getTheme = () => {
  const currentMode: string | null = localStorage.getItem(
    STORAGE_KEYS.THEME_MODE
  );
  return currentMode as ThemeMode;
};
