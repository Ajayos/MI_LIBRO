import React, { useContext } from 'react';
import { DarkContext } from '../../../contexts/ThemeContext';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeSwitcher = () => {
  const { themeMode, toggleThemeMode } = useContext(DarkContext);

  return (
    <IconButton color="inherit" onClick={toggleThemeMode}>
      {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeSwitcher;
