import { Button } from '@mui/material';
import React from 'react';
import { buttonStyles } from './buttonStyles';

const CustomButton = ({ message, sx, onClick, type, fullWidth, disabled, children }) => {
  return (
    <Button
        {...type}
        fullWidth={fullWidth ? true : false}
        sx={{ ...buttonStyles, ...sx}}
        onClick={onClick}
        disabled={disabled ? disabled : false}
      >
        <span /> <span /> <span /><span />
        {message}
        {children}
      </Button>
  );
}

export default CustomButton;
