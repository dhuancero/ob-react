import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingFun = (props) => {
  const [age, setAge] = useState(29);

  const birthday = () => {
    console.log(age);
    setAge(age + 1);
  };
  return (
    <div>
      <h1> ¡Hola {props.name}! </h1>
      <h2> Tu edad es {age}</h2>
      <div>
        <button onClick={birthday}>CUMPLIR AÑOS</button>
      </div>
    </div>
  );
};

GreetingFun.propTypes = {
  name: PropTypes.string,
};

export default GreetingFun;
