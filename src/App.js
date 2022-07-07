import "./App.css";
import Card from "./components/card.js";
import CardAnimated from "./components/CardAnimated.js";
import CardSneakers from "./components/CardSneakers.js";
import Masonry from "masonry-layout";
import React from "react";
import "typeface-comfortaa";
import Header from "./components/Header.js";
import Grid from "./components/Grid.js";
import Overlay from "./components/Overlay";
// import Card3 from "./components/Сard3.js";
// import Grid from "./components/grid.js";




function App() {

  return (
    <div className="wrapper clear">
      {/* <Overlay></Overlay> */}
      <Header></Header>
      <CardSneakers description="Кроссовки на любой сезон!
                    Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!
                    Женские. Возраст от 16 до 27. Старухам носить запрещается!!!"
        price="911"
        src="/кросы3.png" />
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
    </div >

  );
}
export default App





