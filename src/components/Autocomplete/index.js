import React, { useState, useEffect } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Autocomplete(props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    search();
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setValue(value);
  }

  async function handleClick() {
    const results = await search(value);

    props.handleSearch(results.results);
  }

  async function handlePress(e) {
    if (e.key === "Enter") {
      const results = await search(value);

      props.handleSearch(results.results);
    }
  }

  async function search(value) {
    const result = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${value}&limit=4`
    );

    return await result.json();
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        className="input"
        placeholder="Buscar productos, marcas y más..."
        onChange={e => handleChange(e)}
        onKeyPress={e => {
          handlePress(e);
        }}
      />
      <div onClick={() => handleClick()}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Autocomplete;
