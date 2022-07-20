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
import CardFlickity from "./components/CardFlickity.js"
// import Card3 from "./components/Сard3.js";
// import Grid from "./components/grid.js";

const arr = [

  {
    name: 'Крайне пафосные мужские кроссовки для нижайшего флекса',
    price: 12999,
    imageUrl: '/кросы7.png',
    description: 'Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!'
  },


  {
    name: 'Глубоко кринжовые кросы для олдовых бумеров',
    price: 17200,
    imageUrl: '/кросы6.png',
    description: 'Клянусь, этих деток ты будешь любить до конца своей жизни!'
  },

  {
    name: 'То,что ты не можешь пропустить',
    price: 47200,
    imageUrl: '/кросы5.png',
    description: 'За эти кроссовки Стифлер дал номер своей мамы!'
  },

  {
    name: 'Постарайся не кончить это же',
    price: 47200,
    imageUrl: '/кросы19 .png',
    description: 'Те самые кросы в которые Марти Макфлай влез в 2022 году!'
  },

];


function App() {

  return (
    <div className="wrapper clear">
      {/* <Overlay></Overlay> */}
      <Header></Header>


      <div class="grid d-flex flex-wrap justify-around">
        {arr.map((obj) => (
          <Card title={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
            description={obj.description}
          />
        ))
        }

        {/* Сюда нужно добавить  card animated через массив */}


      </div>

      <CardSneakers></CardSneakers>
      <Grid></Grid>
      <Contacts></Contacts>

    </div >





  );
}
export default App





