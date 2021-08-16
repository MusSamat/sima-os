import React, {useContext, useEffect, useState} from "react";
import {Link, NavLink} from 'react-router-dom';
import {
    ABOUT_ROUTE,
    PURCHASES_ROUTE,
    DELIVERY_ROUTE,
    CONTACT_ROUTE,
    HOME_ROUTE,
    NEWS_ROUTE,
    CART_ROUTE,
    CHECKOUT_ROUTE,
    WISHLIST_ROUTE,
    LOGIN_ROUTE,
    MYACOUNT_ROUTE,
    CATALOG_ROUTE
} from "../utils/Const";
import "../App.css";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import logo from "../assets/lolo.jpg"
import what from "../assets/WhatsApp.png"
import mobile_menu from "../Http/mobile_menu";
import {VscSearch} from "react-icons/vsc";


const Header = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [input, setInput] = useState("")


    let sum = 0
    let data = JSON.parse(localStorage.getItem('order'))
    console.log( CATALOG_ROUTE)
    const search = (e) => {
        window.location.href = `/catalog?name=${input}`;
        product.searchFilter(input)



        e.preventDefault();
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {


            search()
            e.preventDefault();
        }

    }

    // window.localstorage?.removeItem("order")
    // window.onbeforeunload = function() {
    //     localStorage.clear();
    // }

    // window.addEventListener("beforeunload", () => localStorage.removeItem('order'))

    // window.localStorage.removeItem("order");



    useEffect(() => {
        mobile_menu()
        // product.getActualProducts()
        user?.getUserData()
        user?.getCartData()
        user.getWishlistData()
        product.subcategoryFilter()
        product.getSubcategory().then(() => {
            const scripts = [
                '/assets/js/jquery.elevateZoom.min.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/jquery.magnific-popup.min.js',
                '/assets/js/main.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/owl.carousel.min.js',
                '/assets/js/superfish.min.js',
                '/assets/js/jquery.waypoints.min.js',
                '/assets/js/jquery.hoverIntent.min.js',
                '/assets/js/bootstrap.bundle.min.js',
                '/assets/js/jquery.min.js',
            ]
            scripts.forEach(i => {
                const s = document.createElement('script')
                s.src = i
                document.body.appendChild(s)
            })
        })
    }, [])

    return (
        <div>
            <header style={{
                position: "fixed",
                marginTop: "0px",
                marginLeft: "0px",
                zIndex: "999",
                boxShadow: "0px 0px 36px rgba(0, 0, 0, 0.15)"
            }} className="header mt-30">
                <div className="header-bottom ">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            <NavLink exact to={HOME_ROUTE}>
                                <img className="logo1" src={logo}/>
                                {/*<h1 className="sima-logo ">SIMA</h1>*/}
                            </NavLink>

                        </div>
                        <div className="header-center">
                            <nav className="main-nav">
                                <ul className="menu sf-arrows  ">
                                    <li className="megamenu-container ">
                                        <NavLink exact className="sf-with"
                                                 style={{fontSize: "18px", fontWeight: "400", color: "#000000"}}
                                                 to={HOME_ROUTE}> <a className="sf-with-ul">Главная</a></NavLink>
                                    </li>
                                    <li className="megamenu-container ">
                                        <NavLink className="sf-with" style={{fontSize: "18px", color: "#000000"}} to={{
                                            pathname: CATALOG_ROUTE,
                                            popular: "catalog"
                                        }}><a className="sf-with-ul">Каталог </a></NavLink>

                                    </li>
                                    <li className="megamenu-container">
                                        <NavLink exact className="sf-with" to={NEWS_ROUTE}><a
                                            style={{fontSize: "18px", color: "#000000"}}
                                            className="sf-with-ul">Новости</a></NavLink>

                                    </li>
                                    <li className="megamenu-container ">
                                        <a style={{fontSize: "18px", color: "#000000", cursor: "pointer"}}
                                           className="sf-with-ul">Сотрудничество</a>
                                        <ul className="menu sf-arrows " style={{
                                            marginLeft: "570px",
                                            marginTop: "-10px",
                                            color: "white",
                                            width: "40px"
                                        }}>
                                            <Link to={ABOUT_ROUTE}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>О нас</a></li>
                                            </Link>
                                            <Link to={CONTACT_ROUTE}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>Контакты</a></li>
                                            </Link>
                                            <Link to={PURCHASES_ROUTE}>
                                                <li className="megamenu-container "><a className="sf-with Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>Условия покупки</a></li>
                                            </Link>
                                            <Link to={DELIVERY_ROUTE}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>Условия доставки</a></li>
                                            </Link>

                                        </ul>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="divInput">
                            {user.isRoute ?  <input onKeyDown={handleKeyDown} value={input} onChange={(e) => setInput(e.target.value)}type="text" className="inputFor" id="q"
                                                    placeholder="Search in..." />: null}
                        </div>

                        <div className="header-right">

                            {user.isRoute ? <VscSearch className="icons" onClick={()=>user.setRoute(false)}/> : <VscSearch className="icons" onClick={()=>user.setRoute(true)}/>}
                            {user.isAuth ?
                                <NavLink to={MYACOUNT_ROUTE}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#000000"}} className="icon-user"></i></a></NavLink>
                                : <NavLink to={LOGIN_ROUTE}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#000000"}} className="icon-user"></i></a></NavLink>}<br/>

                            <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                                <i style={{color: "#000000"}} className="icon-heart-o"></i>
                                <span className="wishlist-count">{user.list?.length || '0'}</span>
                            </NavLink>
                            <div className="dropdown cart-dropdown mr-10">
                                <NavLink to={CART_ROUTE}><a className="dropdown-toggle ">
                                    <i style={{color: "#000000"}} className="icon-shopping-cart"></i>
                                    <span
                                        className="cart-count">{user.isAuth ? user.items?.length || '0' : data?.length || "0"}</span>
                                    {console.log(product.productOrder)}
                                    { user.isAuth ?
                                        user.items?.map((item, index) => {
                                            sum = sum + item.product?.price * item.quantity
                                        }) :
                                        product.productOrder?.map((item, index) => {
                                            sum = sum + item.price * item.quantity
                                        })
                                    }
                                    <span className="cart-txt">{sum.toFixed(2) } ₽</span>
                                </a>
                                </NavLink>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div style={{overflowY: "auto", maxHeight: "230px"}}>

                                        <div className="dropdown-cart-products">
                                            {user.isAuth ? user.items?.map((c, index) =>
                                                <div key={index} className="product">
                                                    <div className="product-cart-details">
                                                        <h4 className="product-title">
                                                            <a>{c.product?.title}</a>
                                                        </h4>

                                                        <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x ${c.product?.price}
                                            </span>
                                                    </div>

                                                    <figure className="product-image-container">
                                                        <a className="product-image">
                                                            <img
                                                                src={`${process.env.REACT_APP_BASE_URL}${c.product?.images[0]?.images[0]}`}
                                                                alt="product"/>
                                                        </a>
                                                    </figure>
                                                    <a href="" className="btn-remove" title="Remove Product"></a>
                                                </div>) :
                                                product.products?.filter((i) => data?.map(d => d.id).includes(i.id)).map((c, index) =>
                                                            <div key={index} className="product">
                                                                <div className="product-cart-details">
                                                                    <h4 className="product-title">
                                                                        <a>{c.title}</a>
                                                                    </h4>

                                                                    <span className="cart-product-info">
                                                                    <span className="cart-product-qty">1</span>
                                                                    x ${c.price} ₽
                                                                </span>
                                                                </div>

                                                                <figure className="product-image-container">
                                                                    <a className="product-image">
                                                                        <img
                                                                            src={`${process.env.REACT_APP_BASE_URL}${c.images[0]?.images[0]}`}
                                                                            alt="product"/>
                                                                    </a>
                                                                </figure>
                                                                <a href="" className="btn-remove" title="Remove Product"></a>
                                                            </div>)
                                            }
                                        </div>


                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>ИТОГО:</span>

                                        <span className="cart-total-price">{sum.toFixed(2)}</span>
                                    </div>

                                    <div className="dropdown-cart-action" style={{display: "block"}}>
                                        <NavLink style={{marginBottom: "9px"}} to={CART_ROUTE}>
                                            {/* <a className="btn btn-primary" ></a>
                                         <a href="#" class="btn btn-link">ПРОСМОТР КОРЗИНЫ</a> */}
                                            <a href="" class="btn btn-outline-dark btn-rounded mb-1">ПРОСМОТР
                                                КОРЗИНЫ</a>
                                        </NavLink><br/>

                                        <NavLink style={{width: "167px"}} to={CHECKOUT_ROUTE}>
                                            <a href="" class="btn btn-outline-dark btn-rounded">ОФОРМИТЬ ЗАКАЗ</a>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </header>


            <a
                href="whatsapp://send?text=Здравствуйте, я хочу стать частью команды Яндекс Такси Олимпик Парк&phone=+996501342534&abid=+996501342534"
                className="btn-whatsapp-link"
            >
            </a>
            <Link className="whatsapp"
                  to={{pathname: 'https://wa.me/996709999915'}}  target="_blank"
            >
                <img src={what}/>
            </Link>
        </div>
    );
})

export default Header;
