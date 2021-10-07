import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import "../../App.css";
import {Context} from '../../index';

const About = observer(() => {
    const {user} = useContext(Context)
    const {product} = useContext(Context)
    useEffect(() => {
        window.scrollTo(0, 0)
        product.getSertivicat()
        product.getGallery()
        user.getImageAbout()
    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">
                {user.about?.map((img, index) =>
                    <div key={index} className="intro-slide mb-2"
                         style={{backgroundImage: `url(${img.image})`}}>

                    </div>)}
                <div className="pb-5 mb-1 mb-lg-8 mt-4 ">
                    <div className="container">

                        <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}><h2
                            style={{color: "#c96", textAlign: "center"}}>О нас</h2></div>
                        <p style={{textAlign: "justify", textIndent: "40px", fontSize: "16px", color: "#000000"}}><span
                            style={{color: "#c96"}}>Швейная компания «SIMA»</span> — начала свой путь развития с 1998
                            года, ежегодно выпускаются 4 сезонные коллекции одежды, ориентированные на рынки России,
                            Украины, Казахстана, Беларуси, Узбекистана и на международные рынки. Вся продукция <span
                                style={{color: "#c96"}}>компании «SIMA»</span> производится в Кыргызстане. На
                            сегодняшний день действующая производственная база компании оснащена современными
                            высокотехнологичными оборудованиями известных мировых марок и программно-аппаратными
                            комплексами. Перед отправкой, товар проходит 3-этапную проверку.</p>
                        <p style={{textAlign: "justify", textIndent: "40px", fontSize: "16px", color: "#000000"}}>Наша
                            цель – помочь развить малый и средний бизнес, так как наши клиенты — это индивидуальные
                            предприниматели, крупные оптовики, торговые сети, магазины, шоурумы, и иные формы бизнеса.
                            Продукция поступает на рынок оптом по низким ценам и гарантированно высокого качества.
                            Производство дизайнерской одежды основано на современных тенденциях. Весь ассортимент
                            производится только после изучения спроса на новые модели. </p>
                        <p style={{textAlign: "justify", textIndent: "40px", fontSize: "16px", color: "#000000"}}>Мы
                            дорожим своей репутацией, поэтому наша команда дизайнеров, модельеров-конструкторов и
                            технологов предлагают такие решения, что выпускаемая нами продукция позволяет не только
                            подчеркнуть достоинства и скрыть недостатки, но и выглядеть современно и стильно.
                            Производство женской одежды от нашей компании направлено на удовлетворение спроса конечного
                            потребителя.</p>
                        <p style={{
                            textAlign: "justify",
                            textIndent: "40px",
                            fontSize: "16px",
                            color: "#000000"
                        }}>Гарантируем, что Вы будете довольны, работая с нами.</p>
                        <p style={{textAlign: "justify", textIndent: "40px", fontSize: "16px", color: "#000000"}}>Цены
                            вас приятно удивят, а закупаемая у нас продукция, порадует вас успешными продажами.</p>

                    </div>
                </div>

                <div className="container">


                    <hr className=" mb-1"/>
                    <h2 className="d-flex justify-content-center" style={{color: "#c96"}}>Награды и сертификаты</h2>
                    <div className="products mt-4">
                        <div className="row justify-content-center">
                            {product.sertificate?.map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-2">
                                    <div className="product product-7 text-center  ">
                                        <figure className="product-media ">
                                            <a href="">
                                                <img src={`${discout.image}`} alt="Product image"
                                                     className="product-image"/>
                                            </a>
                                        </figure>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                    <hr className=" mb-6"/>
                    <h2 className="d-flex justify-content-center" style={{color: "#c96"}}>Фотогаллерея</h2>
                    <div className="products mt-4">
                        <div className="row justify-content-center">
                            {product.gallery?.map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center  ">
                                        <figure className="product-media ">
                                            <a href="">
                                                <img src={`${discout.image}`} alt="Product image"
                                                     className="product-image"/>
                                            </a>
                                        </figure>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
})

export default About
