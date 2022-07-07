import React from "react";
function CardAnimated(props) {
    return (
        <div class="wrapper1 wow fadeInUp align-start  ">
            <div class="card1 wow fadeInUp">
                <div class="face1 face12">
                    <div class="content wow fadeInUp">
                        <img class="d-flex" width={200} hight={200} src={props.src} />
                        <div className="price mb-10 d-flex">
                            <span class="prince_span">Цена:</span>
                            <b>{props.price} рублей</b>
                        </div>
                    </div>
                </div>
                <div class="face1 face21 ">


                    <div class="content1 Text_discription mb-10">
                        <p> {props.description}
                        </p>
                        <div class="middle d-flex justify-between align-center">
                            <a href="" class=" btn btn4">КУПИ МЕНЯ</a>
                        </div>
                        {/* <div>
                            <button class="simple-button">купить</button>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardAnimated