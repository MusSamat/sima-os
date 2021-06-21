import React, {useState} from 'react';
import axios from "axios";
import "../../App.css";

export default function Purchases() {

    const [name, setName] = useState()
    const [number, setNumber] = useState()

    const sendName = (event) => {
        
        const data = {
            name: name,
            phone: number
            
            
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/backcall`, data)
            .then(response => {
                setName('')
                setNumber('')
                console.log(response)
                
        })
        .catch(error =>{ 
            console.log(error) 
            
    })
    event.preventDefault();
    
    }
    return (
        <div class="page-wrapper">
            <main class="main">
                
                <div class="page-content pb-0">

                   
                    
                        <div class="container">
                            
                                <h4>Условия покупки</h4>
                                <hr className="mt-4 mb-5" />
                                <p style={{fontSize: "18px", textAlign: "justify", textIndent: "40px"}}>Швейная компания «SIMA» приглашает к сотрудничеству индивидуальных предпринимателей, крупных оптовиков, торговые сети, магазины, шоурумы, и иные формы бизнеса, заинтересованные в серьезной и долгосрочной работе.</p>
                            
                            
                        </div>
                    

                    <div style={{marginTop: "20px"}} class="container">
                        
                            <p style={{fontSize: "18px", textAlign: "justify", textIndent: "30px"}}>Заказать оптом женскую одежду от производителя можно не выходя из дома при помощи нашего каталога. Мы соберем выбранные вами товары, упакуем и подготовим к отправке наиболее удобным для Вас способом.</p>
                            <ul style={{marginLeft: "60px",marginTop: "20px", marginBottom: "20px"}}>
                                <li style={{fontSize: "18px", listStyle: "outside"}}>Минимальный заказ 5 размерных рядов</li>
                                <li style={{fontSize: "18px", listStyle: "outside"}}>Заказы комплектуются только полными размерными рядами</li>
                                <li style={{fontSize: "18px", listStyle: "outside"}}> Организация доставки товаров по всему СНГ и странам ближнего зарубежья</li>
                                <li style={{fontSize: "18px", listStyle: "outside"}}> Гарантированный возврат товара при выявлении брака</li>
                                <li style={{fontSize: "18px", listStyle: "outside"}}> Индивидуальные условия для крупного опта</li>
                            </ul>

                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>Заказать товар можно несколькими способами. Оформить заказ на сайте, или заказать звонок и обсудить заказ с менеджером по телефону, после отправки ваших контактных данных.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>После оформления заказа на сайте, вам обязательно перезвонят и подтвердят ваш заказ, наличие моделей и прочие детали.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>После совершения заказа ваш личный менеджер согласует с вами удобную для вас транспортную компанию, через которую будет отправляться заказ.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>После окончательного согласования заказа Вам будет выставлен счёт на оплату, который нужно будет оплатить с помощью системы переводов "Золотая Корона", Western Union, Контакт, Юнистрим и т.д.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>Если вы юридическое лицо и вам важен безналичный расчет, обратитесь к менеджерам, они помогут вам с оплатой через банк.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>В течение 2-х рабочих дней после поступления оплаты будет выслан ваш заказ, через согласованную транспортную компанию.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>В день отправки вашего заказа через Транспортную компанию, менеджер предоставит вам номер накладной и код получателя, для отслеживания передвижения вашего заказа в пути.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>По прибытии товара вы можете связаться с персональным менеджером, чтобы подтвердить комплектность и целостность заказа.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>Товар полностью сертифицирован, имеются Декларации соответствия ТС.</p>
                            <p style={{fontSize: "18px", textAlign: "justify",textIndent: "30px"}}>Мы напрямую заинтересованы в процветании Вашего бизнеса и долгосрочном успешном сотрудничестве!</p>
                    
                    {/* <div className="container-z" >
                            <h3 className="cont">Закажите обратный звонок</h3>
                            <h4 className="cont-h4">С Вами свяжется наш менеджер и подробно проконсультирует</h4>
                            <div className="row" style={{display: "flex", justifyContent: "center"}} >
                                <div className="col-sm-3">
                                    <input 
                                        className="input-z" 
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={e => setName(e.target.value)} 
                                        type="text"/>
                                </div>
                                <div className="col-sm-3">
                                    <input 
                                        className="input-z" 
                                        placeholder="Номер телефона"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)} 
                                        type="tel"/>
                                </div>
                                
                            </div>
                            <div onClick={sendName} class="btn-wrap">
		                		<a style={{fontSize: "18px"}} href="" class="btn btn-primary btn-round">Отправить</a>
		                	</div>
                        </div> */}
                        </div>
                   
                </div>
            </main>
        </div>
    )
}

