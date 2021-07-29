import React,{useEffect, useContext} from 'react';
import "../../App.css";
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/Const';
import vk from '../../assets/vk.png'
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';


const Contact = observer(() => {
    const {user} = useContext(Context)

    useEffect(() => {
        window.scrollTo(0,0)
        user.getImageContact()
    }, [])
    return (
        
            <main className="main mt-7">
                    <div className="container">
                        <ol class="breadcrumb mb-2">
                            <li class="breadcrumb-item"><NavLink to={HOME_ROUTE}><a href="">Главная</a></NavLink></li>
                            <li class="breadcrumb-item"><a href="">Контакты</a></li>
                        </ol>
                        {user.contact?.map((img, index) =>
                        <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>                             
                        </div>)}
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Адрес</h5>
                                    <p style={{fontSize: "18px", color: "#000000"}}>Кыргызстан,  720016 г. Бишкек, <br/>ул. Фрунзе 144а</p>

                                    <p style={{fontSize: "18px", color: "#000000", lineHeight: "normal"}}>Рынок «Дордой» <br/> 5 проход конт. 458/1</p>
                                    
                                    
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="contact-box text-center">
                                    <h5>Руководитель</h5>
                                    <p style={{fontSize: "18px", color: "#000000"}}>+996 (705) 55 58 29 Руководитель</p>
                                    <p style={{fontSize: "18px", color: "#000000"}}>+996 (709) 99 99 15 Менеджер по продажам</p>
                                    <p style={{fontSize: "18px", color: "#000000"}}>+996 (999) 99 88 15 Менеджер по продажам</p>
                                    
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="contact-box text-center">
                                    <h5>Мы в соц. сетях</h5>

                                    <div  className="social-icons social-icons-color justify-content-center">
                                        <a style={{fontSize: "25px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://www.instagram.com/simastyle_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a style={{fontSize: "20px", color: "#ee8208"}} href="https://ok.ru/profile/584170543033" className="social-icon" target="_blank" title="odnoklassniki"><i className="icon-odnoklassniki"></i></a>
                                        <a style={{fontSize: "20px"}} href="https://vk.com/simastyle"  className="social-icon"> <img style={{width: "25px"}} src={vk}/></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
            </main>
    )
})

export default Contact;
