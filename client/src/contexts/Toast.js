import React, { createContext, useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

// Create the Toast context
export const ToastContext = createContext();

// Create a ToastProvider component
export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  // Method to show a toast message
  const showToast = (message, severity) => {
    setOpen(true);
    setMessage(message);
    setSeverity(severity);
  };

  // Method to hide the toast message
  const hideToast = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Snackbar open={open} autoHideDuration={3000} onClose={hideToast} anchorOrigin={{ vertical: "down", horizontal: "center" }}>
        <MuiAlert elevation={6} variant="filled" severity={severity}  onClose={hideToast}>
          {message}
        </MuiAlert>
      </Snackbar>
    </ToastContext.Provider>
  );
};
