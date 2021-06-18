import React from 'react'
import { FaOdnoklassnikiSquare } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer className="footer footer-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="widget widget-about">
                                    <h4 className="widget-title">Контакты</h4>
                                    {/* <img src="assets/images/demos/demo-8/logo-footer.png" className="footer-logo" alt="Footer Logo" width="82" height="25"/> */}
                                    <address style={{fontSize: "18px"}} className="widget-list">Кыргызстан,  720016 г. Бишкек, <br/>ул. Фрунзе 144а</address>
                                    <p style={{fontSize: "18px"}}>Рынок «Дордой»</p>
                                        <p style={{fontSize: "18px"}}>5 проход конт. 458/1</p>
                                        <p style={{fontSize: "18px"}}>+996 (705) 55 58 29</p>
                                    
                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                {/* <a href="tel:+996709999915">+996709999915</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-4">
                                <div className="widget">
                                    <h4 className="widget-title"> НОВОСТИ</h4>

                                    <ul className="widget-list">
                                        {/* <li style={{ fontSize: "16px"}}><a href="about.html">Оплата не выходя из дома.</a></li> */}
                                        <li style={{ fontSize: "16px"}}><a href="#">Почему клиенты выбирают нас</a></li>
                                        {/* <li style={{ fontSize: "16px"}}><a href="faq.html">Удобная мобильная версия.</a></li> */}
                                        <li style={{ fontSize: "16px"}}><a href="contact.html">«Предприятие лидер Евразийского Союза Государств»</a></li>
                                        <li style={{ fontSize: "16px"}}><a href="login.html">«SIMA» на выставках Текстильлегпром</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-4">
                                {/* <div className="widget">
                                    <h4 className="widget-title">МЕНЮ</h4>

                                    <ul className="widget-list">
                                        <li style={{fontSize: "16px"}}><a href="#">Главная</a></li>
                                        <li style={{ fontSize: "16px"}}><a href="#">Каталог</a></li>
                                        <li style={{ fontSize: "16px"}}><a href="#">Доставка</a></li>
                                        <li style={{ fontSize: "16px"}}><a href="#">Контакты</a></li>
                                        <li style={{fontSize: "16px"}}><a href="#">Новости</a></li>
                                        <li style={{ fontSize: "16px"}}><a href="#">О компании</a></li>
                                    </ul>
                                </div> */}
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p style={{ fontSize: "14px", marginTop:"2px", marginRight: "15px"}}>ШВЕЙНАЯ ФАБРИКА SIMA © 2021</p>
                        <ul className="footer-menu">
                            <li style={{ fontSize: "14px"}}><a href="#">РАЗРАБОТКА САЙТА:</a></li>
                            <li style={{ fontSize: "14px"}}><a href="#">АКМАТАЛИЕВ БАЯСТАН</a></li>
                        </ul>

                        <div className="social-icons social-icons-color">
                            <a style={{fontSize: "20px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a style={{fontSize: "20px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a style={{fontSize: "20px"}} href="https://www.instagram.com/simacompany_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a style={{fontSize: "20px"}} href="https://ok.ru/profile/584170543033"  className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
