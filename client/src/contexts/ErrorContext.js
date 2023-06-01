import React, { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import Page500 from "../Pages/500";
import Page404 from "../Pages/404";

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);

	const handleErrors = (error) => {
		if (error.response) {
			const { status } = error.response;
			if (status === 500) {
				setError(500);
			} else if (status === 401 || status === 404) {
				setError(400);
			}
		} else {
			console.error(error);
			setError(500);
		}
	};

	const clearError = () => {
		setError(null);
	};

	const value = {
		error,
		handleErrors,
		clearError,
	};
	if (error) {
		console.log(" hehehe", error);
	}
	return (
		<ErrorContext.Provider value={value}>
			{children}
			{error === 500 && <Page500 />}
			{error === 400 && <Page404 />}
		</ErrorContext.Provider>
	);
};
