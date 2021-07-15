import React,{useEffect} from 'react';
import "../../App.css";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";



export default function Contact() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        
            <main className="main">

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Адрес</h5>

                                    <p style={{fontSize: "18px"}}>Кыргызстан,  720016 г. Бишкек, <br/>ул. Фрунзе 144а</p>

                                    <p style={{fontSize: "18px"}}>Рынок «Дордой»</p>
                                    <p style={{fontSize: "18px"}}>5 проход конт. 458/1</p>
                                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Руководитель</h5>
                                    <p style={{fontSize: "18px"}}>+996 (705) 55 58 29</p>
                                    <p style={{fontSize: "18px"}}>+996 (709) 99 99 15</p>
                                    <p style={{fontSize: "18px"}}>+ 996 (700) 50 60 46</p>
                                    <p style={{fontSize: "18px"}}><FaWhatsappSquare style={{ color: "green",fontSize: "30px"}}/> +996 (705) 55 58 29</p>
                                    
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Мы в соц. сетях</h5>

                                    <div  className="social-icons social-icons-color justify-content-center">
                                        <a style={{fontSize: "25px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a style={{fontSize: "25px"}} href="https://www.instagram.com/simacompany_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a style={{fontSize: "20px", color: "#ee8208"}} href="https://ok.ru/profile/584170543033" className="social-icon" target="_blank" title="odnoklassniki"><i className="icon-odnoklassniki"></i></a>
                                        {/* <a style={{fontSize: "20px"}} href="https://ok.ru/profile/584170543033"  className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a> */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                </div>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
            </main>
    )
}
