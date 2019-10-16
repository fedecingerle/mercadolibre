import React from "react";
import "./style.scss";
import Item from "../Item/index";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carouselContainer">
        <h2 className="propsTitle">{this.props.title}</h2>
        <div className="carousel-container">
          {this.props.products.map((item, key) => {
            return <Item data={item} key={key} />;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
