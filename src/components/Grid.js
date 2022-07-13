import React from "react";
import Card from "./card.js";
import CardAnimated from "./CardAnimated.js";

function Grid() {
    return (
        <div class="grid d-flex flex-wrap justify-around">
            <div class="grid-item grid-item--width2">
                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки с узором ETRO"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы7.png"
                    />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <Card
                        title="Кроссовки NIKE AIR MAX 2090"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы3.png"
                    />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <CardAnimated
                        title="Кроссовки Adidas OZWEEGO"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы4.png" />


                </div>
            </div>

            <div class="grid-item grid-item--width1">

                <div className="content d-flex flex-wrap align-start" >
                    <CardAnimated title="Кроссовки Adidas ASTIR W"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы6.png" />
                </div>


                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки NIKE AIR MAX 2090"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы4.png" />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки Adidas OZWEEGO"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы5.png"
                    />
                </div>


            </div>

            <div class="grid-item grid-item--width2">
                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки Adidas OZWEEGO"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы5.png"
                    />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки NIKE AIR MAX 2090"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы7.png" />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <CardAnimated title="Кроссовки Adidas ASTIR W"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы6.png" />
                </div>


            </div>

            <div class="grid-item grid-item--width1">

                <div className="content d-flex flex-wrap align-start" >
                    <CardAnimated title="Кроссовки Adidas ASTIR W"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы7.png" />
                </div>


                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки NIKE AIR MAX 2090"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы6.png" />
                </div>

                <div className="content d-flex flex-wrap align-start" >
                    <Card title="Кроссовки Adidas OZWEEGO"
                        description="Кроссовки на любой сезон! Для бега, для спорта, подойдут для побега от обещаний, отлично сочетаются с ускользание от обязанностей!"
                        price="911"
                        src="/кросы3.png"
                    />
                </div>


            </div>








        </div>
    );
}

export default Grid
