import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./style.scss";

function ProductPage(props) {
  const [result, setResult] = useState({});
  const { title, price, pictures } = result;
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch(
      `https://api.mercadolibre.com/items/${props.match.params.id}`
    );
    const resultJson = await result.json();

    setResult(resultJson);
  }

  return (
    <div>
      <Header />
      <div className="color">
        <div className="productPageContainer">
          <div className="productImgContainer">
            {pictures && <img alt="ProductPage" src={pictures[0].url} />}
          </div>
          <div className="description">
            <h1 className="titleDescription">{title}</h1>
            <p className="priceDescription">${price}</p>
            <div className="buttonDescription">
              <button className="buttonBuy">Comprar ahora</button>
              <button className="buttonShip">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
