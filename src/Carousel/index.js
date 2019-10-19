import React from "react";
import "./style.scss";
import Item from "../Item/index";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselContainer">
        <h2 className="propsTitle">{this.props.title}</h2>
        <div className="carousel-container">
          {this.props.products.length > 0 ? (
            <React.Fragment>
              {this.props.products.map((item, key) => {
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
}

export default Carousel;
