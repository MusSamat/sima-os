import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE } from '../../utils/Const';
import axios from "axios";
import  "../../App.css";
import { FaStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
// import { BiGitRepoForked } from "react-icons/bi";
// import { BiGitRepoForked } from "react-icons/bi";
// import { BiGitRepoForked } from "react-icons/bi";
import {Modal, Button, NavLink} from "react-bootstrap";
import {PRODUCTCATEGORY_ROUTE} from "../../utils/Const"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
import Swiper from "react-id-swiper";
const colors ={
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

const Product = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = props.match.params.id
    const [count, setCount] = useState(5)
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(props)

    
    function updateValue(e) {
        console.log(e.target.value);
      }

        const notify = () => toast.success("Wow so easy!");
	    const notifyError = () => toast.error("Wow so easy!");


    const addWishlist = (e) => {
        const id = props.match.params.id
        const data = JSON.stringify({
            product: String(id),
        })  
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCount(count)
                user.getWishlistData()
                console.log(response)
                notify()
        })
        .catch(error =>{ 
            console.log(error)
            notifyError()  
    })
    e.preventDefault();
    }

    const addCart = (e) => {
        const id = props.match.params.id
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(count)]
            
            
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCount(count)
                user.getCartData()
                console.log(response)
                notify()
        })
        .catch(error =>{ 
            console.log(error)  
            notifyError()
    })
    e.preventDefault();
    }

    const stars = Array(5).fill(0);
    const [currValue, setCurrValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined)
    const [text, setText] = useState()
    const [leftImages, setLeftImages] = useState([])
    const [selectedImage, setSelectedImage] = useState('')
    const [imgTitle, setImgTitle] = useState('') 
    let categoryName = product.category.filter(i => i.id === product.product.category )

    const handleClick = (value) => {
        setCurrValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const sendRating = (event) => {
        const id = props.match.params.id
        const data = JSON.stringify({
            product: id,
            rating: currValue, 
            text: text
            
            
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/product-reviews`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCurrValue(0)
                setText("")
                console.log(response)
                notify()
        })
        .catch(error =>{ 
            console.log(error) 
            notifyError() 
    })
    event.preventDefault();
    console.log(event)
    }

    function handleRemove(id) {
        const newList = leftImages.filter((item) => item.id !== id);
     
        setLeftImages(newList);
        console.log(newList)
      }
    
    //   var mswiper=new Swiper("#mm",{
	// 	direction:"vertical",   //Vertical default horizontal (no vertical annotation required)
	// 	autoplay:2000,	  //Auto play
	// 	loop:true,	  //loop
	// 	speed:1000,	  //Display speed
	// 	pagination:".swiper-pagination",	//Paging device
	// 	prevButton:".swiper-button-prev",	
	// 	nextButton:".swiper-button-next"	
	// })
    useEffect(() => {
        const log = document.getElementById('qty');
         log?.addEventListener('change', updateValue);
         
         
        user.getUserData()
        product.getData(id).then(() => {
            setLeftImages(product?.imagesUser[0]?.images ?? [])
            setSelectedImage(product?.imagesUser[0]?.images[0] || '')
            setImgTitle(product?.imagesUser[0]?.title || '')
            console.log('get data')
            const scripts = [

                '/assets/js/jquery.min.js',
                '/assets/js/bootstrap.bundle.min.js',
                '/assets/js/jquery.hoverIntent.min.js',
                '/assets/js/jquery.waypoints.min.js',
                '/assets/js/superfish.min.js',

                '/assets/js/owl.carousel.min.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/jquery.elevateZoom.min.js',

                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/jquery.magnific-popup.min.js',
                '/assets/js/main.js',

            ]
            scripts.forEach(i => {
                const s = document.createElement('script')
                s.src = i
                document.body.appendChild(s)
            })
        })
        // product.addProduct(product.index)
        return () => {
            const elements = document.getElementsByClassName('zoomContainer')
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

      }, [])


      const params = {
        container: ".container",
        pagination: ".swiper-pagination",
        paginationClickable: true,
        direction: "vertical"
      };


    return (
        <div>
            
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div style={{marginTop: "100px"}} className="container d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><Link to={{pathname:'/productcategory/'}}>Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Артикул: {product.product.articul}</li>
                        </ol>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <BiGitRepoForked onClick={handleShow} style={{fontSize: "30px", cursor: "pointer"}}/>
                        </nav>
                        <Modal show={show} onHide={handleClose} centered={true} animation={true}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{textAlign: "center", fontSize: "30px", display: "flex"}}>
                                
                                <a style={{fontSize: "25px"}} href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a style={{fontSize: "25px"}} href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a style={{fontSize: "25px"}} href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a style={{fontSize: "25px"}} href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрывать
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">


                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-vertical">
                                        <div className="row">
                                            <figure className="product-main-image">
                                                <img id="product-zoom" src={process.env.REACT_APP_BASE_URL + selectedImage} data-zoom-image={process.env.REACT_APP_BASE_URL + selectedImage} alt="product image"/>
                                                <a href={process.env.REACT_APP_BASE_URL + selectedImage} id="btn-product-gallery" className="btn-product-gallery">
                                                    <i className="icon-arrows"></i>
                                                </a>
                                            </figure>

                                            <div id="product-zoom-gallery" className="product-image-gallery">

                                            
                                                {leftImages.map((img, index) =>
                                                        <a onClick={() =>  {
                                                            handleRemove(img.id)
                                                            setSelectedImage(img)}} className="product-gallery-item active" key={index} href="#" data-image={`${process.env.REACT_APP_BASE_URL}${img}`} data-zoom-image={`${process.env.REACT_APP_BASE_URL}${img}`}>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}${img}`} alt="product side"/>
                                                        </a>
                                                    )}
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        
                                        
                                        <h1 className="product-title">{product.product.title}</h1>
                                                    {console.log(product.category.filter(i => i.id === product.product.category ))}
                                        <div className="ratings-container justify-content-between">
                                            
                                            <div style={{ fontWeight:"400"}} className="product-cat">
                                                <span style={{ fontWeight:"450"}}>КАТЕГОРИЯ :</span>
                                                <a style={{ fontWeight:"450"}}>МАГАЗИН /</a>
                                                {categoryName.map((i, index) =>
                                                    <a style={{ fontWeight:"450"}}>{i.title} / </a>
                                                )}
                                                <a style={{ fontWeight:"450"}}>{product.product.title}</a>
                                            </div>
                                        </div>

                                        <div style={{color: "black", fontWeight:"450"}} className="product-price">
                                            {user.isAuth ? `${product.product.price} $`  : ""}
                                        </div>
                                        <label style={{color: "#9393a5", fontSize: "14px", fontWeight: "400", lineHeight: "20px", letterSpacing: "-.15px"}}>Цвет: <span style={{color: "#000"}}>{imgTitle}</span></label>
                                        <div className="details-filter-row details-row-size">
                                            

                                            <div className="product-nav product-nav-thumbs">
                                            {product.imagesUser.map((img, index) =>
                                                <a style={{height: "6rem", border: "none", marginRight: "7px", cursor: "pointer"}} 
                                                    onClick={() => {
                                                        handleRemove(img.id)
                                                    const d = [...img.images]
                                                        setLeftImages(d)
                                                        setSelectedImage(d[0])
                                                        setImgTitle([...img.title])
                                                    }} className="active">
                                                        <img key={index} src={`${process.env.REACT_APP_BASE_URL}${img.images[0]}`} alt="product desc"/>
                                                  
                                                    
                                                </a>
                                                  )}
                                                
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            
                                        </div>

                                        {user.isAuth ?<>
                                            <div className="details-filter-row details-row-size"> 
                                                <div >
                                                    <button className="kol" onClick={() => setCount(count - 5)}>-</button>
                                                    <span style={{marginLeft: "7px"}} className="kol-input" >{count}</span>
                                                    <button className="kol" onClick={() => setCount(count + 5)}>+</button>
                                                   
                                                </div>
                                            </div>
                                            
                                            <div className="product-details-action">
                                                <a style={{cursor: "pointer"}} onClick={addCart} className="btn-product btn-cart" ><span style={{color: "inherit"}}>В КОРЗИНУ</span></a>

                                                <div className="details-action-wrapper">
                                                    <a style={{fontSize: "30px"}} href="" onClick={addWishlist} className="btn-product btn-wishlist" title="Wishlist"></a>
                                                </div>
                                            </div>
                                        </> :
                                        <div className=" justify-content-center text-center">
                                            <h5>ЗАРЕГИСТРИРУЙТЕСЬ, ЧТОБЫ ПОСМОТРЕТЬ ЦЕНЫ</h5>
                                            <Link to={LOGIN_ROUTE}>
                                                <Button style={{fontSize: "20px", borderRadius: "30px", marginLeft: "30px", height: "40px", margin: "20px"}} variant="danger">Регистрация</Button>
                                            </Link>
                                        </div>
                                        }

                                        <div className="product-details-footer">
                                            

                                            

                                            
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="nav nav-pills" id="tabs-5" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="tab-17-tab" data-toggle="tab" href="#tab-17" role="tab" aria-controls="tab-17" aria-selected="true">Описание</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="tab-18-tab" data-toggle="tab" href="#tab-18" role="tab" aria-controls="tab-18" aria-selected="false">Детали</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="tab-19-tab" data-toggle="tab" href="#tab-19" role="tab" aria-controls="tab-19" aria-selected="false">Отзывы (0)</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="tab-content-5">
                                                    <div className="tab-pane fade show active" id="tab-17" role="tabpanel" aria-labelledby="tab-17-tab">
                                                        <p><strong>Размер: </strong> {product.product.size[0]}-{product.product.size[product.product.size.length -1]} </p>
                                                        <p ><strong>Ткань:</strong> {product.product.cloth}</p>
                                                        <p className="p"><strong>Описание:</strong> {product.product.description}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-18" role="tabpanel" aria-labelledby="tab-18-tab">
                                                        <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-19" role="tabpanel" aria-labelledby="tab-19-tab">
                                                        <strong>БУДЬТЕ ПЕРВЫМ, КТО ОСТАВИЛ ОТЗЫВ НА "{product.product.title}"</strong>
                                                        <hr></hr>
                                                        <div className="ratings-container justify-content-between">
                                                            <p>ВАШ ОТЗЫВ *</p>
                                                            <div>
                                                                {stars.map((_, index)=>{
                                                                    return(
                                                                        <FaStar
                                                                            key={index}
                                                                            size={18}
                                                                            style={{
                                                                                marginRight: 8,
                                                                                cursor: "pointer"
                                                                            }}
                                                                            color={(hoverValue || currValue) > index ? colors.orange : colors.grey}
                                                                            onClick={() => handleClick(index + 1)}
                                                                            onMouseOver={() => handleMouseOver(index+1)}
                                                                            onMouseLeave={ handleMouseLeave}
                                                                            onChange={e => setCurrValue(e.target.value)}
                                                                            value={currValue}
                                                                        />
                                                                    )
                                                                })}
                                                            </div>
                                                            {/* <div className="ratings" style={{width: "80%;", cursor:"pointer"}}>
                                                                
                                                            </div> */}
                                                        </div>
                                                        <textarea 
                                                            className="form-control"
                                                            value={text}
                                                            onChange={e => setText(e.target.value)}
                                                            >

                                                        </textarea>
                                                        <div className="d-grid gap-2">
                                                            <button className="button-otzyv" onClick={(e)=>sendRating(e)} type="button">Отправить</button>
                                                            
                                                        </div>

                                                        <ToastContainer />
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            
                                            
                                            
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    </div>






                
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 

            
        </div>
    )
})

export default  Product;
