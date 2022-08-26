import React from "react";
// import PropTypes from "prop-types";
import { Data } from "./data.class";
import ComponentB from "./componentB";

const ComponentA = () => {
  const Contacto = new Data("David", "Huanco", "acero.david@gmail.com", false);

  return (
    <div>
      <ComponentB data={Contacto} />
    </div>
  );
};

// ComponentA.propTypes = {};

export default ComponentA;
