import React, { Component } from "react";

class CupcakeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.props.cupcakes.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + this.props.cupcakes.length) %
        this.props.cupcakes.length,
    }));
  };

  render() {
    const { cupcakes } = this.props;
    const { currentSlide } = this.state;

    return (
      <div className="cupcake-carousel">
        <button className="prev-button" onClick={this.prevSlide}>
          &lt;
        </button>
        <div className="cupcake-slide">
          <img
            src={cupcakes[currentSlide]}
            alt={`Cupcake ${currentSlide + 1}`}
          />
        </div>
        <button className="next-button" onClick={this.nextSlide}>
          &gt;
        </button>
      </div>
    );
  }
}

export default CupcakeCarousel;
