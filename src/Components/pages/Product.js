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
import mobile_menu from '../../Http/mobile_menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Carousel from 'react-elastic-carousel';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];

const colors ={
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

// Index.getInitialProps = ({ req }) => {
//     let userAgent;
//     if (req) {
//       userAgent = req.headers["user-agent"];
//     } else {
//       userAgent = navigator.userAgent;
//     }
//     const parser = new UAParser();
//     parser.setUA(userAgent);
//     const result = parser.getResult();
//     const deviceType = (result.device && result.device.type) || "desktop";
//     return { deviceType };
//   };

const Product = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = props.match.params.id
    const [count, setCount] = useState(5)
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(false);
    const [showRaz, setShowRaz] = useState(false);
    const [carusel, setCarusel] = useState([
        {id: 1, title: 'item #1'},
        {id: 2, title: 'item #2'},
        {id: 3, title: 'item #3'},
        {id: 4, title: 'item #4'},
        {id: 5, title: 'item #5'}])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseRaz = () => setShowRaz(false);
    const handleShowRaz = () => setShowRaz(true);

    
    
    
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
                product.getDataFavorite(id)
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
                product.getDataFavorite(id)
                product.getData(id)
                setCount(count)
                user.getWishlistData()
                product.getData(id)
        })
        .catch(error =>{ 
            console.log(error) 
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
    const [activeIndex, setActiveIndex] = useState(0);

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
    }

    function handleRemove(id) {
        const newList = leftImages.filter((item) => item.id !== id);
     
        setLeftImages(newList);
      }


      const handleClickCaruosel = (direction) => {
        setActiveIndex((prevIndex) => {
          if (direction === "next") {
            if (prevIndex + 1 > leftImages.length - 1) {
              return 0;
            }
            return prevIndex + 1;
          }
    
          if (prevIndex - 1 < 0) {
            return leftImages.length - 1;
          }
    
          return prevIndex - 1;
        });
      };

      var getValue = function getValue(object, propertyName) {
        return typeof object === 'undefined' ? undefined : object[propertyName]
        }
        var getNestedValueDeclaratively = function getNestedValueDeclaratively(object,
         propertyName) {
             console.log(propertyName)
        return propertyName.split('.').reduce(getValue, object)
        }
        console.log(getNestedValueDeclaratively({bar: 'baz'}, 'bar') === 'baz')
        console.log(getNestedValueDeclaratively({bar: { baz: 1 }}, 'bar.baz')=== 1)
    
    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        const log = document.getElementById('qty');
         log?.addEventListener('change', updateValue);
         user.getWishlistData()
         product.getDataFavorite(id)
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
                    <div style={{marginTop: "20px"}} className="container d-flex align-items-center">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={HOME_ROUTE} className="item" style={{marginTop: "-3px", marginRight: "-5px"}}  >ГЛАВНАЯ</Link></li>
                            
                            <li className="breadcrumb-item " aria-current="page"> {product.product.title}</li>
                            <li className="breadcrumb-item " aria-current="page">Артикул: {product.product.articul}</li>
                        </ul>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <BiGitRepoForked onClick={handleShow} style={{fontSize: "30px", cursor: "pointer"}}/>
                        </nav>
                        <Modal show={show} onHide={handleClose} centered={true} animation={true}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body centered={true} style={{textAlign: "center", fontSize: "30px", display: "flex"}}><Link to="https://ok.ru/profile/584170543033"></Link>
                                
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
                                            {/* {console.log(leftImages)}                                             */}
                                                {leftImages.map((img, index) =>

                                                        <a onClick={() =>  { 
                                                            
                                                            setSelectedImage(`${img}, ${console.log(img)}`)}} className="product-gallery-item active" key={index} href="#" data-image={`${process.env.REACT_APP_BASE_URL}${img}`} 
                                                            data-zoom-image={`${process.env.REACT_APP_BASE_URL}${img}`  }>
                                                            <img src={`${process.env.REACT_APP_BASE_URL}${img}`} alt="product side"/>
                                                          {/* {console.log(img)} */}
                                                        </a>
                                                    )}
                                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        
                                        
                                        <h1 className="product-title">{product.product.title}</h1>
                                        <div style={{color: "black", fontWeight:"450"}} className="product-price">
                                            {user.isAuth ? `${product.product.price} ₽`  : ""}
                                        </div>
                                        <label style={{color: "#9393a5", fontSize: "14px", fontWeight: "400", lineHeight: "20px", letterSpacing: "-.15px"}}>Цвет: <span style={{color: "#000"}}>{imgTitle}</span></label>
                                        <div className="details-filter-row details-row-size">
                                        
                                        
                                        {/* <div class="product-gallery-carousel owl-carousel owl-full owl-nav-dark">
                                            {product.imagesUser.map((img, index) =>
                                            <figure className="product-gallery-image">
                                                <a onClick={() => {
                                                            
                                                            const d = [...img.images]
                                                                setLeftImages(d)
                                                                setSelectedImage(d[0])
                                                                setImgTitle([...img.title])
                                                            }} className="active">
                                                    <img style={{width: "100px", height: "100px", marginLeft: "0px"}} key={index} src={`${process.env.REACT_APP_BASE_URL}${img.images[0]}`}  alt="product desc"/>
                                                </a>
                                            </figure>
                                            )}

                                            
                                        </div> */}
                                        
                                   
                                        {/* <Carousel
                                            ssr
                                            partialVisbile
                                            // deviceType={deviceType}
                                            itemClass="image-item"
                                            responsive={responsive}
                                            >
                                            {images.slice(0, 5).map(image => { 
                                                return (
                                                <Image
                                                    draggable={false}
                                                    style={{ width: "100%", height: "100%" }}
                                                    src={image}
                                                />
                                                );
                                            })}
                                            </Carousel> */}
                                        

                                            <div className="product-nav product-nav-thumbs">
                                            
                                                {product.imagesUser.map((img, index) =>
                                                    <div key={index} className="product-gallery-image">
                                                        <a   
                                                            onClick={() => {
                                                                
                                                            const d = [...img.images]
                                                                setLeftImages(d)
                                                                setSelectedImage(d[0])
                                                                setImgTitle([...img.title])
                                                            }} className="active mt-3 mb-3">
                                                                <img style={{width: "100px", height: "100px", marginLeft: "10px", cursor: "pointer"}} src={`${process.env.REACT_APP_BASE_URL}${img.images[0]}`} alt="product desc"/>
                                                        
                                                            
                                                        </a>
                                                    </div       >
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
                                                {product.favorite.is_favorite ? 
                                                        <FcLike onClick={deleteWish} style={{fontSize: "30px", cursor: "pointer"}}/>
                                                    : <a style={{fontSize: "30px"}} href="" onClick={addWishlist}  className="btn-product btn-wishlist" title="Wishlist"></a>}
                                                </div>
                                            </div>
                                        </> :
                                        <div className=" justify-content-center text-center mt-3">
                                            <h5 className="seny">ЗАРЕГИСТРИРУЙТЕСЬ, ЧТОБЫ ПОСМОТРЕТЬ ЦЕНЫ</h5>
                                            <Link to={LOGIN_ROUTE}>
                                                <a href="" className="btn btn-primary btn-rounded mb-4" >Регистрация</a>
                                                {/* <Button style={{fontSize: "20px", borderRadius: "30px", marginLeft: "30px", height: "40px", margin: "20px"}} variant="danger">Регистрация</Button> */}
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
                                                        <a className="nav-link" id="tab-19-tab" data-toggle="tab" href="#tab-19" role="tab" aria-controls="tab-19" aria-selected="false">Отзывы ({product.reviews.length})</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="tab-content-5">
                                                    <div className="tab-pane fade show active" id="tab-17" role="tabpanel" aria-labelledby="tab-17-tab">
                                                        <p className="description"><strong>Размер: </strong> {product.product.size[0]}-{product.product.size[product.product.size.length -1]} </p>
                                                        <p  className="description"><strong>Ткань:</strong> {product.product.cloth}</p>
                                                        <p className="description"><strong>Описание:</strong> {product.product.description}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-18" role="tabpanel" aria-labelledby="tab-18-tab">
                                                        {/* <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p> */}
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-19" role="tabpanel" aria-labelledby="tab-19-tab">
                                                        <h5>БУДЬТЕ ПЕРВЫМ, КТО ОСТАВИЛ ОТЗЫВ НА "{product.product.title}"</h5>
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
                                                                            {/* {console.log(r.rating)} */}
                                                                            {  
                                                                            stars.map((_, index)=>{
                                                                                return(
                                                                                    <FaStar
                                                                                        key={index}
                                                                                        size={13}
                                                                                        style={{
                                                                                            marginRight: 3,
                                                                                        }}
                                                                                        color={index <= r.rating  ? colors.orange : colors.grey}
                                                                                    />
                                                                                )
                                                                            }) }
                                                                        </div>
                                                                        <span class="review-date"></span>
                                                                    </div>
                                                                    <div class="col">
                                                                        <h4></h4>

                                                                        <div class="review-content">
                                                                            <p style={{fontSize: "16px"}}>{r.text}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>)}
                                                        </div>
                                                        <div className="ratings-container justify-content-between mt-4">
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
                                                            {/* <div className="product-details-action">
                                                                <a style={{cursor: "pointer"}} onClick={addCart} className="btn-product" ><span style={{color: "inherit"}}>Отправить</span></a>
                                                            </div> */}
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
