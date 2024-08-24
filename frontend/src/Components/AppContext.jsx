import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { unitDetails } from "./UnitDetails";

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const [sidebarOn, setSidebarOn] = useState(false);
  return (
  <AppContext.Provider value={{sidebarOn, setSidebarOn, unitDetails}}>
    {props.children}
  </AppContext.Provider>
  )
};

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;
