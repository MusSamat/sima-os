import React, {useState, useEffect, useContext} from 'react';
import axios from "axios"
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import "../../App.css";
import { NavLink, Router } from 'react-router-dom';
import { DELIVERY_ROUTE } from '../../utils/Const';


export default function Footer() {

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
                
        })
        .catch(error =>{ 
            console.log(error) 
            
    })
    event.preventDefault();
    
    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div>

            <div className="mb-10 mt-4  " style={{textAlign: "center", padding: "30px", marginTop: " 20px",backgroundColor: "#F6F6F6", boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)"}}>
                        <div className="container-z" >
                            <h2 className="mb-3" style={{color: "#EEA287"}}>Закажите обратный звонок</h2>
                            <div className="row d-flex justify-content-center"  >
                                <div className="col-sm-3 d-flex justify-content-center mb-2">
                                    <input 
                                        className="input-z " 
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={e => setName(e.target.value)} 
                                        type="text"/>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">
                                    <input 
                                        className="input-z" 
                                        placeholder="Номер телефона"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)} 
                                        type="tel"/>
                                </div>
                                
                            </div>
                            <div style={{width: "250px",}} onClick={sendName} className="btn-wrap">
		                		<a href="" class="btn btn-outline-dark btn-rounded"><span style={{fontWeight: "600", fontStyle: "normal", fontSize: "20px", lineHeight: "24px"}}>Отправить</span></a>
		                	</div>
                            {/* <div class="btn-wrap">
		                		<a href="" class="btn btn-outline-primary btn-rounded"><span>Отправить</span><i class="icon-long-arrow-right"></i></a>
		                	</div> */}
                                {/* <button className="btn">
                                    <span>Показать</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>
                            <div onClick={sendName} className="btn">
                                <span>Показать</span>
		                		<a style={{fontSize: "18px"}} href="" class="btn btn-primary btn-round">Отправить</a>
		                	</div> */}
                        </div>
                        
                    </div> 


            <footer className="footer footer-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="widget widget-about">
                                    <h4 className="widget-title">Контакты</h4>
                                    <p style={{fontSize: "18px"}}>Кыргызстан,  720016 г. Бишкек,</p>
                                    <p style={{fontSize: "18px"}}>ул. Фрунзе 144а</p>
                                    <p style={{fontSize: "18px"}}>Рынок «Дордой»</p>
                                    <p style={{fontSize: "18px"}}>5 проход конт. 458/1</p>
                                    <p style={{fontSize: "18px"}}>+996 (705) 55 58 29</p>
                                    <div className="social-icons social-icons-color">
                                        <a style={{fontSize: "20px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a style={{fontSize: "20px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a style={{fontSize: "20px"}} href="https://www.instagram.com/simacompany_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a style={{fontSize: "20px"}} href="https://ok.ru/profile/584170543033"  className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                                        
                                    </div>
                                    
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
                                <div className="widget">
                                    <h4 className="widget-title">Сотрудничество</h4>
                                    {/* <Router> */}
                                        <ul className="widget-list">
                                            <li style={{fontSize: "16px"}}><a href="#">Главная</a></li>
                                            <li style={{ fontSize: "16px"}}><a href="#">Каталог</a></li>
                                            {/* <NavLink to={DELIVERY_ROUTE}> */}
                                                <li style={{ fontSize: "16px"}}><a href="#">Доставка</a></li>
                                            {/* </NavLink> */}
                                        </ul>
                                    {/* </Router> */}
                                </div>
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

                        {/* <div className="social-icons social-icons-color">
                            <a style={{fontSize: "20px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a style={{fontSize: "20px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a style={{fontSize: "20px"}} href="https://www.instagram.com/simacompany_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                            <a style={{fontSize: "20px"}} href="https://ok.ru/profile/584170543033"  className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                            
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}
