import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      age: 36,
    };
  }

  render() {
    return (
      <div>
        <h1> ¡Hola {this.props.name}! </h1>
        <h2> Tu edad es {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}>CUMPLIR AÑOS</button>
        </div>
      </div>
    );
  }

  birthday = () => {
    this.setState((preState) => ({
      age: preState.age + 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
