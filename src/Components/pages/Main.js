import React, {useState} from 'react';
import Particle from './Particle';
import "../../App.css";
import Clocke from "../Clocks/ClockMin"
import Clock1 from "../Clocks/Clock1"
import Clock2 from "../Clocks/Clock2"
import Clock3 from "../Clocks/Clock3"
import bg from "../../assets/bg.png"
import sewing from "../../assets/sewing.png"
import fabric from "../../assets/fabric.png"
import coat from "../../assets/coat.png"
import { ImClock2 } from "react-icons/im";
import { FaTruckMoving } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import axios from "axios"
import p from "../../assets/p.png"




const  Main = () => {

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
                console.log(response)
                
        })
        .catch(error =>{ 
            console.log(error) 
            
    })
    event.preventDefault();
    
    }
    
  
         
    
    return (
        <div className="page-wrapper">
            <main className="main">
            <div className="container">
                <div className="App1">
                    <Particle/>
                </div>
                <div className="pt-2 pb-2">
                    <div className="container brands">
                    
                      
                    </div>
                </div>

                <div className="mb-3"></div>

                
                    
                            <h2 class="title">Рады приветствовать Вас на сайте Швейной компании «SIMA»</h2>
                    
                    <p style={{fontSize: "18px"}}>Швейная компания <span style={{fontWeight: "400"}}>«SIMA»</span> — одна из ведущих производителей женской одежды на рынке Кыргызстана, России, Казахстана, Беларуси и на международном рынке.
                    Компания начала свой путь развития с 1998 года.
                    Наш творческий коллектив дизайнеров, модельеров-конструкторов и технологов предлагают такие решения, что выпускаемая нами продукция позволяет не только подчеркнуть достоинства и скрыть недостатки, но и показать свою уникальность, предать чувства уверенности, легкости, свободы и комфорта, выглядеть современно и стильно. Продукция «SIMA» поможет каждой женщине в создании собственного неповторимого образа и подарит незабываемые эмоции. Производство женской одежды оптом от нашей компании направлено на удовлетворение спроса конечного потребителя. 
                    20-летний путь становления компании “SIMA” – это путь интенсивного развития, труда.
                    </p>
                    
                    <p style={{fontSize: "18px"}} >
                            Для того чтобы оформить заказ, Вам необходимо пройти простую и удобную регистрацию на сайте, как оптовый покупатель. Только после регистрации, Вам будет открыт доступ к оптовому прайс-листу и детальные описания моделей.
                            
                    </p><br></br>
                    

                </div> 
                <div className="container">
                <div class="bg-image pt-7 pb-5 pt-md-12 pb-md-9" style={{backgroundImage: `url(${bg})`}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        {/* <span class="count" data-from="0" data-to="40" data-speed="3000" data-refresh-interval="50"><ImClock2 className="icons-react" /></span> */}
                                    </div>
                                    <h3 class="count-title text-white">23 ЛЕТ НА РЫНКЕ</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        {/* <span class="count" data-from="0" data-to="20" data-speed="3000" data-refresh-interval="50">0</span>+ */}
                                    </div>
                                    <h3 class="count-title text-white">УДОБНАЯ ДОСТАВКА</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        {/* <span class="count" data-from="0" data-to="95" data-speed="3000" data-refresh-interval="50">0</span>% */}
                                    </div>
                                    <h3 class="count-title text-white">КОНТРОЛЬ КАЧЕСТВА</h3>
                                </div>
                            </div>

                            <div class="col-6 col-md-3">
                                <div class="count-container text-center">
                                    <div class="count-wrapper text-white">
                                        {/* <span class="count" data-from="0" data-to="15" data-speed="3000" data-refresh-interval="50">0</span> */}
                                    </div>
                                    <h3 class="count-title text-white">СЕРТИФИКАЦИЯ ТОВАРА</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                    {/* <div style={{margin: "40px"}} class="row" >
    					<div className="col-md-3 justify-content-center text-align-center">
                            <div className=" justify-content-center">
                                <ImClock2 className="icons-react" />
                            </div>
                            <h4>15 ЛЕТ НА РЫНКЕ</h4>
    						<p style={{fontSize: "18px"}}>Компания «SIMA» с момента своего образования, в 2005 году, занимается производством и оптовой реализацией женских платьев из трикотажного полотна для разных возрастных категорий.</p>
    					</div>

    					<div class="col-md-3">
                            <FaTruckMoving className="icons-react" />
                            <h4>УДОБНАЯ ДОСТАВКА</h4>
    						<p style={{fontSize: "18px"}}>Посредством проверенных транспортных компаний, «SIMA» доставит Ваш заказ в любой город России и Казахстана! Доставка заказов в кратчайшие сроки!</p>
    					</div>

    					<div class="col-md-3">
                            <BsShieldShaded className="icons-react" />
                            <h4>КОНТРОЛЬ КАЧЕСТВА</h4>
    						<p style={{fontSize: "18px"}}>Руководитель и сотрудники предприятия идут по пути регулярного повышения квалификации и обучения новым технологиям. На производстве работает отдел контроля качества. </p>
    					</div>

    					<div class="col-md-3">
                            <FaCertificate className="icons-react" />
                            <h4>СЕРТИФИКАЦИЯ ТОВАРА</h4>
    						<p style={{fontSize: "18px"}}>Наша продукция прошла маркировку Евразийского соответствия (EAC) - что свидетельствует о том, что продукция прошла все установленные в технических регламентах процедуры.</p>
    					</div>
    				</div> */}
                    
                    
                    {/* <div className="container"><h3  style={{marginTop: "60px", marginBottom: "30px", padding: "10px 20px"}}>4 ЭТАПА КОНТРОЛЯ КАЧЕСТВА, КОТОРЫЕ ВНЕДРЕНЫ В ПРОИЗВОДСТВО</h3></div> */}
                    {/* <div class="row" style={{padding: "40px 40px"}}>
                        
    					<div className="col-md-3 justify-content-center text-align-center">
                            <img className="coat" src={tkan}/>
                            <h4>Этап разбраковки</h4>
    						<p className="dostovka">Сырье поступает на фабрику и осуществляется визуальный осмотр на наличие дефектов</p>
    					</div>

    					<div class="col-md-3">
                           <img className="coat" src={fabric}/>
                            <h4>Этап проверки на усадку</h4>
    						<p className="dostovka">Сырье подвергается воздействию высоких и низких температур для проверки на усадку</p>
    					</div>

    					<div class="col-md-3">
                            <img className="coat" src={sewing}/>
                            <h4>Этап производства</h4>
    						<p className="dostovka">Внедрен бригадный метод пошива. Каждый оператор-швея отвечает за сборку определенной детали</p>
    					</div>

    					<div class="col-md-3">
                            <img className="coat" src={coat}/>
                            <h4>Контроль готовой продукции</h4>
    						<p className="dostovka">Каждое изделие проверяется технологом швейного производства на наличие дефектов и утверждается по ГОСТу</p>
    					</div>
    				</div> */}
                
                <div className="mb-7"></div>
                

                <br/>
                    <div className="row " >
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
                                <div className="icon-box text-center1">
                                    <Clocke/>
                                    
                                    <h4 style={{ marginLeft: "30px"}} className="city">Bishkek</h4>
                                </div>
                                
                            </div>

                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
                                <div className="icon-box text-center1">
                                    <Clock1/>
                                    <h4 style={{ marginLeft: "30px"}} className="city">Moscow</h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center">
                                <div className="icon-box text-center1">
                                    <Clock2/>
                                   
                                     <h4 style={{marginTop: "10px", marginLeft: "15px"}} className="city">Novosibirsk</h4>
                                </div>
                            </div>

                            <div sty className="col-lg-4 col-sm-6 d-flex justify-content-center">
                                <div className="icon-box text-center1">
                                    <Clock3/>
                                    <h4 style={{ marginLeft: "20px"}} className="city">Nur-Sultan</h4>
                                </div>
                                
                            </div>
                            <div className="col-lg-4 col-sm-6 d-flex justify-content-center" >
                                <div className="icon-box text-center1">
                                    <Clock2/>
                                   
                                     <h4 style={{marginTop: "10px", marginLeft: "40px"}} className="city">Samara</h4>
                                </div>
                            </div>

                            <div sty className="col-lg-4 col-sm-6 d-flex justify-content-center">
                                <div className="icon-box text-center1">
                                    <Clock3/>
                                    <h4 style={{ marginLeft: "30px"}} className="city">Tashkent</h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                <div className="container">

                    
                

                    <div style={{textAlign: "center",borderTop: "2px solid #ccc", borderBottom: "2px solid #ccc", padding: "30px", marginTop: " 20px"}}>
                    <p style={{fontSize: "18px", marginBottom: " 20px",    }}>Если у Вас остались дополнительные вопросы, пишите <span style={{fontWeight: "500"}}>simacompany@bk.ru</span> Или оставьте заявку на обратный звонок и мы вам перезвоним!
поместить на главную</p>
                        <div className="container-z" >
                            <h3 className="cont">Закажите обратный звонок</h3>
                            <h4 className="cont-h4">С Вами свяжется наш менеджер и подробно проконсультирует</h4>
                            <div className="row" style={{display: "flex", justifyContent: "center"}} >
                                <div className="col-sm-3">
                                    <input 
                                        className="input-z" 
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={e => setName(e.target.value)} 
                                        type="text"/>
                                </div>
                                <div className="col-sm-3">
                                    <input 
                                        className="input-z" 
                                        placeholder="Номер телефона"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)} 
                                        type="tel"/>
                                </div>
                                
                            </div>
                            <div onClick={sendName} class="btn-wrap">
		                		<a style={{fontSize: "18px"}} href="" class="btn btn-primary btn-round">Отправить</a>
		                	</div>
                        </div>
                        
                    </div> 
                     
                </div>
                    
                

            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
        
    )
}

export default Main;

