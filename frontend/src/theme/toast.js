import React from 'react';
import { Snackbar } from '@mui/material';
import { styled } from '@mui/system';

const ToastWrapper = styled('div')(({ position }) => ({
  position: 'fixed',
  zIndex: 9999,
  top: position === 'top' ? '20px' : 'auto',
  bottom: position === 'bottom' ? '20px' : 'auto',
  left: position === 'left' ? '20px' : 'auto',
  right: position === 'right' ? '20px' : 'auto',
}));

export const showToast = (position, type, message) => {
  const handleClose = () => {};

  return (
    <ToastWrapper position={position}>
      <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
        <div className={`toast toast-${type}`}>
          <span>{message}</span>
        </div>
      </Snackbar>
    </ToastWrapper>
  );
};

export const ToastProvider = () => {
  return <div>{/* Your app content */}</div>;
};
