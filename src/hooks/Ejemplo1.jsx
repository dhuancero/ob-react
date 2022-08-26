/*
 * Ejemplo de uso de Hooks

 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  const valorInicial = 0;
  const personInicial = {
    nombre: "David",
    email: "david@dhuanco.com",
  };

  /**
   * Queremos que el valorInicial y personaInicial sean parte del estado del componente
   * para así poder gestionar su cambio y que éste se vea reflejado en la vista del componente
   *
   * const [nombreVariable, funcionParaCambiar] = useState[valorInicial]
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personInicial);

  /**
   * Creamos una función que incrementa el contador en uno
   *  */
  function incrementCounter() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**
   * Function to update person status in component
   */
  function updatePerson() {
    setPersona({
      nombre: "Paula",
      email: "paula@dhuanco.com",
    });
  }

  return <div></div>;
};

export default Ejemplo1;
