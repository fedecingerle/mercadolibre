import React from "react";
import Autocomplete from "../Autocomplete/index.js";
import "./style.scss";
import { Link } from "react-router-dom";
import MeliMobile from "../../meli-mobile.png";
function Header(props) {
  const { handleCallback } = props;

  function handleSearch(results) {
    handleCallback(results);
  }

  return (
    <div className="headerContainer">
      <Link to="/">
        {window.innerWidth > 500 ? (
          <img
            alt="MELI"
            className="img"
            src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
          />
        ) : (
          <img alt="MELI" src={MeliMobile} />
        )}
      </Link>
      <Autocomplete handleSearch={results => handleSearch(results)} />
    </div>
  );
}

export default Header;
