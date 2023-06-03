import React, { createContext, useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

const ComeContext = createContext();

export const useCome= () => useContext(ComeContext);

export const ComeProvider = ({ children }) => {
	var [focus, setFocus] = useState(true)
	window.onblur = () => {
		setFocus(false);
	};
	window.onfocus = () => {
		setFocus(true);
	};
	
	return (
		<ComeContext.Provider>
			<>
			{!focus && <><Helmet>
				<title>{`Come Back :)`}</title>
			</Helmet></>}
			{children}
			</>
		</ComeContext.Provider>
	);
};
