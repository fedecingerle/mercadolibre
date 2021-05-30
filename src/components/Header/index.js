import React from "react";
import Autocomplete from "../Autocomplete/index.js";
import "./style.scss";
import { Link } from "react-router-dom";
function Header(props) {
  const { handleCallback } = props;

  function handleSearch(results) {
    handleCallback(results);
  }

  return (
    <div className="headerContainer">
      <Link to="/">
        <img
          alt="MELI"
          className="img"
          src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
        />
      </Link>
      <Autocomplete handleSearch={results => handleSearch(results)} />
    </div>
  );
}

export default Header;
