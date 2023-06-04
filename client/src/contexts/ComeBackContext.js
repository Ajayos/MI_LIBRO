import React, { createContext, useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

const ComeContext = createContext();

export const useCome = () => useContext(ComeContext);

export const ComeProvider = ({ children }) => {
  const [focus, setFocus] = useState(true);
  const [title, setTitle] = useState("");

  window.onblur = () => {
    setFocus(false);
  };

  window.onfocus = () => {
    setFocus(true);
  };

  return (
    <ComeContext.Provider
      value={{
        setTitle,
      }}
    >
      <>
        {!focus && (
          <>
            <Helmet>
              <title>{`Come Back :) | MI LIBRO`}</title>
            </Helmet>
          </>
        )}
        {focus && (
          <>
            <Helmet>
              <title>{`${title} | MI LIBRO`}</title>
            </Helmet>
          </>
        )}
        {children}
      </>
    </ComeContext.Provider>
  );
};
