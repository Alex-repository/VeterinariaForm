import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";  
const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = {
    ...stateInicial
  };
  handleSubmit = e => {
    e.preventDefault();
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({ error: true });
      return;
    }
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    this.props.crearNuevaCita(nuevaCita);
    this.setState({ ...stateInicial });
  };
  handleChage = e => {
    console.log(e.target.name + ": " + e.target.value);
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className=" card-body">
          <h2 className=" card-title text-center mb-5">
            llena el formulario para nueva cita
          </h2>
          {error ? (
            <div className="alert alert-danger mt-2 mb-5  text-center">
              Todos los campos son obligatorios{" "}
            </div>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className=" col-sm-4 col-lg-2 col-form-label">
                Nombre mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre mascota"
                  name="mascota"
                  value={this.state.cita.mascota}
                  onChange={this.handleChage}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className=" col-sm-4 col-lg-2 col-form-label">
                Nombre dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre propietario mascota"
                  name="propietario"
                  value={this.state.cita.propietario}
                  onChange={this.handleChage}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className=" col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={this.state.cita.fecha}
                  onChange={this.handleChage}
                />
              </div>
              <label className=" col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  value={this.state.cita.hora}
                  onChange={this.handleChage}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className=" col-sm-4 col-lg-2 col-form-label">
                sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="describe sintomas "
                  value={this.state.cita.sintomas}
                  onChange={this.handleChage}
                ></textarea>
              </div>
              <input
                type="submit"
                className="py-3 mt-2 btn btn-success btn-block"
                value="agregar nueva cita"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
 NuevaCita.propType = {
   crearNuevaCita : PropTypes.func.isRequired
 }
export default NuevaCita;
