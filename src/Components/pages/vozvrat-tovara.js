import React from 'react'
import "../../App.css"

function Vozvrat() {
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="pb-5 mb-1 mb-lg-8 mt-4 ">
                    <div className="container">

                        <div style={{display: "flex", justifyContent: "center",}}>
                            <h2 style={{color: "#c96", textAlign: "center"}}>Правила возврата товаров</h2>
                        </div>
                        <p style={{textAlign: "justify",  fontSize: "16px", color: "#000000"}}>При получении Вы проверяете качество изделий. Все вопросы и комментарии по качеству мы принимаем в течение 10 рабочих дней после получения Вами груза. </p>
                        <p style={{marginTop: "10px",textAlign: "justify",  fontSize: "16px", color: "#000000"}}> Возврат товара ненадлежащего качества
                            Срок возврата товара
                            Причиной для возврата товара со стороны Покупателя может быть производственный недостаток (брак) товара, в соответствии с действующим законодательством. Покупатель может обратиться с требованием о возврате такого товара в течение гарантийного срока, установленного производителем. </p>


                    </div>
                </div>
            </main>
        </div>
    )
}

export default Vozvrat
