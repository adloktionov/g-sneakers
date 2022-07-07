import React from "react";
function CardSneakers(props) {
    return (
        <div>
            <div class="d-flex  justify-around align-start">
                <div class="">
                    <img class="d-flex" width={600} hight={600} src={props.src} />
                </div>

                <div class="Sneakers-description ">
                    <div class="zag"> <h1>Кроссовки NIKE AIR MAX 2090</h1> </div>
                    <p> {props.description}</p>
                    <span class="prince_span">Цена: </span>
                    <b>{props.price} ₽</b>

                    <div class="middle d-flex justify-between align-center">
                        <a href="./components/CardChosen.js" class=" btn btn4">КУПИ МЕНЯ</a>
                    </div>
                </div>
            </div>

            <nav id="nav-3">
                <a class="link-3" href="#">38</a>
                <a class="link-3" href="#">39</a>
                <a class="link-3" href="#">40</a>
                <a class="link-3" href="#">41</a>
                <a class="link-3" href="#">42</a>
                <a class="link-3" href="#">43</a>
                <a class="link-3" href="#">44</a>
                <a class="link-3" href="#">45</a>
            </nav>

            <br />

        </div >






    )
}

export default CardSneakers

