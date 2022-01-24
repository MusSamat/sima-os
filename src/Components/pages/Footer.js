import React, {useState, useEffect, useContext} from 'react';
import axios from "axios"
import "../../App.css";
import elcart from "../../assets/elcart.png";
import visa from "../../assets/visa.png";
import vk from "../../assets/vk.png"


export default function Footer() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

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
            .catch(error => {
                console.log(error)

            })
        event.preventDefault();

    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{bottom: "0"}}>
            <div className="container">
                <div className="cta cta-horizontal cta-horizontal-box bg-image mb-5"
                     style={{backgroundImage: "url(assets/images/backgrounds/cta/bg-1.jpg)", backgroundPosition: "center right"}}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-3 offset-xl-1">
                            <h3 className="cta-title s-title">Закажите обратный звонок</h3>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <form onSubmit={sendName}>
                                <div className="input-group">
                                    <input type="text"className="form-control " placeholder="Ваше имя"
                                           aria-label="Email Adress" value={name}
                                           onChange={e => setName(e.target.value)} required/><br/>
                                    <input type="tel" className="form-control " placeholder="Номер телефона"
                                           aria-label="Email Adress" value={number}
                                           onChange={e => setNumber(e.target.value)} required/><br/>
                                        <div className="input-group-append ">
                                            <button className="btn btn-primary btn-rounded" type="submit">
                                                <span>Отправить</span><i className="icon-long-arrow-right"></i></button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{    backgroundColor: "#fff"}} className="footer ">
                <div classN="footer-middle">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5 style={{color: "white"}}>Адрес</h5>
                                    <p style={{fontSize: "18px", color: "inherit"}}>Кыргызстан, 720016 г. Бишкек, <br/>ул.
                                        Фрунзе 144а</p>

                                    <p style={{fontSize: "18px", color: "inherit", lineHeight: "normal"}}>Рынок «Дордой» <br/> 5
                                        проход конт. 458/1</p>
                                    <div className="col-sm-6 col-md-8 ml-5">
                                        <span className="widget-about-title">Способы оплаты</span>
                                        <figure className="footer-payments d-flex ">
                                            <img className="mr-4" src={visa}  width="52"
                                                 height="20"/>
                                            <img  src={elcart}  width="36"
                                                  height="10"/>
                                        </figure>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-5">
                                <div className="contact-box text-center">
                                    <h5 style={{color: "white"}}>Руководитель</h5>
                                    <p style={{fontSize: "18px", color: "inherit"}}>+996 (705) 55 58 29 Руководитель</p>
                                    <p style={{fontSize: "18px", color: "inherit"}}>+996 (709) 99 99 15 Менеджер по продажам</p>
                                    <p style={{fontSize: "18px", color: "inherit"}}>+996 (999) 99 88 15 Менеджер по продажам</p>

                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="contact-box text-center">
                                    <h5 style={{color: "white"}}>Мы в соц. сетях</h5>

                                    <div className="social-icons social-icons-color justify-content-center">
                                        <a style={{fontSize: "25px"}}
                                           href="https://www.facebook.com/profile.php?id=100069533462465"
                                           className="social-icon social-facebook" title="Facebook" target="_blank"><i
                                            className="icon-facebook-f"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://twitter.com/sima_company"
                                           className="social-icon social-twitter" title="Twitter" target="_blank"><i
                                            className="icon-twitter"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://www.instagram.com/simastyle_kg/"
                                           className="social-icon social-instagram" title="Instagram" target="_blank"><i
                                            className="icon-instagram"></i></a>
                                        <a style={{fontSize: "20px", color: "#ee8208"}}
                                           href="https://ok.ru/profile/584170543033" className="social-icon" target="_blank"
                                           title="odnoklassniki"><i className="icon-odnoklassniki"></i></a>
                                        <a style={{fontSize: "20px"}} href="https://vk.com/simastyle" className="social-icon">
                                            <img style={{width: "25px"}} src={vk}/></a>

                                    </div>
                                    <div  className='s-title mt-3'>grand139094@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <p class="footer-copyright"> © 2021 Sima Store. All Rights Reserved.</p>
                        <ul class="footer-menu">
                            <li><a href="">Sigma Software Solutions</a></li>
                        </ul>

                    </div>
                </div>
            </footer>
        </div>
    )
}
