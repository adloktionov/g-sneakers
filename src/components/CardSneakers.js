import React from "react";
function CardSneakers(props) {
    return (
        <div>
            <div class="d-flex  justify-around align-start">
                <div class="">
                    <img class="d-flex" width={500} hight={500} src={props.src} />
                </div>

                <div class="Sneakers-description ">
                    <div class="zag"> <h1>Кроссовки NIKE AIR MAX 2090</h1> </div>
                    <p> {props.description}</p>
                    <span class="prince_span">Цена: </span>
                    <b>{props.price} рублей</b>

                    <div class="middle d-flex justify-between align-center">
                        <a href="./components/CardChosen.js" class=" btn btn4">КУПИ МЕНЯ</a>
                    </div>
                </div>
            </div>

            <br />

        </div >






    )
}

export default CardSneakers

