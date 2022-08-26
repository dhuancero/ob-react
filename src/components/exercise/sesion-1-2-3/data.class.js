import PropTypes from "prop-types";

export class Data {
  name = "";
  lastName = "";
  email = "";
  conectado = false;

  constructor(name, lastName, email, conectado) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.conectado = conectado;
  }
}
Data.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};
