import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";
import Restangle from "../../assets/Rectangle.png"
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
import { SUBCATEGORY_ROUTE, ABOUT_ROUTE, DELIVERY_ROUTE, PURCHASES_ROUTE } from '../../utils/Const';




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
   
    user.getImage()
    product.discountTodo()
    product.getDataNew()
    product.getSubcategory().then(()=>{
        product.getDataNewSeason(product?.subcategory[0]?.id)
    })
    
  }, [])
         
    
    return (
        <div className="page-wrapper">
            <main className="main">
                        <div className="intro-slide" style={{backgroundImage: `url(${Restangle})`}}>
                            
                            <div className="container intro-content text-left ">
                                <h1 className="intro-title">Summer<br/><strong>sale</strong></h1>

                                <Link to={SUBCATEGORY_ROUTE} className="btn">
                                    <span>Показать</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                            
                        </div>

                       

                    <div class="container mt-4">
                            <ul class="nav nav-pills nav-big nav-border-anim justify-content-center mb-2 mb-md-3" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Новые</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Скидки</a>
                                </li>
                                
                            </ul>

                        <div class="product-details-tab">
                            
                        
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                <div class="products mb-3">
                                    <div class="row justify-content-center">
                                    {product.newProduct.slice(0,4).map((discout, index)=>
                                    <div key={index} class="col-6 col-md-4 col-lg-3">
                                        <div class="product product-7 text-center ">
                                            <Link to={{pathname: '/product/'+discout.id}} >
                                                <figure class="product-media">
                                                    <a href="">
                                                        <img src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`} alt="Product image" class="product-image"/>
                                                    </a>
                                                </figure>
                                            </Link>
                                            <div class="product-body">
                                                <h3 class="product-title">{discout.title}</h3>
                                                <div class="product-price">
                                                    {discout.price  }
                                                </div>

                                                
                                            </div>
                                            </div>
                                        </div>)}
                                    
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div class="product-desc-content">
                                <div class="products mb-3">
                                    <div class="row justify-content-center">
                                    {product.discount.slice(0,4).map((discout, index)=>
                                    <div key={index} class="col-6 col-md-4 col-lg-3">
                                        <div class="product product-7 text-center ">
                                            <Link to={{pathname: '/product/'+discout.id}} >
                                                <figure class="product-media">
                                                    {discout.percent ? <div style={{textAlign: "center"}} class="product-label label-sale">{discout.percent} %</div> : ""}
                                                    <a href="">
                                                        <img src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`} alt="Product image" class="product-image"/>
                                                    </a>
                                                </figure>
                                            </Link>
                                            <div class="product-body">
                                                <h3 class="product-title">{discout.title}</h3>
                                                <div class="product-price">
                                                    {discout.price}
                                                </div>

                                                
                                            </div>
                                            </div>
                                        </div>)}
                                        </div>
                                        </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                    <div class="trending">
                        <a href="">
                        
                            <img src={Restangle30} alt="Banner"/>
                        </a>
                        <div class="banner banner-big d-md-block">
                            <div class="banner-content text-center">
                                <h3 class="banner-title text-white">новая коллекция</h3>
                            </div>
                        </div>
                    </div>


                <div className="container">

                    <div class="products mt-4">
                        <div class="row justify-content-center">
                            {product.newProductSeason.slice(0,8).map((discout, index)=>
                            <div key={index} class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center  ">
                                    <Link to={{pathname: '/product/'+discout.id}} >
                                        <figure class="product-media ">
                                            <a href="">
                                                <img src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`} alt="Product image" class="product-image"/>
                                            </a>
                                        </figure>
                                   </Link>

                                    <div class="product-body">
                                        <h3 class="product-title">{discout.title}</h3>
                                        <div class="product-price">
                                        {discout.price}  
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>)}
                        </div>
                     </div>

                </div>
                
                <div className="trending mt-3 d-flex justify-content-center  ">
                    <img  src={Frame} alt="Banner"/>
                </div>
                

                    <div className="container mt-8 ">
                         
                        <div class="row">
                            <div  class="col-12 mb-10 col-xl-6 mt-2 mb-12">
                                <Link to={ABOUT_ROUTE}> 
                                    <div  className="position-relative d-flex justify-content-center align-items-center mt-8 mb-3 ">
                                        <img  class=" position-absolute " src={Restangle32} alt="Banner"/>
                                        <img  class="position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}}  className="position-absolute monserat" >Более 20 лет на рынке</h3>
                                        
                                    </div>
                                </Link>
                                
                            </div>
                            <div  class="col-12-mb-10 col-xl-6 mt-2 mb-12">
                                <Link to={DELIVERY_ROUTE}>
                                    <div className=" position-relative d-flex justify-content-center align-items-center mt-8 ">
                                        <img class=" position-absolute" src={Restangle33} alt="Banner"/>
                                        <img  class=" position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}} className="position-absolute monserat" >Удобная доставка</h3>
                                    </div>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="row ">
                            <div  class="col-12 mb-10 col-xl-6 mt-2  mb-12">
                                <Link to={PURCHASES_ROUTE}>
                                    <div className="position-relative d-flex justify-content-center align-items-center mt-8">
                                        <img class=" position-absolute  " src={Restangle34} alt="Banner"/>
                                        <img  class=" position-absolute" src={Restangle332} alt="Banner"/>
                                        <h3 style={{color: "#fff"}} className="position-absolute monserat">Контроль качество</h3>                                
                                    </div>
                                </Link>
                            </div>
                            <div  class="col-12 mb-10 col-xl-6 mt-2 mb-12 ">
                                <Link to={ABOUT_ROUTE}>
                                    <div className="position-relative d-flex justify-content-center align-items-center mt-8">
                                        <img class="position-absolute" src={Restangle35} alt="Banner"/>
                                        <img  class="position-absolute " src={Restangle332} alt="Banner"/>
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

