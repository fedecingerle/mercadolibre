import React from "react";
import "./style.scss";
import Item from "../Item/index";

function Carousel(props) {
  const { title, products } = props;
  return (
    <div className="carouselContainer">
      <h2 className="propsTitle">{title}</h2>
      <div className="carousel-container">
        {products.length > 0 ? (
          <React.Fragment>
            {products.map((item, key) => {
              return <Item data={item} key={key} />;
            })}
          </React.Fragment>
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
