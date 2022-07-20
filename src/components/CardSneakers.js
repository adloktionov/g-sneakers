import React from "react";
import CardFlickity from "./CardFlickity.js";


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

]

function CardSneakers(props) {
    return (
        <div>
            <div class="carousel" data-flickity>
                <div class="carousel-cell">
                    {arr.map((obj) => (
                        <CardFlickity title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            description={obj.description}
                        />
                    ))}

                </div>
            </div>



            <br />
        </div >




    )
}

export default CardSneakers




