import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import "../../App.css";
import Restangle32 from "../../assets/Rectangle31.png"
import Restangle33 from "../../assets/Rectangle32.png"
import Restangle34 from "../../assets/Rectangle33.png"
import Restangle35 from "../../assets/Rectangle34.png"
import Restangle332 from "../../assets/Rectangle332.png"
import axios from "axios"
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import {SUBCATEGORY_ROUTE, ABOUT_ROUTE, DELIVERY_ROUTE, PURCHASES_ROUTE, CATALOG_ROUTE} from '../../utils/Const';
import Modal from "./Modal"
import {FcLike} from "react-icons/fc";
import {toast} from "react-toastify";
import {FaStar} from "react-icons/fa";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}


const Main = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [fly, setFly] = useState('')
    const [count, setCount] = useState(5)
    const [quantity, setQuantity] = useState(5)
    const [modalActive, setModalActive] = useState(false)
    const [prodactId, setProdactId] = useState(0)
    const stars = Array(5).fill(0);

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
            .catch(error => {
                console.log(error)

            })
        event.preventDefault();

    }

    const deleteWish = (e, id) => {
        e.preventDefault();

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
                product.getNoveltyProducts1(user.isAuth)
                product.fetchTodoCatalog(user.isAuth)
                user.getWishlistData()
                product.discountTodo1(user.isAuth)
                product.getPopularProduct(user.isAuth)
            })
            .catch((e) => {
                console.error(e)
            })
    }

    const addCart = (e, id, color, size) => {
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(size)],
            color: [String(color)],


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
            })
        e.preventDefault();
    }

    const addWishlist = (e, id) => {
        e.preventDefault();
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
                product.getNoveltyProducts1()
                product.fetchTodoCatalog()
                product.discountTodo1()
                setCount(count)
                user.getWishlistData()
                product.getData(id)
                product.getPopularProduct()
            })
            .catch(error => {
                console.log(error)
            })


    }


    const addCardLocal = ( proId, count, price, color, title) => {
        let data = JSON.parse(localStorage.getItem('order'))
        let productId = product.productOrder.map((i) => i.product)
        if(data === null){
            data = []
        }
        data.push({id: proId, quantity: count, color: color, title: title, price: price})
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
                color: color,
                title: title
            })
        } else {
            toast.warning("этот товар есть в карзина")
            found = -1
        }
        // e.preventDefault();

    }

    const openModal = (id) => {
        setProdactId(id)
        setModalActive(true)
        console.log(id)
        console.log(modalActive)

    }
    let wish = JSON.parse(localStorage.getItem('wishlist'))

    const getItem = (id) => {
        const a = wish?.find(i => i.id === id)
        return a ? a.id : 0
    }

    const addWishlistLocal = (e, proId, is_favorite) => {
        user.getImageLogo()
        product.productWishlist.push({
            id: proId,
        })
        let wish = JSON.parse(localStorage.getItem('wishlist'))
        if (wish === null) {
            wish = []
        }
        wish.push({
            id: proId,
            is_favorite: true,
        })
        localStorage.setItem('wishlist', JSON.stringify(wish));
        product.discountTodo1()
        e.preventDefault();
    }

    const deleteWishLocal = async (e, proId) => {
        user.getImageLogo()
        wish = wish.filter((item) => item.id !== proId)
        await localStorage.setItem("wishlist", JSON.stringify(wish));
        if (wish.length === 0) {
            localStorage.removeItem("wishlist");
        }
        product.discountTodo1()

        e.preventDefault();
    }



    useEffect(() => {

        window.scrollTo(0, 0)

        user.getImage().then(() => {
            product.discountTodo1()

        })
        user.getImageNovelty()
        user.getImagePopular()
        product.getNoveltyProducts1()
        // product.getDataNew()
        product.getSubcategory().then(() => {
            // product.getDataNewSeason(product?.subcategory[0]?.id)
            localStorage.removeItem('category')
            localStorage.removeItem('viewProduct')
        })
        product.getPopularProduct()

    }, [])

    return (
        <div className="page-wrapper">
            <main className="main">
                {user?.image.map((img, index) =>
                    <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>

                        <div className="container intro-content text-left ">
                            <h1 className="intro-title" >{img.title}<br/>< strong
                                style={{marginLeft: "-9px", color: "#c96"}}>sale</strong></h1>

                            <Link to={`${CATALOG_ROUTE}?products=discount`} className="btn">
                                <span  style={{fontSize: "20px"}}>Показать</span>
                                <i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>

                    </div>)}


                <div className="container mt-8">
                    <div className="products mt-4 mb-4 ">
                        <div className="row justify-content-center">
                            {product.discount.slice(0, 8).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center black">
                                        <figure className="product-media ">
                                            {discout.percent ? <div style={{textAlign: "center"}}
                                                                 class="product-label label-sale">{discout.percent} %</div> : ""}
                                            <Link to={{pathname: '/product/' + discout.id}}>
                                                <a href="">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`}
                                                        alt="Product image" className="product-image"/>
                                                </a>
                                            </Link>


                                            <div className="product-action-vertical">
                                                {user.token?.token ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> :
                                                    getItem(discout.id) ?
                                                        <FcLike onClick={(e) => deleteWishLocal(e, discout.id)} style={{
                                                            fontSize: "30px",
                                                            cursor: "pointer",
                                                            marginBottom: "20px"
                                                        }}/>
                                                        : <span style={{cursor: "pointer"}}
                                                                onClick={(e) => addWishlistLocal(e, discout.id, discout.is_favorite)}
                                                                class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>}
                                                <a onClick={(e) => {e.preventDefault(); openModal(discout.id)}}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.token?.token ?
                                                    <a style={{cursor: "pointer"}}
                                                       onClick={(e) => addCart(e, discout.id, discout.images[0].title, discout.size.length)}
                                                       className="btn-product btn-cart s-title "><span>В КОРЗИНУ </span></a>
                                                    :
                                                    <>
                                                        <button key={discout.id}
                                                                style={{cursor: "pointer", border: "none"}}
                                                                onClick={() => addCardLocal(discout.id, discout.size.length, discout.price, discout.images[0].title, discout.title,)}
                                                                className="btn-product btn-cart s-title ">
                                                            <span>В КОРЗИНУ</span></button>
                                                    </>

                                                }
                                            </div>
                                        </figure>
                                        <div className="product-body">
                                            <h3 className="product-title"><a href="">{discout.title}</a></h3>
                                            <div style={{color: "#000000"}} className="product-price">
                                                <span className="new-price">{discout.discount_price} ₽</span>
                                                <span className="old-price">{`${discout.price} ₽`}</span>
                                            </div>
                                            <div className="ratings-container">
                                                {
                                                    stars.map((_, index) => {
                                                        return (
                                                            <FaStar
                                                                key={index}
                                                                size={13}
                                                                style={{
                                                                    marginRight: 3,
                                                                }}
                                                                color={index < Math.round(discout.average_review_score) ? colors.orange : colors.grey}
                                                            />
                                                        )
                                                    })}
                                            </div>

                                        </div>
                                    </div>
                                </div>)}

                        </div>
                        { modalActive && <Modal active={modalActive} setActive={setModalActive} id={prodactId}/>}


                        <Link  to={`${CATALOG_ROUTE}?products=discount`}>
                            <div  className="more-container text-center mt-3 mb-3">
                                <a href="" className="btn btn-outline-dark-3 btn-more"><span>Показать</span><i
                                    className="icon-long-arrow-right"></i></a>
                            </div>
                        </Link>
                    </div>

                </div>
                {user.novelty.map((img) =>

                <div style={{boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)"}} className="trending mb-6 mt-8">
                    <a href="">

                        <img src={img.image} alt="Banner"/>
                    </a>
                    <div className="banner banner-big d-md-block">
                        <div className="banner-content text-center">
                            <h3 className="banner-title text-white">{img.title}</h3>
                        </div>
                    </div>
                </div>)}


                <div className="container ">

                    <div className="products mt-10 mb-4 ">
                        <div className="row justify-content-center">
                            {product.novelty.slice(0, 8).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center  black">

                                        <figure className="product-media ">
                                            <Link to={{pathname: '/product/' + discout.id}}>
                                                <a href="">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`}
                                                        alt="Product image" className="product-image"/>
                                                </a>
                                            </Link>


                                            <div className="product-action-vertical">
                                                {user.token?.token ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> : getItem(discout.id) ?
                                                    <FcLike onClick={(e) => deleteWishLocal(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlistLocal(e, discout.id, discout.is_favorite)}
                                                            class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>}
                                                <a onClick={() => openModal(discout.id)}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.token?.token ?
                                                    <a style={{cursor: "pointer"}}
                                                       onClick={(e) => addCart(e, discout.id, discout.images[0].title, discout.size.length)}
                                                       className="btn-product btn-cart s-title "><span>В КОРЗИНУ </span></a>
                                                    :
                                                    <>
                                                        <button key={discout.id}
                                                                style={{cursor: "pointer", border: "none"}}
                                                                onClick={() => addCardLocal(discout.id, discout.size.length, discout.price, discout.images[0].title, discout.title)}
                                                                className="btn-product btn-cart s-title ">
                                                            <span>В КОРЗИНУ</span></button>
                                                    </>

                                                }
                                            </div>
                                        </figure>
                                        <div className="product-body">
                                            <h3 className="product-title"><a href="">{discout.title}</a></h3>
                                            <div style={{color: "#000000"}} className="product-price">
                                                {`${discout.price} ₽`}
                                            </div>
                                            <div className="ratings-container">
                                                {
                                                    stars.map((_, index) => {
                                                        return (
                                                            <FaStar
                                                                key={index}
                                                                size={13}
                                                                style={{
                                                                    marginRight: 3,
                                                                }}
                                                                color={index < Math.round(discout.average_review_score) ? colors.orange : colors.grey}
                                                            />
                                                        )
                                                    })}
                                            </div>

                                        </div>
                                    </div>
                                </div>)}

                        </div>

                    </div>

                    <Link to={`${CATALOG_ROUTE}?products=novelty`}>
                        <div  className="more-container text-center mt-3 mb-3">
                            <a href="" className="btn btn-outline-dark-3 btn-more"><span>Показать</span><i
                                className="icon-long-arrow-right"></i></a>
                        </div>
                    </Link>

                </div>
                {user.popular.map((img) =>
                <div  className="trending mb-6 mt-8">
                    <a href="">

                            <img src={img.image} alt="Banner"/>


                    </a>
                    <div className="banner banner-big d-md-block">
                        <div className="banner-content text-center">
                            <h3 className="banner-title text-white">{img.title}</h3>
                        </div>
                    </div>
                </div>)}

                <div className="container ">

                    <div className="products mt-10 mb-4 ">
                        <div className="row justify-content-center">
                            {product.popular.slice(0, 4).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center  black">

                                        <figure className="product-media ">
                                            <Link to={{pathname: '/product/' + discout.id}}>
                                                <a href="">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`}
                                                        alt="Product image" className="product-image"/>
                                                </a>
                                            </Link>


                                            <div className="product-action-vertical">
                                                {user.token?.token ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> : getItem(discout.id) ?
                                                    <FcLike onClick={(e) => deleteWishLocal(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlistLocal(e, discout.id, discout.is_favorite)}
                                                            class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>}
                                                <a onClick={() => openModal(discout.id)}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.token?.token ?
                                                    <a style={{cursor: "pointer"}}
                                                       onClick={(e) => addCart(e, discout.id, discout.images[0].title, discout.size.length)}
                                                       className="btn-product btn-cart s-title "><span>В КОРЗИНУ </span></a>
                                                    :
                                                    <>
                                                        <button key={discout.id}
                                                                style={{cursor: "pointer", border: "none"}}
                                                                onClick={() => addCardLocal(discout.id, discout.size.length, discout.price, discout.images[0].title, discout.title)}
                                                                className="btn-product btn-cart s-title ">
                                                            <span>В КОРЗИНУ</span></button>
                                                    </>

                                                }
                                            </div>
                                        </figure>

                                        <div className="product-body">
                                            <h3 className="product-title"><a href="">{discout.title}</a></h3>
                                            <div style={{color: "#000000"}} className="product-price">
                                                {`${discout.price} ₽`}
                                            </div>
                                            <div className="ratings-container">
                                                {
                                                    stars.map((_, index) => {
                                                        return (
                                                            <FaStar
                                                                key={index}
                                                                size={13}
                                                                style={{
                                                                    marginRight: 3,
                                                                }}
                                                                color={index < Math.round(discout.average_review_score) ? colors.orange : colors.grey}
                                                            />
                                                        )
                                                    })}
                                            </div>

                                        </div>
                                    </div>
                                </div>)}

                        </div>

                    </div>
                    <Link  to={`${CATALOG_ROUTE}?products=popular`}>
                        <div  className="more-container text-center mt-3 mb-3">
                            <a href="" className="btn btn-outline-dark-3 btn-more"><span>Показать</span><i
                                className="icon-long-arrow-right"></i></a>
                        </div>
                    </Link>

                </div>


                <div className="container mt-12 mb-10">

                    <div className="row ">
                        <div className="col-12 mb-10 col-xl-6 mt-2 mb-12">
                            <Link to={ABOUT_ROUTE}>
                                <div
                                    className="position-relative d-flex justify-content-center align-items-center mt-8 mb-3 ">
                                    <img className=" position-absolute " src={Restangle32} alt="Banner"/>
                                    <img className="position-absolute" src={Restangle332} alt="Banner"/>
                                    <h3 style={{color: "#fff"}} className="position-absolute monserat">Более 20 лет на
                                        рынке</h3>

                                </div>
                            </Link>

                        </div>
                        <div className="col-12-mb-10 col-xl-6 mt-2 mb-12">
                            <Link to={DELIVERY_ROUTE}>
                                <div
                                    className=" position-relative d-flex justify-content-center align-items-center mt-8 ">
                                    <img className=" position-absolute" src={Restangle33} alt="Banner"/>
                                    <img className=" position-absolute" src={Restangle332} alt="Banner"/>
                                    <h3 style={{color: "#fff"}} className="position-absolute monserat">Удобная
                                        доставка</h3>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-12 mb-10 col-xl-6 mt-2  mb-12">
                            <Link to={PURCHASES_ROUTE}>
                                <div
                                    className="position-relative d-flex justify-content-center align-items-center mt-8">
                                    <img className=" position-absolute  " src={Restangle34} alt="Banner"/>
                                    <img className=" position-absolute" src={Restangle332} alt="Banner"/>
                                    <h3 style={{color: "#fff"}} className="position-absolute monserat">Контроль
                                        качества</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 mb-10 col-xl-6 mt-2 mb-12 ">
                            <Link to={ABOUT_ROUTE}>
                                <div
                                    className="position-relative d-flex justify-content-center align-items-center mt-8">
                                    <img className="position-absolute" src={Restangle35} alt="Banner"/>
                                    <img className="position-absolute " src={Restangle332} alt="Banner"/>
                                    <h3 style={{color: "#fff"}} className="position-absolute monserat">Сертификация
                                        товара</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


            </main>
        </div>

    )
})

export default Main;

