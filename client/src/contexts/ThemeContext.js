import { createTheme } from "@mui/system";
import React, { createContext, useState } from "react";

const DarkContext = createContext();

const DarkProvider = ({ children }) => {
	const [themeMode, setThemeMode] = useState("dark");

	const theme = createTheme({
		palette: {
			mode: themeMode,
		},
	});
	const toggleThemeMode = () => {
		setThemeMode(themeMode === "dark" ? "dark" : "light");
	};

	const themeContextValue = {
		themeMode,
		toggleThemeMode,
	};

	return (
		<DarkContext.Provider value={themeContextValue} theme={theme}>
			{children}
		</DarkContext.Provider>
	);
};

export { DarkProvider, DarkContext };
