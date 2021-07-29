import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";
import Restangle30 from "../../assets/Rectangle30.png"
import Frame from "../../assets/Frame.png"
import Restangle32 from "../../assets/Rectangle31.png"
import Restangle33 from "../../assets/Rectangle32.png"
import Restangle34 from "../../assets/Rectangle33.png"
import Restangle35 from "../../assets/Rectangle34.png"
import Restangle332 from "../../assets/Rectangle332.png"
import axios from "axios"
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { SUBCATEGORY_ROUTE, ABOUT_ROUTE, DELIVERY_ROUTE, PURCHASES_ROUTE, CATALOG_ROUTE } from '../../utils/Const';




const  Main = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
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
   
    user.getImage().then(()=>{
        product.discountTodo1()
    })
    
    product.getDataNew()
    product.getSubcategory().then(()=>{
        product.getDataNewSeason(product?.subcategory[0]?.id)
    })
    
  }, [])
         
    
    return (
        <div className="page-wrapper">
            <main className="main">
                        {user.image.map((img, index) =>
                        <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>    
                            
                            <div className="container intro-content text-left ">
                                <h1 className="intro-title">{img.title}<br/>< strong style={{marginLeft: "-9px"}}>sale</strong></h1>

                                <Link to={CATALOG_ROUTE} className="btn">
                                    <span style={{fontSize: "20px"}}>Показать</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                            
                        </div>)}

 
                        <div className="container mt-6">
                        <div className="products mt-2 mb-4 ">
                            <div className="row justify-content-center">
                                    {console.log(product.discount)}
                                    {product.discount.slice(0,8).map((discout, index)=>
                                        <div key={index} className="col-6 col-md-4 col-lg-3">
                                            <div className="product product-7 text-center ">
                                                <Link to={{pathname: '/product/'+discout.id}} >
                                                    <figure className="product-media">
                                                        {discout.percent ? <div style={{textAlign: "center"}} className="product-label label-sale">{discout.percent} %</div> : ""}
                                                        <a href="">
                                                            <img src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`} alt="Product image" className="product-image"/>
                                                        </a>
                                                    </figure>
                                                </Link>
                                            <div className="product-body">
                                                <h3 className="product-title"><a href="">{discout.title}</a></h3>
                                                <div style={{color: "#000000"}} className="product-price">
                                                    {user.isAuth ? `${ discout.price} ₽` : ""}
                                                </div>

                                                
                                            </div>
                                            </div>
                                        </div>)}
                                        
                                    </div>
                                    
                                        <div class="btn-wrap d-flex justify-content-center">
                                            <Link to={CATALOG_ROUTE} className="btn  btn-shadow">
                                                <span style={{fontSize: "20px"}}>Показать</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    
                                </div>
                                
                        </div>

                    <div style={{boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)"}} className="trending mb-6">
                        <a href="">
                        
                            <img src={Restangle30} alt="Banner"/>
                        </a>
                        <div className="banner banner-big d-md-block">
                            <div className="banner-content text-center">
                                <h3 className="banner-title text-white">новая коллекция</h3>
                            </div>
                        </div>
                    </div>


                <div className="container ">

                    <div className="products mt-10 mb-4 ">
                        <div className="row justify-content-center">
                            {product.newProductSeason.slice(0,8).map((discout, index)=>
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <div className="product product-7 text-center  ">
                                    <Link to={{pathname: '/product/'+discout.id}} >
                                        <figure className="product-media ">
                                            <a href="">
                                                <img src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`} alt="Product image" className="product-image"/>
                                            </a>
                                        </figure>
                                   </Link>

                                    <div className="product-body">
                                        <h3 className="product-title"><a href="">{discout.title}</a></h3>
                                        <div style={{color: "#000000"}} className="product-price">
                                        {user.isAuth ? `${ discout.price} ₽` : ""}  
                                        </div>
                                        {/* {user.isAuth ? `${product.product.price} ₽`  : ""} */}
                                        
                                    </div>
                                </div>
                            </div>)}
                            
                        </div>
                        
                     </div>
                            
                            <div className="btn-wrap d-flex justify-content-center mb-8">
                                <Link to={SUBCATEGORY_ROUTE} className="btn">
		                		    <a href="" className="btn btn-outline-dark btn-rounded"><span style={{fontWeight: "normal", fontStyle: "normal", fontSize: "20px", lineHeight: "24px", color: "#3D3D3D"}}>Показать <i className="icon-long-arrow-right"></i></span></a>
                                    
                                </Link>
		                	</div>

                </div>
                
                <div className="trending mt-8 d-flex justify-content-center mb-6 ">
                    <img  src={Frame} alt="Banner"/>
                </div>
                

                    <div className="container mt-12 mb-10">
                         
                        <div className="row ">
                            <div  className="col-12 mb-10 col-xl-6 mt-2 mb-12">
                                <Link to={ABOUT_ROUTE}> 
                                    <div  className="position-relative d-flex justify-content-center align-items-center mt-8 mb-3 ">
                                        <img  className=" position-absolute " src={Restangle32} alt="Banner"/>
                                        <img  className="position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}}  className="position-absolute monserat" >Более 20 лет на рынке</h3>
                                        
                                    </div>
                                </Link>
                                
                            </div>
                            <div  className="col-12-mb-10 col-xl-6 mt-2 mb-12">
                                <Link to={DELIVERY_ROUTE}>
                                    <div className=" position-relative d-flex justify-content-center align-items-center mt-8 ">
                                        <img className=" position-absolute" src={Restangle33} alt="Banner"/>
                                        <img  className=" position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}} className="position-absolute monserat" >Удобная доставка</h3>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="row ">
                            <div  className="col-12 mb-10 col-xl-6 mt-2  mb-12">
                                <Link to={PURCHASES_ROUTE}>
                                    <div className="position-relative d-flex justify-content-center align-items-center mt-8">
                                        <img className=" position-absolute  " src={Restangle34} alt="Banner"/>
                                        <img  className=" position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}} className="position-absolute monserat">Контроль качества</h3>                                
                                    </div>
                                </Link>
                            </div>
                            <div  className="col-12 mb-10 col-xl-6 mt-2 mb-12 ">
                                <Link to={ABOUT_ROUTE}>
                                    <div className="position-relative d-flex justify-content-center align-items-center mt-8">
                                        <img className="position-absolute" src={Restangle35} alt="Banner"/>
                                        <img  className="position-absolute " src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}} className="position-absolute monserat" >Сертификация товара</h3>                                    
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                
                    
                

            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
        
    )
})

export default Main;

