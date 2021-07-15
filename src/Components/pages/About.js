import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";
import { Context } from '../../index';

const About = observer(( ) => {
    const {user} = useContext(Context)
    const {product} = useContext(Context)
    useEffect(() => {
        window.scrollTo(0,0)
        product.getSertivicat()
        product.getGallery()
    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="page-content ">
                    <div className="pb-5 mb-1 mb-lg-8">
                        <div className="container">
                                <div  style={{display: "flex", justifyContent: "center", marginBottom: "20px" }}><h2 style={{color: "#EEA287", textAlign: "center"}}>ДОБРО ПОЖАЛОВАТЬ</h2></div>
                                <p style={{ textAlign: "justify",textIndent: "30px", fontSize: "16px", color: "#000000"}}>Швейная компания «SIMA» — одна из ведущих производителей женской одежды на рынке Кыргызстана, 
                                
                                    России, Казахстана, Беларуси и на международном рынке.
                                    Компания начала свой путь развития с 1998 года.
                                
                                 творческий коллектив дизайнеров, модельеров-конструкторов и технологов предлагают такие решения, что выпускаемая нами продукция позволяет не только подчеркнуть достоинства и скрыть недостатки, но и показать свою уникальность, предать чувства уверенности, легкости, свободы и комфорта, выглядеть современно и стильно.
                               Продукция «SIMA» поможет каждой женщине в создании собственного неповторимого образа и подарит незабываемые эмоции. Производство женской одежды оптом от нашей компании направлено на удовлетворение спроса конечного потребителя. 
                               20-летний путь становления компании “SIMA” – это путь интенсивного развития, труда.
                                На сегодняшний день действующая производственная база компании оснащена современным высокотехнологичным оборудованием известных мировых марок и программно-аппаратными комплексами.
                                Ежегодно выпускаются 4 сезонные коллекции одежды, ориентированные на экспорт.
                                Средний объем выпускаемой продукции: 20 тыс. единиц в месяц.
                               Наша цель – помочь развить малый и средний бизнес, так как наши клиенты — это владельцы магазинов и бутиков оптом от производителя. Вся продукция фабрики «SIMA» производится в Кыргызстане. Поэтому одежда поступают на рынок оптом по низким ценам и гарантированно высокого качества. Производство дизайнерской  одежды основано на современных тенденциях. Весь ассортимент производится только после изучения спроса на новую модель
                                Ассортимент производства женской одежды постоянно изменяется и совершенствуется нашими модельерами, исходя из ваших пожеланий и новых направлений в мире моды.
                                
                                    Перед отправкой заказчикам, все товары дополнительно проверяются на соответствие параметрам. 
                                    Мы дорожим своей репутацией, потому предлагаем модную одежду оптом, исключительно высокого качества.
                                    Вы имеете возможность заказать женскую одежду  оптом и по доступным ценам. Гарантируем, что Вы будете довольны, работая с нами.
                                
                                Молодежная линия - от 42 до 56 размеров, женская линия - от 48 до 62 размеров</p>
                            
                                <p style={{ fontSize: "16px", color: "#000000" }}>Цены вас приятно удивят, а закупаемая у нас продукция, порадует вас успешными продажами!
                            </p>
                        <p style={{ fontSize: "16px", color: "#000000"}}>Желаем Вам удачных покупок!</p>
                        </div>
                    </div>

                    <div className="container">
                        
                            
                        <hr className=" mb-1"/>
                        <h2 className="d-flex justify-content-center" style={{color: "#EEA287"}}>Сертификат</h2>
                        <div className="products mt-4">
                        <div className="row justify-content-center">
                            
                            {console.log(product.sertificate)}
                            {product.sertificate?.map((discout, index)=>
                            <div key={index} className="col-6 col-md-4 col-lg-2">
                                <div className="product product-7 text-center  ">
                                        <figure className="product-media ">
                                            <a href="">
                                                <img src={`${discout.image}`} alt="Product image" className="product-image"/>
                                            </a>
                                        </figure>
                                </div>
                            </div>)}
                        </div>
                     </div>
                     <hr className=" mb-6"/>
                     <h2 className="d-flex justify-content-center" style={{color: "#EEA287"}}>Галерея</h2>
                     <div className="products mt-4">
                        <div className="row justify-content-center">
                            {product.gallery?.map((discout, index)=>
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <div className="product product-7 text-center  ">
                                        <figure className="product-media ">
                                            <a href="">
                                                <img src={`${discout.image}`} alt="Product image" className="product-image"/>
                                            </a>
                                        </figure>
                                </div>
                            </div>)}
                        </div>
                     </div> 
                    </div>
                </div>
            </main>
        </div>
    )
})

export default  About
