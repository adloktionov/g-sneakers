import React from "react";
import CartInBox from "./CartInBox.js"
import './Overlay.css';

function Overlay() {
    return (
        <div class="overlay">
            <div class="drawer justify-center">
                <h2 className="mb-30">Корзина:</h2>
                <div classname="items">



                    <CartInBox description="Кроссовки Мужские Super Air Max"
                        price="911"
                        src="/кросы3.png" />

                    <CartInBox description="Кроссовки Мужские Super Air Max"
                        price="911"
                        src="/кросы3.png" />

                    <CartInBox description="Кроссовки Мужские Super Air Max"
                        price="911"
                        src="/кросы3.png" />

                </div>



                <ul>
                    <li class="d-flex justify-between price-box">
                        <span >Итого: </span>
                        <div></div>
                        <b> 23703 рублей</b>
                    </li>
                    <li class="d-flex  justify-between price-box">
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1003 рублей</b>
                    </li>
                </ul>
                <spacer height="<20>" width="<20>"></spacer>

                <button class="examplebtn ">
                    Купить
                </button>
            </div >
        </div >
    )
}

export default Overlay
