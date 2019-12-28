import React from "react";
import { HexGrid } from "react-hexgrid";
import Slider from "react-slick";
import Iframe from "react-iframe";
import logo from "./logo.svg";
import d3logo from "./d3logo.svg";
import tslogo from "./tslogo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Gosper, Staff, Lidenmayer, HexGridLab, HexTileLayout, HexTileGameLayout } from "./components";

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
        <div className="game">
          <h2>HexTileLayout</h2>
          <HexGrid width={960} height={500} viewBox="-50 -50 100 100">
            <HexTileGameLayout />
            <HexTileLayout />
          </HexGrid>
        </div>
        <div>
          <h2>HexGrid</h2>
          <HexGridLab />
        </div>
        <div>
          <h2>Lindenmayer</h2>
          <Lidenmayer />
        </div>
        <div>
          <h2>Gosper curve</h2>
          <Gosper width={960} height={500} />
        </div>
        <div>
          <h2>Fractal plant with p5</h2>
          <Iframe url="p5/lsystem.html" width="960px" height="500px" />
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
