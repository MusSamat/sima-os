import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import "../../App.css";
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';

const Purchases = observer(() => {

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
            .catch(error => {
                console.log(error)

            })
        event.preventDefault();

    }
    useEffect(() => {
        window.scrollTo(0, 0)
        user.getImagePurchase()
    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="container">
                </div>
                {user.purchase.map((img, index) =>
                    <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>
                    </div>)}
                <div className="container mt-4">
                    <div style={{display: "flex", justifyContent: "center", marginBottom: "25px"}}><h2
                        style={{color: "#c96"}}>Условия покупки</h2></div>
                    <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}><span
                        style={{color: "#c96"}}>Швейная компания «SIMA»</span> приглашает к сотрудничеству
                        индивидуальных предпринимателей, крупных оптовиков, торговые сети, магазины, шоурумы, и иные
                        формы бизнеса, заинтересованные в серьезной и долгосрочной работе.</p>
                    <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>Заказать
                        оптом одежду от производителя, можно не выходя из дома при помощи нашего сайта. Мы соберем
                        выбранные вами товары, упакуем и подготовим к отправке наиболее удобным для Вас способом.</p>

                </div>


                <div style={{marginTop: "20px"}} className="container">


                    <ul style={{marginLeft: "60px", marginTop: "20px", marginBottom: "20px"}}>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}>Минимальный заказ 5
                            размерных рядов
                        </li>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}>Заказы комплектуются
                            только полными размерными рядами
                        </li>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}> Организация доставки
                            товаров по всему СНГ и странам ближнего зарубежья
                        </li>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}> Гарантированный возврат
                            товара при выявлении брака
                        </li>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}> Индивидуальные условия
                            для крупного опта
                        </li>
                    </ul>
                    <p style={{fontSize: "16px", textAlign: "justify", textIndent: "58px", color: "#c96"}}>Заказать
                        товар можно несколькими способами:</p>
                    <ul style={{marginLeft: "60px", marginTop: "5px", marginBottom: "20px"}}>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}>Оформить заказ на сайте.
                            После оформления заказа на сайте, вам обязательно перезвонят и подтвердят ваш заказ.
                        </li>
                        <li style={{fontSize: "16px", listStyle: "outside", color: "#000000"}}>Заказать звонок <strong>(*внизу
                            под каждой страницей) </strong>и обсудить детали с менеджером по телефону, после отправки
                            ваших контактных данных. После окончательного согласования заказа Вам будет выставлен счёт
                            на оплату, который можно будет оплатить:
                            <ul>
                                <li style={{
                                    fontSize: "16px",
                                    listStyle: "outside",
                                    color: "#c96",
                                    listStyle: 'none',
                                    marginLeft: '20px',
                                    fontWeight: "500"
                                }}>o Наличным
                                </li>
                                <li style={{
                                    fontSize: "16px",
                                    listStyle: "outside",
                                    color: "#c96",
                                    listStyle: 'none',
                                    marginLeft: '20px',
                                    fontWeight: "500"
                                }}>o Безналичным расчетом
                                </li>
                                <li style={{
                                    fontSize: "16px",
                                    listStyle: "outside",
                                    color: "#c96",
                                    listStyle: 'none',
                                    marginLeft: '20px',
                                    fontWeight: "500"
                                }}>o Банковским переводом
                                </li>
                                <li style={{
                                    fontSize: "16px",
                                    listStyle: "outside",
                                    color: "#c96",
                                    listStyle: 'none',
                                    marginLeft: '20px',
                                    fontWeight: "500"
                                }}>o Банковской карточкой
                                </li>
                            </ul>

                        </li>

                    </ul>

                    <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>Товар
                        полностью сертифицирован, имеются Декларации соответствия ТС. Мы напрямую заинтересованы в
                        процветании Вашего бизнеса и долгосрочном успешном сотрудничестве!</p>
                    <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>Желаем Вам
                        удачных покупок.</p>


                </div>
            </main>
        </div>
    )
})

export default Purchases;

