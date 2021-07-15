import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import "../../App.css";
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

const  Purchases = observer(() => {

    const {user} = useContext(Context)

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
    useEffect(() => {
        window.scrollTo(0,0)
        user.getImage()
    }, [])
    return (
        <div class="page-wrapper">
            <main class="main">
                <div class="page-content ">
                    {console.log(user.image)}
                    {user.image.map((img, index) =>
                        <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>    
                            
                            {/* <div className="container intro-content text-left ">
                                <h1 className="intro-title">{img.title}<br/>< strong style={{marginLeft: "-9px"}}>sale</strong></h1>

                               
                            </div> */}
                            
                        </div>)}
                        <div class="container mt-4">
                                <div style={{display: "flex", justifyContent: "center", }}><h2 style={{color: "#EEA287"}}>Условия покупки</h2></div>
                                <p style={{fontSize: "16px", textAlign: "justify", textIndent: "30px"}}>Швейная компания «SIMA» приглашает к сотрудничеству индивидуальных предпринимателей, крупных оптовиков, торговые сети, магазины, шоурумы, и иные формы бизнеса, заинтересованные в серьезной и долгосрочной работе.
                                Заказать оптом женскую одежду от производителя можно не выходя из дома при помощи нашего каталога. Мы соберем выбранные вами товары, упакуем и подготовим к отправке наиболее удобным для Вас способом.</p>
                            
                        </div>
                    

                    <div style={{marginTop: "20px"}} class="container">
                        
                            
                            <ul style={{marginLeft: "60px",marginTop: "20px", marginBottom: "20px"}}>
                                <li style={{fontSize: "16px", listStyle: "outside"}}>Минимальный заказ 5 размерных рядов</li>
                                <li style={{fontSize: "16px", listStyle: "outside"}}>Заказы комплектуются только полными размерными рядами</li>
                                <li style={{fontSize: "16px", listStyle: "outside"}}> Организация доставки товаров по всему СНГ и странам ближнего зарубежья</li>
                                <li style={{fontSize: "16px", listStyle: "outside"}}> Гарантированный возврат товара при выявлении брака</li>
                                <li style={{fontSize: "16px", listStyle: "outside"}}> Индивидуальные условия для крупного опта</li>
                            </ul>

                            <p style={{fontSize: "16px", textAlign: "justify",textIndent: "30px"}}>Заказать товар можно несколькими способами. Оформить заказ на сайте, или заказать звонок и обсудить заказ с менеджером по телефону, после отправки ваших контактных данных.
                            После оформления заказа на сайте, вам обязательно перезвонят и подтвердят ваш заказ, наличие моделей и прочие детали.
                            После совершения заказа ваш личный менеджер согласует с вами удобную для вас транспортную компанию, через которую будет отправляться заказ.
                            После окончательного согласования заказа Вам будет выставлен счёт на оплату, который нужно будет оплатить с помощью системы переводов "Золотая Корона", Western Union, Контакт, Юнистрим и т.д.
                            Если вы юридическое лицо и вам важен безналичный расчет, обратитесь к менеджерам, они помогут вам с оплатой через банк.
                            В течение 2-х рабочих дней после поступления оплаты будет выслан ваш заказ, через согласованную транспортную компанию.
                            В день отправки вашего заказа через Транспортную компанию, менеджер предоставит вам номер накладной и код получателя, для отслеживания передвижения вашего заказа в пути.
                            По прибытии товара вы можете связаться с персональным менеджером, чтобы подтвердить комплектность и целостность заказа.
                            Товар полностью сертифицирован, имеются Декларации соответствия ТС.
                            Мы напрямую заинтересованы в процветании Вашего бизнеса и долгосрочном успешном сотрудничестве!</p>
                    
            
                        </div>
                   
                </div>
            </main>
        </div>
    )
})

export default  Purchases;

