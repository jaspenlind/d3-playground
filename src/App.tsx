import React from "react";
import Slider from "react-slick";
import logo from "./logo.svg";
import d3logo from "./d3logo.svg";
import tslogo from "./tslogo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Gosper, Staff } from "./components";

const App: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={d3logo} className="d3-logo" alt="d3-logo" />
        <img src={tslogo} className="ts-logo" alt="ts-logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Slider {...settings}>
        <div>
          <h2>Gosper curve</h2>
          <Gosper width={960} height={500} />
        </div>
        <div>
          <h2>TODO</h2>
          <Staff width={960} height={500} />
        </div>
      </Slider>
    </div>
  );
};

export default App;
