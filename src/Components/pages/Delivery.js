import React, {useEffect, useContext} from 'react';
import "../../App.css"
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {NavLink} from 'react-router-dom';
import {HOME_ROUTE} from '../../utils/Const';


const Delivery = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        window.scrollTo(0, 0)
        user.getImageDelivery()
    }, [])

    return (
        <div className="page-wrapper mt-4">
            <div className="container">
                {/*<ol className="breadcrumb mt-4 mb-2">*/}
                {/*    <li className="breadcrumb-item"><NavLink to={HOME_ROUTE}><a className="breadcrumb-item"*/}
                {/*                                                                href="">Главная</a></NavLink></li>*/}
                {/*    <li className="breadcrumb-item"><a href="">Условия доставки</a></li>*/}
                {/*</ol>*/}
            </div>
            {user.delivery.map((img, index) =>
                <div key={index} className="intro-slide mt-1.5" style={{backgroundImage: `url(${img.image})`}}>

                </div>)}
            <div className="container">
                <div className="row">
                    <div className=" col-sm-12">
                        <div style={{display: "flex", justifyContent: "center", marginTop: "40px",}}><h2
                            style={{color: "#EEA287"}}>Условия доставки</h2></div>
                    </div>
                </div>

            </div>
            <div className="container">

                <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>Осуществляем
                    доставку в города России, Украины, Казахстана, Беларуси, Узбекистана, и по всему миру, любым удобным
                    для Вас способом. Доставка посылок производится железнодорожным, авиа и автомобильным транспортом в
                    зависимости от города. Доставка заказов полностью оплачивается Заказчиком. Транспортировка груза
                    производится транспортными компаниями, до центральных городов. Доставка до терминалов транспортных
                    компаний бесплатная. </p>
                <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>После
                    совершения заказа ваш личный менеджер согласует с вами удобный для вас способ доставки. В течение
                    3-х рабочих дней после поступления оплаты будет выслан ваш заказ, через согласованную транспортную
                    компанию. В день отправки вашего заказа, менеджер предоставит вам номер накладной и код получателя,
                    для отслеживания передвижения вашего заказа в пути. Информацию о стоимости и сроках доставки в ваш
                    регион можете получить у представителей данных транспортных компаний или у нашего менеджера</p>


                <hr className="mt-4 mb-5"/>
                <p style={{fontSize: "16px", textAlign: "justify", textIndent: "30px", color: "#000000"}}>На сегодняшний
                    день, <span style={{color: "#EEA287"}}>компания «SIMA»</span> работает с транспортными компаниями:
                </p>
                <ul style={{marginLeft: "70px", marginTop: "20px", listStyle: "outside"}}>
                    <li style={{fontSize: "16px", color: "#000000"}}>БиекКарго (Россия, Казахстан) <a
                        href="http://www.goldenpages.kg/ru/company/show/6009-biek-cargo-osoo.html">www.goldenpages.kg</a>
                    </li>
                    <li style={{fontSize: "16px", color: "#000000"}}>Альфа-Карго (Россия, Казахстан) <a
                        href="https://www.alpha-cargo.kg/"> www.alpha-cargo.kg</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}>Экспресс Карго <a
                        href="https://bagat.su/dostavka-gruzov-v-mongoliyu/">bagat.su</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}> Бостон Карго <a
                        href="https://ban24.ru/bishkek/firm/boston-kargo-osoo">ban24.ru/bishkek</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}> Бишкек Карго (Россия, Казахстан) <a
                        href="https://bishkek.adresa-telefony.ru/bishkek_kargo_kompanija-70000001020744502.html">bishkek.adresa-telefony.ru</a>
                    </li>
                    <li style={{fontSize: "16px", color: "#000000"}}>КИТ (Россия, Казахстан, Беларусь, Армения) <a
                        href="https://www.spyur.am/ru/companies/kit-armn-transport-company-representation-of-russian-kit-company-in-armenia/34761">www.spyur.am/ru</a>
                    </li>
                    <li style={{fontSize: "16px", color: "#000000"}}>Транспортная компания «Росскарго» <a
                        href="https://moving.tappynow.app/ru/bshk?utm_source=google&utm_medium=cpc&utm_campaign=iprofit_perevozki_bishkek_poisk&utm_term=%2B%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%BD%D0%B0%D1%8F%20%2B%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F&cm_id=12559893767_118886965665_506833862823_kwd-296625173251_c__g_&gclid=CjwKCAjwqcKFBhAhEiwAfEr7zVQ1_gptAT15rznnjJirp44GJ0aL8WljFBGs7HOvM3HB2N7xckM88hoCIucQAvD_BwE">moving.tappynow.app/ru</a>
                    </li>
                    <li style={{fontSize: "16px", color: "#000000"}}>Транспортная компания «Альянс Карго» <a
                        href="https://porter-taxi-bishkek.netlify.app/">porter-taxi-bishkek.netlify.app</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}>СДЭК <a
                        href="https://www.cdek.ru/ru/">www.cdek.ru</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}>Энергия (Россия, Казахстан, Беларусь, Армения) <a
                        href="https://nrg-tk.ru/">nrg-tk.ru</a></li>
                    <li style={{fontSize: "16px", color: "#000000"}}>И другие</li>
                </ul>

                <p style={{fontSize: "16px", textAlign: "justify", textIndent: "40px", color: "#000000"}}>Менеджер
                    подберет вам оптимальный тариф на доставку, согласно вашим потребностям. Для каждого партнера
                    подбирается индивидуальное решение по доставке, с учётом местоположения и пожеланий, и оптимального
                    срока доставки.</p>

            </div>
        </div>
    )
})

export default Delivery
