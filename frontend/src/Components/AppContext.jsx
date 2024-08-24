import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const [sidebarOn, setSidebarOn] = useState(false);
  return (
  <AppContext.Provider value={{sidebarOn, setSidebarOn}}>
    {props.children}
  </AppContext.Provider>
  )
};

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;
