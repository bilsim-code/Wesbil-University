import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { unitDetails } from "./UnitDetails";

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const [sidebarOn, setSidebarOn] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <AppContext.Provider value={{sidebarOn, setSidebarOn, sidebarOpen, setSidebarOpen, unitDetails}}>
    {props.children}
  </AppContext.Provider>
  )
};

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;
