import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

function Home() {
  const [result, setResult] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4"
    );
    const resultJson = await result.json();

    setResult(resultJson.results);
  }

  function handleCallback(results) {
    setSearchResults(results);
  }

  return (
    <div>
      <div>
        <Header handleCallback={results => handleCallback(results)} />
        <Carousel title="Video Juegos" products={result} />
        <Carousel title="Busqueda" products={searchResults} />
      </div>
    </div>
  );
}

export default Home;
