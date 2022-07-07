import React from "react";
function Сard(props) {
    return (
        <div className="wow fadeInUp p-20  " >
            <div class="zag"> <h1>Кроссовки NIKE AIR MAX 2090</h1> </div>
            <img class="zag" width={200} hight={200} src={props.src} />
            <div>
                <div class="Text_discription mb-10"> {props.description}
                </div>
                <div className="price mb-10">
                    <span class="prince_span">Цена:</span>
                    <b>{props.price} рублей</b>
                </div>

                <div class="middle">
                    <a href="" class="btn btn4">КУПИ МЕНЯ</a>
                </div>
                {/* <button class="simple-button">купить</button> */}
            </div>
        </div>
    )
}

export default Сard

