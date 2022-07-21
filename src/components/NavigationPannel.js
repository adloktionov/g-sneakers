import React from "react";
import './NavigationPannel.css';
function NavigationPannel() {
    return (
        <div class="Navigation__Pannel flex-wrap">
            <ul>
                <li><a href="#home">Беговые</a></li>
                <li><a href="#news"> Баскетбольные</a></li>
                <li><a href="#contact">Футбольные</a></li>
                <li><a href="#about">Повседневные</a></li>
                <li><a href="#about">Для фитнеса</a></li>
                <li><a href="#about">Скейтерские</a></li>
                <li><a href="#about">Туризм</a></li>
                <li><a href="#about">Активные отдых</a></li>
                <li><a href="#about">Для страданий</a></li>
            </ul>
        </div>
    )
}

export default NavigationPannel