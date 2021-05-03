import React from 'react';
import Particle from './Particle';
import "../../App.css";

import Clock from 'react-live-clock';



export default function Main() {

    const event = new Date(Date.UTC(2021, 4, 3, 12, 47, 0));
    console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));

    let bishkek = new Date().toLocaleTimeString();
    let moscow = new Date().toLocaleTimeString('en-US');
    let samara = new Date().toLocaleTimeString('it-IT');
    let astana = new Date().toLocaleTimeString();
    let novasibr = new Date().toLocaleTimeString();
    let time = new Date().toLocaleTimeString();

    

    
    return (
        <div>
            <main className="main">
                <div className="App1">
                    <Particle/>
                </div>
                <div className="pt-2 pb-2">
                    <div className="container brands">
                    
                      {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />   */}
                    </div>
                </div>

                <div className="mb-3"></div>

                <div className="container">
                </div>

                

                
                
                <div className="mb-7"></div>
                <div className="container">
                    <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="icon-box text-center1">
                                    
                                    <div className="icon-box-content1">
                                        
                                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Bishkek'} />
                                    </div>
                                    <h4>Bishkek</h4>
                                </div>
                                
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="icon-box text-center1">
                                    
                                    <div className="icon-box-content1">
                                        
                                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Moscow'} />
                                        
                                    </div>
                                    <h4>Moscow</h4>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="icon-box text-center1">
                                    
                                    <div className="icon-box-content1">
                                       
                                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tashkent'} />
                                       
                                    </div> <h4>Tashkent</h4>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="icon-box text-center1">
                                    
                                    <div className="icon-box-content1">
                                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Yekaterinburg'} />
                                        
                                    </div><h4>Yekaterinburg</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">{time}</h3>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">{time}</h3>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">{time}</h3>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="container instagram">
                    <div className="heading text-center">
                        <h2 className="title title-lg">ПОДПИСАТЬСЯ НА INSTAGRAM</h2>
                        <p className="title-desc">Хочешь поделиться с нами своим стилем?</p>
                    </div>
                </div>

            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
        
    )
}

