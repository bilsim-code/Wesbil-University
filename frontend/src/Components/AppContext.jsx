import { createContext } from "react";

export const AppContext = createContext();

const ProviderFunction = (props) => {
  return (
  <AppContext.Provider>
    {props.children}
  </AppContext.Provider>
  )
};

export default ProviderFunction;
