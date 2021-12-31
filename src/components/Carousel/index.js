import React from "react";
import "./style.scss";
import Item from "../Item/index";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Carousel(props) {
  const { title, products } = props;
  const properties = {
    slidesToShow: window.innerWidth > 500 ? 4 : 1,
    slidesToScroll: window.innerWidth > 500 ? 2 : 1,
  };

  return (
    <div className="carouselContainer">
      <div className="containerCarousel">
        <h2 className="propsTitle">{title}</h2>
        <div>
          {products.length > 0 ? (
            <React.Fragment>
              <Slide {...properties}>
                {products.map((item, key) => {
                  return <Item data={item} key={key} />;
                })}
              </Slide>
            </React.Fragment>
          ) : (
            <p className="no-results">No se encontraron resultados</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
