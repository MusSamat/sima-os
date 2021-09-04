import React, {useState, useEffect, useContext} from 'react';
import axios from "axios"
import "../../App.css";
import logo from "../../assets/logo.png";
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
        <div>

            <div className="mb-10 mt-4  " style={{
                textAlign: "center",
                padding: "30px",
                marginTop: " 20px",
                backgroundColor: "#F6F6F6",
                boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)"
            }}>
                <div className="container-z">
                    <h2 className="mb-3" style={{color: "#EEA287"}}>Закажите обратный звонок</h2>
                    <div className="row d-flex justify-content-center">
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
                    <div className="more-container text-center mt-3 mb-3">
                        <a href="" onClick={sendName} className="btn btn-outline-dark-3 btn-more"><span>Отправить</span></a>
                    </div>
                    {/*<div style={{width: "250px",}} onClick={sendName} className="btn-wrap">*/}
                    {/*    <a href="" class="btn btn-outline-dark btn-rounded"><span style={{*/}
                    {/*        fontWeight: "600",*/}
                    {/*        fontStyle: "normal",*/}
                    {/*        fontSize: "20px",*/}
                    {/*        lineHeight: "24px"*/}
                    {/*    }}>Отправить</span></a>*/}
                    {/*</div>*/}
                </div>

            </div>

            <footer class="footer footer-2">
                <div class="footer-middle">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5 style={{color: "white"}}>Адрес</h5>
                                    <p style={{fontSize: "18px", color: "inherit"}}>Кыргызстан, 720016 г. Бишкек, <br/>ул.
                                        Фрунзе 144а</p>

                                    <p style={{fontSize: "18px", color: "inherit", lineHeight: "normal"}}>Рынок «Дордой» <br/> 5
                                        проход конт. 458/1</p>


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
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*<div class="footer-bottom">*/}
                {/*    <div class="container">*/}
                {/*        <p class="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>*/}
                {/*        <ul class="footer-menu">*/}
                {/*            <li><a href="#">Terms Of Use</a></li>*/}
                {/*            <li><a href="#">Privacy Policy</a></li>*/}
                {/*        </ul>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </footer>
        </div>
    )
}
