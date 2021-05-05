import React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";



export default function Contact() {

    const mapData = {
        center: [41.09213324, 74.873856],
        zoom: 6 ,
    };

    const coordinates = [
        [42.870981, 74.569466],
        [40.925689, 72.975878],
        [42.821084, 75.290325],
        [40.538914, 72.796954],
        [40.057396, 70.825942],
    ];
    


    return (
        
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact us 2</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    {/* <div id="map" className="mb-5"></div> */}

                    <div  className="container" style={{ height: '100vh', width: '95%' }}>
                        <div className="horizontal">
                            <hr/>
                        </div>
                        <div style={{width:'100%', height:'70%', position:'relative'}} >
                            <YMaps >
                                <Map  width='100%' height='100%'  defaultState={mapData} >
                                    {coordinates.map((coordinate, index) => <Placemark key={index} geometry={coordinate} />)}
                                </Map>
                            </YMaps>
                        </div>
                        <div className="horizontal">
                            <hr/>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Адрес:</h5>

                                    <address>Кыргызстан,  720016 г. Бишкек, <br/>ул. Абдрахманова 219</address>

                                    <h5>Рынок «Дордой»</h5>
                                    <p>9 проход конт. 893/12</p>
                                    <p>+996 (312) 90 75 46</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Руководитель:</h5>

                                    <div><a href="mailto:#">+996 (553)32 05 32</a></div>
                                    <div><a href="tel:#">W/app:+ 996 (772) 32 06 32</a>, <a href="tel:#"></a></div>
                                    <h5>Менеджер:</h5>
                                    <div><a href="mailto:#">+ 996 (700) 50 60 46</a></div>
                                    <div><a href="tel:#">W/app: +996 (557) 63 33 35</a>, <a href="tel:#"></a></div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-box text-center">
                                    <h5>Социальное</h5>

                                    <div  className="social-icons social-icons-color justify-content-center">
                                        <a style={{fontSize: "25px"}} href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a style={{fontSize: "25px"}} href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a style={{fontSize: "25px"}} href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a style={{fontSize: "25px"}} href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-3 mb-5 mt-md-1"/>



                        
                    </div>


                    
                </div>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
            </main>
    )
}
