import React from "react";
import Header from "../Header/index.js";
import Carousel from "../Carousel/index";
import Tarjetas from "../Tarjetas/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      searchResults: []
    };
  }
  async componentDidMount() {
    const result = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4"
    );
    const resultJson = await result.json();
    this.setState({
      result: resultJson.results
    });
  }

  handleCallback(results) {
    this.setState({
      searchResults: results
    });
  }

  render() {
    return (
      <div>
        <div>
          <Header handleCallback={results => this.handleCallback(results)} />
          {/* <Tarjetas /> */}
          <Carousel title="Video Juegos" products={this.state.result} />
          <Carousel title="Busqueda" products={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default Home;
