import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Item(props) {
  const { data } = props;
  const { id, thumbnail, price, title } = data;
  return (
    <Link style={{ textDecoration: "none" }} to={`/producto/${id}`}>
      <div className="itemContainer">
        <div className="imageContainer">
          <img alt="Thumbnail" src={thumbnail} />
        </div>
        <div className="priceContainer">
          <span>$ {price}</span>
        </div>
        <div className="titleContainer">
          <span>{title}</span>
        </div>
      </div>
    </Link>
  );
}
export default Item;
