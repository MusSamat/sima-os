import React from 'react'
import "../../App.css"
import elcart from "../../assets/elcart.png";
import visa from "../../assets/visa.png";

function Oplata() {
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="pb-5 mb-1 mb-lg-8 mt-4 ">
                    <div className="container">

                        <div style={{display: "flex", justifyContent: "center",}}>
                            <h2 style={{color: "#c96", textAlign: "center"}}>Способы оплаты</h2>
                        </div>
                        <div style={{display: "flex", justifyContent: "center",}}>
                            <h5 style={{color: "#8b8b8b;", textAlign: "center"}}>Понравившиеся вещи Вы можете оплатить перечисленными ниже способами.</h5>
                        </div>
                        <h5 style={{color: "#8b8b8b;",}}>Банковская карта</h5>
                        <p style={{textAlign: "justify",  fontSize: "16px", color: "#000000"}}>Онлайн оплата банковской картой возможна через систему электронных платежей.</p>
                        <p style={{marginTop: "10px",textAlign: "justify",  fontSize: "16px", color: "#000000"}}> Вход в платежный терминал находится в Вашем Личном кабинете.</p>
                        <p style={{marginTop: "10px",textAlign: "justify",  fontSize: "16px", color: "#000000"}}> Мы принимаем платежи по следующим банковским картам</p>
                        <div className="col-sm-6 col-md-8 ">
                            <span className="widget-about-title">Способы оплаты</span>
                            <figure className="footer-payments d-flex ">
                                <img className="mr-4" src={visa}  width="52"
                                     height="20"/>
                                <img  src={elcart}  width="36"
                                      height="10"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Oplata