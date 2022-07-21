import React from "react";
import './card.css';
import Star_Rating from "./Star_Rating.js";
function Сard(props) {
    return (
        // addFavorite
        <div className="wow fadeInUp p-20  " >
            <div class="zag"> <h1>{props.title}</h1> </div>

            <div class="d-flex justify-between">
                <div >
                    <button class=" addFavorite d-flex align-center ">
                        <img width={30} hight={50} src="/plus3.svg" alt="like"></img>
                    </button>
                </div>

                <div >
                    <button class="addToBasket d-flex align-center">
                        <img width={20} hight={20} src="/basket.svg" alt="basket"></img>
                    </button>
                </div>
            </div >

            <img class="zag" width={220} src={props.imageUrl} alt="sneakers" />
            <div>
                <div class="Text_discription mb-10"> {props.description}
                </div>
                <div className="price mb-10">
                    <span class="prince_span">Цена:</span>
                    <b>{props.price} ₽</b>
                </div>

                <div class="middle">
                    <a href="./components/CardChosen.js" class=" btn btn4">КУПИ МЕНЯ</a>
                </div>

                <Star_Rating></Star_Rating>
                {/* <button class="simple-button">купить</button> */}
            </div>
        </div >
    )
}



export default Сard

