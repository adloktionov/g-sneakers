import React from "react";
import './CardFlickity.css';
function CardFlickity(props) {



    return (
        <div class="d-flex  justify-around flex-wrap">
            <div class="">
                <img class="d-flex" width={600} hight={600} src={props.imageUrl} />
            </div>

            <div class="Sneakers-description ">
                <div class="zag"> <h1>Кроссовки NIKE AIR MAX 2090</h1> </div>
                <p> {props.description}</p>
                <span class="prince_span">Цена: </span>
                <b>{props.price} ₽</b>

                <div class="middle d-flex justify-between align-center">
                    <a href="./components/CardChosen.js" class=" btn btn4">КУПИ МЕНЯ</a>
                </div>


                <li><a href="#home">МУЖСКИЕ</a></li>
                <li><a href="#news">ЖЕНСКИЕ</a></li>




            </div >

            <nav id="nav-3 ">
                <a class="link-3" href="#">35</a>
                <a class="link-3" href="#">36</a>
                <a class="link-3" href="#">37</a>
                <a class="link-3" href="#">38</a>
                <a class="link-3" href="#">39</a>
                <a class="link-3" href="#">40</a>
                <a class="link-3" href="#">41</a>
                <a class="link-3" href="#">42</a>
                <a class="link-3" href="#">43</a>
                <a class="link-3" href="#">44</a>
                <a class="link-3" href="#">45</a>
            </nav>
            <div class="flex-row"></div>
        </div >
    )
}

export default CardFlickity