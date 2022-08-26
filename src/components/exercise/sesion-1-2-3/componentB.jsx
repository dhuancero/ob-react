import React, { useState } from "react";
import PropTypes from "prop-types";
import { Data } from "./data.class";

const ComponentB = ({ data }) => {
  const [conectado, setConectado] = useState(data.conectado);

  const estado = () => {
    conectado ? setConectado(false) : setConectado(true);
  };
  return (
    <div>
      <h2>
        Nombre: <strong> {data.name}</strong>
      </h2>
      <h2>
        Apellido: <strong> {data.lastName}</strong>
      </h2>
      <h3>
        Email: <strong> {data.email}</strong>
      </h3>
      <h3>
        <button
          className={conectado ? "Conectado" : "Desconectado"}
          onClick={estado}
        >
          {conectado ? "Conectado" : "Desconectado"}
        </button>
        {"   "}
        {/* Conectado: <strong>{data.conectado ? "Contacto en línea" : "Contacto no disponible" }</strong>
         */}
        {conectado ? "Contacto en línea" : "Contacto no disponible"}
      </h3>
    </div>
  );
};

ComponentB.propTypes = {
  data: PropTypes.instanceOf(Data),
};

export default ComponentB;
