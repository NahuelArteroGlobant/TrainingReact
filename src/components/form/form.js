import React from "react";
import "./form.scss";

class Form extends React.Component {
  handleClick = (e) => {
    console.log("Boton Clickeado");
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="form-container">
        <h1>
          Suscribite <br /> a nuestro <br />
          Newsletter
        </h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-container__form">
            <label>Nombre</label>
            <br />
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              placeholder="Nombre"
              //value={this.props.formValues.firstName}
            />
          </div>
          <br />
          <br />
          <div className="form-container__form">
            <label>Apellido</label>
            <br />
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              //value={this.props.formValues.lastName}
            />
          </div>
          <br />
          <br />
          <div className="form-container__form">
            <label>Email</label>
            <br />
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              // value={this.props.formValues.email}
            />
          </div>
          <br />
          <br />
          <button onClick={this.handleClick} className="btn">
            Guardar
          </button>
          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}
export default Form;
