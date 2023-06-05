import React, { createContext, useContext } from "react";
import { useSnackbar } from "notistack";

// Create the SnackbarContext
const SnackbarCContext = createContext();

// Custom hook to access the SnackbarContext
export const useSnackbarContext = () => useContext(SnackbarCContext);

// SnackbarProvider component
export const SnackbarCProvider = ({ children }) => {
	const { enqueueSnackbar } = useSnackbar();

	// Define the showSnackbar method
	const showSnackbar = (message, variant) => {
		return enqueueSnackbar(message, { variant });
	};

	// Create the context value
	const contextValue = { showSnackbar };

	// Provide the context value to children components
	return (
		<SnackbarCContext.Provider value={showSnackbar }>
			{children}
		</SnackbarCContext.Provider>
	);
};
