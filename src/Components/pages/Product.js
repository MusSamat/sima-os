import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE, HOME_ROUTE } from '../../utils/Const';
import axios from "axios";
import  "../../App.css";
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import razmer from "../../assets/razmer.png"
import {Modal, Button} from "react-bootstrap";
import {PRODUCTCATEGORY_ROUTE} from "../../utils/Const"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
    const [showRaz, setShowRaz] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseRaz = () => setShowRaz(false);
    const handleShowRaz = () => setShowRaz(true);
    
    console.log(props)
    
    
    function updateValue(e) {
        console.log(e.target.value);
      }

        const notify = () => toast.success("Wow so easy!");
	    const notifyError = () => toast.error("Wow so easy!");


        const deleteWish = () => {
        
       
            const data = JSON.stringify({
                 product: id,  
            })
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`, data, {
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':'Token ' + user.token?.token
                },
            })
            .then(res => {
                user.getWishlistData()
                product.getData(id)
            })
            .catch((e)=>{
                console.error(e)
            }) 
        }



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
                product.getData(id)
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
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/product-reviews/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                product.getData(id)
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
    
    
    useEffect(() => {
        const log = document.getElementById('qty');
         log?.addEventListener('change', updateValue);
         
         user.getReviews(id)
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
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={HOME_ROUTE} style={{marginTop: "-3px", marginRight: "-5px"}}  >ГЛАВНАЯ</Link></li>
                            <li className="breadcrumb-item">{categoryName.map((i, index) =>
                                                   <Link to={{pathname:'/productcategory/' + i.id}}> <a style={{ fontWeight:"450"}}>{i.title}</a></Link>
                                                )}</li>
                                                {console.log(categoryName)}
                            <li className="breadcrumb-item active" aria-current="page"> {product.product.title}</li>
                            <li className="breadcrumb-item active" aria-current="page">Артикул: {product.product.articul}</li>
                        </ul>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <BiGitRepoForked onClick={handleShow} style={{fontSize: "30px", cursor: "pointer"}}/>
                        </nav>
                        <Modal show={show} onHide={handleClose} centered={true} animation={true}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body style={{textAlign: "center", fontSize: "30px", display: "flex"}}><Link to="https://ok.ru/profile/584170543033"></Link>
                                
                                <a style={{fontSize: "25px"}} href="https://www.facebook.com/profile.php?id=100069533462465" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a style={{fontSize: "25px"}} href="https://twitter.com/sima_company" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a style={{fontSize: "25px"}} href="https://www.instagram.com/simacompany_kg/" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                               <a style={{fontSize: "25px"}} href="https://ok.ru/profile/584170543033"  className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                                
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
                                        {/* <div className="ratings-container justify-content-between">
                                            
                                            <div style={{ fontWeight:"400"}} className="product-cat">
                                                <span style={{ fontWeight:"450"}}>КАТЕГОРИЯ :</span>
                                                <a style={{ fontWeight:"450"}}>МАГАЗИН /</a>
                                                {categoryName.map((i, index) =>
                                                    <a style={{ fontWeight:"450"}}>{i.title} / </a>
                                                )}
                                                <a style={{ fontWeight:"450"}}>{product.product.title}</a>
                                            </div>
                                        </div> */}

                                        <div style={{color: "black", fontWeight:"450"}} className="product-price">
                                            {user.isAuth ? `${product.product.price} ₽`  : ""}
                                        </div>
                                        <label style={{color: "#9393a5", fontSize: "14px", fontWeight: "400", lineHeight: "20px", letterSpacing: "-.15px"}}>Цвет: <span style={{color: "#000"}}>{imgTitle}</span></label>
                                        <div className="details-filter-row details-row-size">
                                            

                                            <div className="product-nav product-nav-thumbs">
                                            {product.imagesUser.map((img, index) =>
                                                <a style={{height: "6rem", border: "none", marginRight: "7px", cursor: "pointer"}} 
                                                    onClick={() => {
                                                        
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
                                            <p style={{fontSize: "16px"}}>Размер: <span style={{cursor: "pointer", color: "rgb(71, 53, 150)"}} onClick={handleShowRaz}> Таблица размеров</span> </p>
                                            <Modal show={showRaz} onHide={handleCloseRaz} centered={true} animation={true}>
                                                <Modal.Header closeButton>
                                                </Modal.Header>
                                                <img src={razmer}/>
                                            </Modal>
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
                                                {product.product.is_favorite ? 
                                                        <FcLike onClick={deleteWish} style={{fontSize: "30px", cursor: "pointer"}}/>
                                                    : <a style={{fontSize: "30px"}} href="" onClick={addWishlist}  className="btn-product btn-wishlist" title="Wishlist"></a>}
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
                                                        <a className="nav-link" id="tab-19-tab" data-toggle="tab" href="#tab-19" role="tab" aria-controls="tab-19" aria-selected="false">Отзывы ({product.reviews.length})</a>
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
                                                        <div class="reviews">
                                                            {product.reviews.map((r, index) =>
                                                            <div style={{marginTop: "10px"}} key={index} class="review">
                                                                <div class="row no-gutters">
                                                                    <div class="col-auto">
                                                                        <h4><a >{r.author}</a></h4>
                                                                        <div class="ratings-container">
                                                                            {/* <div class="ratings">
                                                                                <div class="ratings-val"></div>
                                                                            </div> */}
                                                                        </div>
                                                                        <span class="review-date"></span>
                                                                    </div>
                                                                    <div class="col">
                                                                        <h4></h4>

                                                                        <div class="review-content">
                                                                            <p style={{fontSize: "16px"}}>{r.text}</p>
                                                                        </div>

                                                                        <div class="review-action">
                                                                            <a href="#"><i class="icon-thumbs-up"></i>Helpful (2)</a>
                                                                            <a href="#"><i class="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                        </div>
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
                                                    
                                                    
                                                        {/* <div class="reviews">
                                                            <h3>ОТЗЫВ (2)</h3>
                                                            {user.reviews.map((r, index) =>
                                                            <div key={index} class="review">
                                                                <div class="row no-gutters">
                                                                    <div class="col-auto">
                                                                        <h4><a >{r.author}</a></h4>
                                                                        <div class="ratings-container">
                                                                            <div class="ratings">
                                                                                <div class="ratings-val"></div>
                                                                            </div>
                                                                        </div>
                                                                        <span class="review-date"></span>
                                                                    </div>
                                                                    <div class="col">
                                                                        <h4></h4>

                                                                        <div class="review-content">
                                                                            <p>{r.text}</p>
                                                                        </div>

                                                                        <div class="review-action">
                                                                            <a href="#"><i class="icon-thumbs-up"></i>Helpful (2)</a>
                                                                            <a href="#"><i class="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                        </div> */}
                                                    



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
