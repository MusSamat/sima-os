import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import "../../App.css";
import Restangle30 from "../../assets/Rectangle30.png"
import Frame from "../../assets/Frame.png"
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


const Main = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [fly, setFly] = useState('')
    const [count, setCount] = useState(5)
    const [quantity, setQuantity] = useState(5)

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
                product.getNoveltyProducts1(user.isAuth)
                product.fetchTodoCatalog(user.isAuth)
                product.discountTodo1(user.isAuth)
                setCount(count)
                user.getWishlistData()
                product.getData(id)
                product.getPopularProduct(user.isAuth)
            })
            .catch(error => {
                console.log(error)
            })


    }

    const f = (num) => {
        const result = [0, 1];
        for(let i = 2; i<=num; i++){
            const prevNum1 = result[i - 1];
            const prevNum2 = result[i - 2];
            console.log(prevNum1)
            // console.log(prevNum2)
            result.push(prevNum1 + prevNum2)
        }
        return result[num]
    }
    console.log(f(10))
    // console.log(f(20))

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
        // setLgShow(true)
        user.getOrderDataId(id)
        console.log(id)
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        user.getImage().then(() => {
            product.discountTodo1(user.isAuth)
        })
        product.getNoveltyProducts1(user.isAuth)
        product.getDataNew()
        product.getSubcategory().then(() => {
            product.getDataNewSeason(product?.subcategory[0]?.id)
        })
        product.getPopularProduct(user.isAuth)

    }, [])


    return (
        <div className="page-wrapper">
            <main className="main">
                {user.image.map((img, index) =>
                    <div key={index} className="intro-slide" style={{backgroundImage: `url(${img.image})`}}>

                        <div className="container intro-content text-left ">
                            <h1 className="intro-title">{img.title}<br/>< strong
                                style={{marginLeft: "-9px"}}>sale</strong></h1>

                            <Link to={CATALOG_ROUTE} className="btn">
                                <span style={{fontSize: "20px"}}>Показать</span>
                                <i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>

                    </div>)}


                <div className="container mt-8">
                    <div className="products mt-4 mb-4 ">
                        <div className="row justify-content-center">
                            {product.discount.slice(0, 8).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center ">
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
                                                {user.isAuth ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> : ''}
                                                {/*  */}
                                                <a onClick={() => openModal()}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.isAuth ?
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
                                                {user.isAuth ? `${discout.price} ₽` : ""}
                                            </div>


                                        </div>
                                    </div>
                                </div>)}

                        </div>

                        <div className="entry-content d-flex justify-content-center mb-8">
                            <Link to={{
                                pathname: CATALOG_ROUTE,
                                popular: "discount"
                            }}>
                                <a style={{fontSize: "20px"}} href="" className="read-more">Показать</a>
                            </Link>
                        </div>

                    </div>

                </div>

                <div style={{boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.25)"}} className="trending mb-6 mt-8">
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
                            {product.novelty.slice(0, 8).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center  ">

                                        <figure className="product-media ">
                                            <Link to={{pathname: '/product/' + discout.id}}>
                                                <a href="">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`}
                                                        alt="Product image" className="product-image"/>
                                                </a>
                                            </Link>


                                            <div className="product-action-vertical">
                                                {user.isAuth ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> : ''}
                                                <a onClick={() => openModal()}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.isAuth ?
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
                                                {user.isAuth ? `${discout.price} ₽` : ""}
                                            </div>


                                        </div>
                                    </div>
                                </div>)}

                        </div>

                    </div>

                    <Modal/>
                    <div className="entry-content d-flex justify-content-center mb-8">
                        <Link to={{
                            pathname: CATALOG_ROUTE,
                            popular: "novelty"
                        }}>
                            <a style={{fontSize: '25px'}} href="" className="read-more">Показать</a>
                        </Link>
                    </div>

                </div>

                <div className="trending mt-8 d-flex justify-content-center mb-6 ">
                    <img src={Frame} alt="Banner"/>
                </div>

                <div className="container ">

                    <div className="products mt-10 mb-4 ">
                        <div className="row justify-content-center">
                            {product.popular.slice(0, 4).map((discout, index) =>
                                <div key={index} className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center  ">

                                        <figure className="product-media ">
                                            <Link to={{pathname: '/product/' + discout.id}}>
                                                <a href="">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]?.images[0]}`}
                                                        alt="Product image" className="product-image"/>
                                                </a>
                                            </Link>


                                            <div className="product-action-vertical">
                                                {user.isAuth ? discout.is_favorite ?
                                                    <FcLike onClick={(e) => deleteWish(e, discout.id)} style={{
                                                        fontSize: "30px",
                                                        cursor: "pointer",
                                                        marginBottom: "20px"
                                                    }}/>
                                                    : <span style={{cursor: "pointer"}}
                                                            onClick={(e) => addWishlist(e, discout.id)}
                                                            className="icon-box-icon">
                                                                <i className="icon-heart-o"></i>
                                                                </span> : ''}
                                                {/*  */}
                                                <a onClick={() => openModal()}
                                                   className="btn-product-icon btn-quickview"
                                                   title="Quick view"><span>Quick view</span></a>

                                            </div>

                                            <div className="product-action">
                                                {user.isAuth ?
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
                                                {user.isAuth ? `${discout.price} ₽` : ""}
                                            </div>

                                        </div>
                                    </div>
                                </div>)}

                        </div>

                    </div>
                    <div className="entry-content d-flex justify-content-center mb-8">
                        <Link to={{
                            pathname: CATALOG_ROUTE,
                            popular: "popular"
                        }}>
                            <a style={{fontSize: "20px"}} href="" className="read-more">Показать</a>
                        </Link>
                    </div>

                    {/*<div className="btn-wrap d-flex justify-content-center mb-8">*/}
                    {/*    <Link to={{*/}
                    {/*        pathname: CATALOG_ROUTE,*/}
                    {/*        popular: "popular"*/}
                    {/*    }} className="btn  btn-shadow">*/}
                    {/*        <span style={{fontSize: "20px"}}>Показать</span>*/}
                    {/*        <i className="icon-long-arrow-right"></i>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

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

