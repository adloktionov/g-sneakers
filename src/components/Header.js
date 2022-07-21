import React from "react";
function Header() {
    return (
        <div class="header-box">
            <header className="d-flex justify-between align-center p-40" >
                <div className="d-flex align-center ">
                    <img width={40} hight={40} src="/svg.png" />

                    <div>
                        <h3 className="text-uppercase ">React Sneakers</h3>
                        <p>Магазин кросовок</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/cart.png" />
                        <span>1205 руб</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/user.png" />
                    </li>
                </ul>
            </header>

            <div div className="content m-40" >
                <div className="d-flex alighn-center mb-10 justify-between">
                    <h1>Все кросовки</h1>
                    <div className="search-block d-flex align-center">
                        <button className="Find d-flex align-center">
                            Найти
                        </button>
                        <input class="ml-5" placeholder="Поиск..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header







