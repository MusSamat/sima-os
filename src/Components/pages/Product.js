import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../index';
import {LOGIN_ROUTE, HOME_ROUTE, CATALOG_ROUTE} from '../../utils/Const';
import axios from "axios";
import "../../App.css";
import {FaStar} from "react-icons/fa";
import {RiShareLine} from "react-icons/ri";
import {FcLike} from "react-icons/fc";
import {FaOdnoklassnikiSquare} from "react-icons/fa";
import vk from "../../assets/vk.png"
import {Modal, Button, Container, Row, Col} from "react-bootstrap";
import mobile_menu from '../../Http/mobile_menu';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}


const Product = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = props.match.params.id
    const [count, setCount] = useState(product.size.length)
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(false);
    const [showRaz, setShowRaz] = useState(false);
    const [localName, setLocalName] = useState("")
    const [bottons, setBottons] = useState(false)

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
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            },
        })
            .then(res => {
                user.getWishlistData()
                product.getData(id, user.isAuth)
            })
            .catch((e) => {
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
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                product.getData(id, user.isAuth)
                setCount(count)
                user.getWishlistData()
            })
            .catch(error => {
                console.log(error)
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
        setBottons(true)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const addCart = (e) => {
        const id = props.match.params.id
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(count)],
            color: [String(imgTitle)]


        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                setCount(count)
                user.getCartData()
            })
            .catch(error => {
                console.log(error)
                notifyError()
            })
        e.preventDefault();
    }



    const addCardLocal = (e, proId, price, title) => {
        let data = JSON.parse(localStorage.getItem('order'))
        let productId = product.productOrder.map((i) => i.product)
        if (data === null) {
            data = []
        }
        data.push({id: proId, quantity: count, color: imgTitle, title: title, price: price})
        let found = -1
        productId.map(item => {
            if (item === proId) {
                found = item
            }
        })
        if (found === -1) {
            localStorage.setItem('order', JSON.stringify(data));
            product.productOrder.push({
                product: proId,
                quantity: count,
                price: price,
                color: imgTitle,
                title: title
            })
        } else {
            toast.warning("Этот товар есть в корзине")
            found = -1
        }
        e.preventDefault();

    }

    const sendRating = (event) => {
        const id = props.match.params.id
        const data = JSON.stringify({
            product: id,
            rating: currValue,
            text: text


        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/product-reviews/`, data,user.token?.token? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                product.getData(id)
                setCurrValue(0)
                setText("")
                setBottons(false)
            })
            .catch(error => {
                console.log(error)
                notifyError()
            })
        event.preventDefault();
    }

    function handleRemove(id) {
        const newList = leftImages.filter((item) => item.id !== id);

        setLeftImages(newList);
    }

    const category = JSON.parse(localStorage.getItem('category'))
    const viewProduct = JSON.parse(localStorage.getItem('viewProduct'))

    const imagezoom = {width: 400, height: 250, zoomWidth: 500, img: selectedImage};

    useEffect(() => {
        console.log(user.isAuth)
        console.log(user.token?.token)
        window.scrollTo(0, 0)
        mobile_menu()
        const log = document.getElementById('qty');
        log?.addEventListener('change', updateValue);
        user.getWishlistData()
        user.getReviews(id)
        user.getUserData()
        product.getData(id, user.isAuth).then(() => {
            setLeftImages(product?.imagesUser[0]?.images ?? [])
            setSelectedImage(product?.imagesUser[0]?.images[0] || '')
            setImgTitle(product?.imagesUser[0]?.title || '')
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
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

    }, [])


    return (
        <div class="page-wrapper">

            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0 mt-3   ">
                    <div className="container d-flex align-items-center ">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={`${CATALOG_ROUTE}?products=products`} className="item" style={{
                                marginTop: "-3px",
                                color: "#000000"
                            }}>Каталог</Link></li>

                                    <>
                                    {category ? <li className="breadcrumb-item "
                                            aria-current="page"><Link style={{color: "#000000"}}
                                                                      to={`${CATALOG_ROUTE}?products=${props.location.title ? props.location.title : props.location.produs}`}> {category}</Link>
                                        </li> : ""}
                                    {viewProduct ? <li className="breadcrumb-item "
                                        aria-current="page"><Link style={{color: "#000000"}}
                                                                  to={`${CATALOG_ROUTE}?products=${props.location.title ? props.location.title : props.location.produs}`}> {viewProduct}</Link>
                                        </li> : ""}
                                    </>
                            <li className="breadcrumb-item " style={{color: "#000000"}}
                                aria-current="page"> {product.product.title}</li>
                        </ul>

                        <nav
                             className="product-pager ml-auto" aria-label="Product">
                            {/*<RiShareLine style={{color: "#000000", marginLeft: "2px", fontSize: "30px", cursor: "pointer"}} onClick={handleShow}*/}
                            {/*             />*/}

                        </nav>
                        <div style={{borderTop: "none"}} className="product-details-footer d-flex">
                            <div className="social-icons social-icons-sm">
                                {/*<span className="social-label">Share:</span>*/}
                                <a style={{fontSize: "20px"}}
                                   href="https://www.facebook.com/profile.php?id=100069533462465"
                                   className="social-icon social-facebook" title="Facebook" target="_blank"><i
                                    className="icon-facebook-f"></i></a>
                                <a style={{fontSize: "20px"}} href="https://twitter.com/sima_company"
                                   className="social-icon social-twitter" title="Twitter" target="_blank"><i
                                    className="icon-twitter"></i></a>
                                <a style={{fontSize: "20px"}} href="https://www.instagram.com/simacompany_kg/"
                                   className="social-icon social-instagram" title="Instagram" target="_blank"><i
                                    className="icon-instagram"></i></a>
                                <a style={{fontSize: "20px"}} href="https://ok.ru/profile/584170543033"
                                   className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                                <a href="https://vk.com/simastyle" className="social-icon"><img
                                    style={{width: "20px"}} src={vk}/></a>
                            </div>

                        </div>
                        <Modal show={show} onHide={handleClose} centered={true} animation={true}>
                            <Modal.Header closeButton>
                                <h3 className="s-title d-flex justify-content-center">Поделиться</h3>
                            </Modal.Header>
                            <Modal.Body centered={true}>

                                <div className="d-flex justify-content-center">
                                    <a style={{fontSize: "25px"}}
                                       href="https://www.facebook.com/profile.php?id=100069533462465"
                                       className="social-icon social-facebook" title="Facebook" target="_blank"><i
                                        className="icon-facebook-f"></i></a>
                                    <a style={{fontSize: "25px"}} href="https://twitter.com/sima_company"
                                       className="social-icon social-twitter" title="Twitter" target="_blank"><i
                                        className="icon-twitter"></i></a>
                                    <a style={{fontSize: "25px"}} href="https://www.instagram.com/simacompany_kg/"
                                       className="social-icon social-instagram" title="Instagram" target="_blank"><i
                                        className="icon-instagram"></i></a>
                                    <a style={{fontSize: "25px"}} href="https://ok.ru/profile/584170543033"
                                       className="social-icon"> <FaOdnoklassnikiSquare style={{color: "#ee8208"}}/></a>
                                    <a href="https://vk.com/simastyle" className="social-icon"><img
                                        style={{width: "25px"}} src={vk}/></a>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Закрывать
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </nav>
                <div className="container">


                    <div className="product-details-top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-gallery product-gallery-vertical">
                                    <div className="row">
                                        <figure className="product-main-image">
                                            <img
                                                // id="product-zoom"
                                                src={process.env.REACT_APP_BASE_URL + selectedImage}
                                                data-zoom-image={process.env.REACT_APP_BASE_URL + selectedImage}
                                                 alt="product image"/>
                                        </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {leftImages.map((img, index) =>

                                                <a style={{cursor: "pointer"}} onMouseOver={() => setSelectedImage(img)} onClick={() => {

                                                    setSelectedImage(`${img}`)
                                                }} className="product-gallery-item active" key={index}
                                                   data-image={process.env.REACT_APP_BASE_URL + img}
                                                   data-zoom-image={process.env.REACT_APP_BASE_URL + img}>
                                                    <img src={process.env.REACT_APP_BASE_URL + img }
                                                         alt="product side"/>
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="product-details">
                                    <h1 style={{color: "#000000"}}
                                        className="product-title">{product.product.title}</h1>
                                    <p>Артикул: {product.product.articul}</p>
                                    {product.product.percent ? <div class="product-price"
                                                         style={{color: "rgb(238, 162, 135)"}}>
                                            <span className="new-price">{product.product.discount_price} ₽</span>
                                            <span className="old-price">{`${product.product.price} ₽`}</span>




                                        </div> :
                                        <div className="product-price">{`${product.product.price} ₽`}</div>}
                                    <label style={{
                                        color: "#9393a5",
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "20px",
                                        letterSpacing: "-.15px"
                                    }}>Цвет: <span style={{color: "#000"}}>{imgTitle}</span></label>
                                    <div className="details-filter-row details-row-size">

                                        {product.imagesUser.map((img, index) =>
                                            <div key={index} class="testimonial testimonial-icon text-center ">
                                                <a
                                                    onClick={() => {

                                                        const d = [...img.images]
                                                        setLeftImages(d)
                                                        setSelectedImage(d[0])
                                                        setImgTitle([img.title])
                                                    }} className="active mt-3 mb-3">
                                                    <img style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        marginLeft: "10px",
                                                        cursor: "pointer"
                                                    }} src={`${process.env.REACT_APP_BASE_URL}${img.images[0]}`}
                                                         alt="product desc"/>


                                                </a>
                                            </div>)}

                                    </div>

                                    <div className="details-filter-row details-row-size">
                                        <p style={{fontSize: "16px", color: "#000000"}}>Размер: <span
                                            style={{cursor: "pointer", color: "#c96"}} onClick={handleShowRaz}> Таблица размеров</span>
                                        </p>
                                        <Modal  show={showRaz} onHide={handleCloseRaz}  centered={true} animation={true} size="lg"
                                               aria-labelledby="contained-modal-title-vcenter"
                                               >

                                            <Modal.Header closeButton>
                                                <h3>Таблица размеров</h3>
                                            </Modal.Header>


                                            <table style={{margin: "20px", }}>
                                                <tr style={{ backgroundColor: "#f6f6f6", padding: "10px", margin: "10px"}}>
                                                    <th>Российский размер</th>
                                                    <th>Размер производителя</th>
                                                    <th>Рост, см</th>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>110-116</td>
                                                    <td>110</td>
                                                    <td>110-116</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>116-122</td>
                                                    <td>116</td>
                                                    <td>116-122</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>122-128</td>
                                                    <td>122</td>
                                                    <td>122-128</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>128-134</td>
                                                    <td>128</td>
                                                    <td>128-134</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>134-140</td>
                                                    <td>134</td>
                                                    <td>134-140</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>140-146</td>
                                                    <td>140</td>
                                                    <td>140-146</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>146-152</td>
                                                    <td>146</td>
                                                    <td>146-152</td>
                                                </tr>
                                                <tr className="table-tr">
                                                    <td>152-158</td>
                                                    <td>152</td>
                                                    <td>152-158</td>
                                                </tr>
                                            </table>

                                        </Modal>
                                    </div>

                                    <div className="d-flex">
                                        {product.product.size.map(size => (
                                            <div key={size} className="size ">{size}</div>
                                        ))}
                                    </div>
                                    <>
                                        <div className="details-filter-row details-row-size mt-1">
                                            <div className="count ">
                                                <button disabled={(isNaN(count) || count - product.product.size.length <= 0)}
                                                        style={{
                                                            width: "30px",
                                                            cursor: "pointer",
                                                            fontSize: "20px",
                                                            marginLeft: "7px",
                                                            backgroundColor: "white",
                                                            border: "none"
                                                        }}
                                                        onClick={() => setCount(count - product.product.size.length)}>-
                                                </button>
                                                <span className="s-title"  style={{
                                                    width: "30px",
                                                    padding: "2px",
                                                    fontSize: "18px",
                                                }}>{count}</span>
                                                <a style={{
                                                    marginTop: "4px",
                                                    marginLeft: "7px",
                                                    width: "30px",
                                                    cursor: "pointer",
                                                    fontSize: "20px",
                                                    color: "#000000"
                                                }} onClick={() => setCount(count + product.product.size.length)}>+</a>

                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            {user.token?.token ?
                                                <a onClick={addCart} href=""
                                                   className="btn-product btn-cart">В Корзину
                                                </a> :
                                                <a onClick={(e) => addCardLocal(e, product.product.id, product.product.price, product.product.images[0].title, product.product.title)}
                                                   href=""
                                                   className="btn-product btn-cart">В Корзину
                                                </a>
                                            }

                                            <div className="details-action-wrapper">
                                                    {user.token?.token ? product.product.is_favorite ?
                                                    <FcLike onClick={deleteWish}
                                                            style={{fontSize: "30px", cursor: "pointer"}}/>
                                                    : <a style={{fontSize: "30px"}} href="" onClick={addWishlist}
                                                         className="btn-product btn-wishlist" title="Wishlist"></a> : ""}
                                            </div>
                                        </div>

                                    </>





                                    <div className="row">


                                        <div className="col-md-12">
                                            <ul className="nav nav-pills" id="tabs-5" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active s-title" id="tab-17-tab" data-toggle="tab"
                                                       href="#tab-17" role="tab" aria-controls="tab-17"
                                                       aria-selected="true">Описание</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link s-title" id="tab-19-tab" data-toggle="tab"
                                                       href="#tab-19" role="tab" aria-controls="tab-19"
                                                       aria-selected="false">Отзывы ({product.reviews.length})</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="tab-content-5">
                                                <div className="tab-pane fade show active" id="tab-17" role="tabpanel"
                                                     aria-labelledby="tab-17-tab">
                                                    <p className="description s-title">
                                                        <strong>Размер: </strong> {product.product.size[0]}-{product.product.size[product.product.size.length - 1]}
                                                    </p>
                                                    <p className="description s-title">
                                                        <strong>Ткань:</strong> {product.product.cloth}</p>
                                                    <p className="description s-title">
                                                        <strong>Описание:</strong> {product.product.description}</p>
                                                </div>
                                                <div className="tab-pane fade s-title" id="tab-18" role="tabpanel"
                                                     aria-labelledby="tab-18-tab">

                                                </div>
                                                <div className="tab-pane fade" id="tab-19" role="tabpanel"
                                                     aria-labelledby="tab-19-tab">
                                                    <h5 className="s-title">Будту первым, кто оставил отзыв
                                                        на {product.product.title}</h5>
                                                    <div class="reviews">
                                                        {product.reviews.map((r, index) =>
                                                            <div style={{marginTop: "10px"}} key={index} class="review">
                                                                <div class="row no-gutters">
                                                                    <div class="col-auto">
                                                                        <h4><a>{r.author}</a></h4>
                                                                        <div class="ratings-container">
                                                                            {
                                                                                stars.map((_, index) => {
                                                                                    return (
                                                                                        <FaStar
                                                                                            key={index}
                                                                                            size={13}
                                                                                            style={{
                                                                                                marginRight: 3,
                                                                                            }}
                                                                                            color={index < r.rating ? colors.orange : colors.grey}
                                                                                        />
                                                                                    )
                                                                                })}
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
                                                            {stars.map((_, index) => {
                                                                return (
                                                                    <FaStar
                                                                        key={index}
                                                                        size={18}
                                                                        style={{
                                                                            marginRight: 8,
                                                                            cursor: "pointer"
                                                                        }}
                                                                        color={(hoverValue || currValue) > index ? colors.orange : colors.grey}
                                                                        onClick={() => handleClick(index + 1)}
                                                                        onMouseOver={() => handleMouseOver(index + 1)}
                                                                        onMouseLeave={handleMouseLeave}
                                                                        onChange={e => setCurrValue(e.target.value)}
                                                                        value={currValue}
                                                                    />
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                    <textarea
                                                        className="form-control"
                                                        value={text}
                                                        onChange={e => setText(e.target.value)}
                                                    >

                                                        </textarea>

                                                    <div className="d-grid gap-2">


                                                        <div className="dropdown">
                                                            <button style={{fontSize: "18px"}}
                                                                    onClick={(e) => sendRating(e)}
                                                                    className="btn btn-block btn-outline-primary-2 voiti">
                                                                Отправить
                                                            </button>
                                                        </div>

                                                    </div>

                                                    <ToastContainer/>
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

export default Product;
