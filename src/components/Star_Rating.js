import React from "react";
import './Star_Rating.css';
function Star_Rating(props) {
    return (
        <div >
            <fieldset class="rating">
                <legend class="rating__caption">Оцени</legend>
                <div class="rating__group">

                    <input class="rating__star" type="radio" name={props.id} value="5" aria-label="Отлично"></input>
                    <input class="rating__star" type="radio" name={props.id} value="4" aria-label="Хорошо"></input>
                    <input class="rating__star" type="radio" name={props.id} value="3" aria-label="Нормально" checked></input>
                    <input class="rating__star" type="radio" name={props.id} value="2" aria-label="Сносно"></input>
                    <input class="rating__star" type="radio" name={props.id} value="1" aria-label="Ужасно"></input>

                    <div class="rating__focus"></div>
                </div>
            </fieldset>


        </div>
    )
}

export default Star_Rating