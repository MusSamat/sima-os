import React from 'react'
import "../../App.css"

function VozvratMoney() {
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="pb-5 mb-1 mb-lg-8 mt-4 ">
                    <div className="container">

                        <div style={{display: "flex", justifyContent: "center",}}>
                            <h2 style={{color: "#c96", textAlign: "center"}}>Возврат денежных средств</h2>
                        </div>
                        <h5 style={{color: "#8b8b8b;",}}>Безналичный расчет</h5>
                        <p style={{textAlign: "justify",  fontSize: "16px", color: "#000000"}}>При отказе Покупателя от товара, который был оплачен онлайн банковской картой, денежные средства за него будут автоматически возвращены на банковскую карту, с которой указанный товар был оплачен.</p>
                        <p style={{marginTop: "10px",textAlign: "justify",  fontSize: "16px", color: "#000000"}}>После этого срок зачисления денежных средств на Ваш банковский счет будет зависеть от условий банка, в котором он открыт.</p>
                        <h5 style={{color: "#8b8b8b;",}}>Перечисление денежных средств может занять до 10 календарных дней.</h5>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default VozvratMoney