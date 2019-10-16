import React from "react";
import "./style.scss";
class Autocomplete extends React.Component {
  render() {
    return (
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Buscar productos, marcas y mas.."
        ></input>
      </div>
    );
  }
}

export default Autocomplete;
