import React, { useContext } from "react";

const FiltersContext = React.createContext();

const FilersProvider = ({ children }) => {
  return (
    <FiltersContext.FilersProvider>{children}</FiltersContext.FilersProvider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
