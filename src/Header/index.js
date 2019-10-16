import React from "react";
import Autocomplete from "../Autocomplete/index.js";
import "./style.scss";
class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="imgContainer">
          <img
            className="img"
            src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
          />
        </div>
        <Autocomplete />
      </div>
    );
  }
}

export default Header;
