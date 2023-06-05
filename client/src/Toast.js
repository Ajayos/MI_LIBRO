import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Toast = ({ open, message, severity, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Toast;
