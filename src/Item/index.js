import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
class Item extends React.Component {
  render() {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/producto/${this.props.data.id}`}
      >
        <div className="itemContainer">
          <div className="imageContainer">
            <img src={this.props.data.thumbnail} />
          </div>
          <div className="priceContainer">
            <span>$ {this.props.data.price}</span>
          </div>
          <div className="titleContainer">
            <span>{this.props.data.title}</span>
          </div>
        </div>
      </Link>
    );
  }
}
export default Item;
