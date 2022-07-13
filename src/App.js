import "./App.css";
import Card from "./components/card.js";
import Contacts from "./components/Contacts";
import CardAnimated from "./components/CardAnimated.js";
import CardSneakers from "./components/CardSneakers.js";

import React from "react";
import "typeface-comfortaa";
import Header from "./components/Header.js";
import Grid from "./components/Grid.js";
import Overlay from "./components/Overlay";
import CardChosen from "./components/CardChosen.js"
// import Card3 from "./components/Сard3.js";
// import Grid from "./components/grid.js";




function App() {

  return (
    <div className="wrapper clear">
      {/* <Overlay></Overlay> */}
      <Header></Header>


      <div class="grid d-flex flex-wrap justify-around">
        <Card
          title="Кроссовки с узором ETRO"
          description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
          price="911"
          src="/кросы7.png"
        />

        <Card
          title="Кроссовки NIKE AIR MAX 2090"
          description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
          price="911"
          src="/кросы3.png"
        />

        <Card
          title="Кроссовки Adidas OZWEEGO"
          description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
          price="911"
          src="/кросы5.png"
        />

        <Card
          title="Кроссовки Adidas ASTIR W"
          description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
          price="911"
          src="/кросы6.png"
        />


      </div>

      <CardSneakers description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
        price="911"
        src="/кросы3.png" />

      <Grid></Grid>
      <Contacts></Contacts>

    </div >





  );
}
export default App





