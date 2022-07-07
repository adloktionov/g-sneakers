import React from "react";
function СartInBox(props) {
    return (
        < div class="cartBox d-flex align-center" >
            <div class="xDelete ml-10" > <img width={30} hight={30} class="" src="/x.png" /> </div>
            <div class="cartItem">
                <img width={100} hight={100} src={props.src} alt="Sneakers" />
            </div>

            <div className="price mb-10 ml-10">
                <div>{props.description}</div>
                <span class="prince_span">Цена:</span>
                <b>{props.price}рублей</b>
            </div>
        </div >
    )
}

export default СartInBox





