import React from "react";
import Header from "../Header";
import "./style.scss";
class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
  }

  async componentDidMount() {
    const result = await fetch(
      `https://api.mercadolibre.com/items/${this.props.match.params.id}`
    );
    const resultJson = await result.json();

    this.setState({
      result: resultJson
    });
  }
  render() {
    return (
      <div>
        <Header />
        <div className="color">
          <div className="productPageContainer">
            <div className="productImgContainer">
              <img src={this.state.result.thumbnail} />
            </div>
            <div className="description">
              <h1 className="titleDescription">{this.state.result.title}</h1>
              <p className="priceDescription">${this.state.result.price}</p>
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
}

export default ProductPage;
