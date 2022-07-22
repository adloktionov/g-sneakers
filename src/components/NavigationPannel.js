import React from "react";
import './NavigationPannel.css';
function NavigationPannel(props) {
    return (
        <div class="Navigation__Pannel flex-wrap">
            <ul>
                <li href="#about" onClick={() => props.onChange("Run")}>Беговые</li>
                <li href="#about" onClick={() => props.onChange("Bascketball")}>Баскетбольные</li>
                <li href="#about" onClick={() => props.onChange("Football")}>Футбольные</li>
                <li href="#about" onClick={() => props.onChange("Casual")}>Повседневные</li>
                <li href="#about" onClick={() => props.onChange("Fitness")}>Для фитнеса</li>
                <li href="#about" onClick={() => props.onChange("Skate")}>Скейтерские</li>
                <li href="#about" onClick={() => props.onChange("Tourism")}>Туризм</li>
                <li href="#about" onClick={() => props.onChange("Active")}>Активные отдых</li>
                <li href="#about" onClick={() => props.onChange("Suffer")}>Для страданий</li>
            </ul>
        </div>
    )
}

export default NavigationPannel