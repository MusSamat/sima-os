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
import {toast} from "react-toastify";
import what from "../assets/WhatsApp.png"
import mobile_menu from "../Http/mobile_menu";


const Header = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [input, setInput] = useState("")


    let sum = 0
    let data = JSON.parse(localStorage.getItem('order'))
    let wish = JSON.parse(localStorage.getItem('wishlist'))
    let authToken = JSON.parse(localStorage.getItem('value'))
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

    const errorClick = () => {
        toast.warning("Минимальный заказ 5 размерных рядов")
    }


    useEffect(async() => {
        mobile_menu()
        if(authToken){
            await user.getUserData()
            await user?.getCartData()
            await user.getWishlistData()
        }
        await user.getImageLogo()
        await product.getSubcategory().then(() => {
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
        const search = document.getElementById("demo")
        const outsideClick = function(e){
            if (search === e.target.closest('#demo')) {
                user.setRoute(true)
            } else user.setRoute(false)
        }
        document.addEventListener("click", outsideClick);
        return () => {
            document.removeEventListener('click', outsideClick)
        }
    }, [])

    return (
        <div class="page-wrapper">
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
                            {user.logo.map((img ) =>

                            <NavLink exact to={HOME_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                <img className="logo1" src={img.image}/>
                                {/*<h1 className="sima-logo ">SIMA</h1>*/}
                            </NavLink>
                            )}

                        </div>
                        <div className="header-center">
                            <nav className="main-nav">
                                <ul className="menu sf-arrows  ">
                                    <li className="megamenu-container ">
                                        <NavLink exact className="sf-with"

                                                 to={HOME_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}> <a style={{fontSize: "20px", color: "#333"}} className="sf-with-ul">Главная</a></NavLink>
                                    </li>
                                    <li className="megamenu-container ">
                                        <Link onClick={(e) =>product.getActualProducts(e)} className="sf-with"
                                              to={`${CATALOG_ROUTE}?products=products`}
                                              innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a style={{fontSize: "20px", color: "#333"}} className="sf-with-ul">Каталог </a></Link>

                                    </li>
                                    <li className="megamenu-container">
                                        <NavLink exact className="sf-with" to={NEWS_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a
                                            style={{fontSize: "18px", color: "#333"}}
                                            className="sf-with-ul">Новости</a></NavLink>

                                    </li>
                                    <li className="megamenu-container ">
                                        <a style={{fontSize: "20px", cursor: "pointer"}}
                                           className="sf-with-ul">Сотрудничество</a>
                                        <ul className="menu sf-arrows " style={{
                                            marginLeft: "570px",
                                            marginTop: "-10px",
                                            color: "white",
                                            width: "40px"
                                        }}>
                                            <Link to={ABOUT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#333"
                                                                                       }}>О нас</a></li>
                                            </Link>
                                            <Link to={CONTACT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#333"
                                                                                       }}>Контакты</a></li>
                                            </Link>
                                            <Link to={PURCHASES_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#333"
                                                                                       }}>Условия покупки</a></li>
                                            </Link>
                                            <Link to={DELIVERY_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#333"
                                                                                       }}>Условия доставки</a></li>
                                            </Link>

                                        </ul>

                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="divInput">
                        </div>

                        <div className="header-right">
                            <div  id="demo" className={ user.isRoute ? "search-box showed" : "search-box" }>
                                <input className="" type="text" onKeyDown={handleKeyDown} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search in..." />
                                <div className="search-btn">
                                    {user.isRoute ?
                                        <i onClick={(e)=>search(e) } className="icon-search icons"></i> :
                                        <i onClick={ ()=>user.setRoute(false)  } className="icon-search icons"></i> }
                                </div>
                            </div>

                            {user.userId?.username ?
                                <NavLink to={MYACOUNT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#666666"}} className="icon-user"></i></a></NavLink>
                                : <NavLink to={LOGIN_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#666666"}} className="icon-user"></i></a></NavLink>}<br/>

                            <NavLink className="wishlist-link" to={WISHLIST_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                <i style={{color: "#666666"}} className="icon-heart-o"></i>
                                <span className="wishlist-count flex justify-content-center align-center">{user._user?.username ? user.list?.length || '0' : wish  ? wish?.length : '0' }</span>
                            </NavLink>
                            <div className="dropdown cart-dropdown mr-10">
                                <NavLink to={CART_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a className="dropdown-toggle ">
                                    <i style={{color: "#666666"}} className="icon-shopping-cart"></i>
                                    <span
                                        className="cart-count">{user._user?.username ? user.items?.length || '0' : data ? data?.length : '0'}</span>
                                    { user._user?.username ?
                                        user.items?.map((item, index) => {
                                            sum = sum + item.product?.price * item.quantity
                                        }) :
                                         data?.map((item, index) => {
                                            sum = sum + item.price * item.quantity
                                        })
                                    }
                                    <span className="cart-txt">{new Intl.NumberFormat('fr-CA', {style: 'decimal'}).format( sum.toFixed(2)) } ₽</span>
                                </a>
                                </NavLink>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div style={{overflowY: "auto", maxHeight: "230px"}}>

                                        <div className="dropdown-cart-products">
                                            {user._user?.username ? user.items?.map((c, index) =>
                                                <div key={index} className="product">
                                                    <div className="product-cart-details">
                                                        <h4 className="product-title">
                                                            <a>{c.product?.title}</a>
                                                        </h4>

                                                        <span style={{color: '#666666', fontWeight: "normal"}} className="cart-product-info">
                                                            {/*<span className="cart-product-qty"></span>*/}
                                                            {c.product?.price}
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

                                                                    <span style={{color: '#666666', fontWeight: "normal"}} className="cart-product-info">
                                                                    {/*<span className="cart-product-qty">1</span>*/}
                                                                    {c.price} ₽
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
                                        <span style={{color: '#666666', fontWeight: "normal"}} >ИТОГО:</span>

                                        <span style={{color: '#666666', fontWeight: "normal"}}  className="cart-total-price">{new Intl.NumberFormat('fr-CA', {style: 'decimal'}).format(sum?.toFixed(2)) } ₽</span>
                                    </div>
                                    <div className="dropdown-cart-action">
                                        <NavLink  to={CART_ROUTE}>
                                            <a href="" className="btn btn-outline-primary-2">Просмотр корзины</a><br/>
                                        </NavLink>
                                    </div>
                                    { user._user?.username ? user.items?.length >= 5 ?
                                    <NavLink  to={CHECKOUT_ROUTE}>
                                        <div className="dropdown-cart-action">
                                                <a href=""
                                                   className="btn btn-outline-primary-2">Оформить заказ
                                                    <i style={{marginRight: "-1px"}} className="icon-long-arrow-right"></i>
                                                </a>
                                        </div>
                                    </NavLink> :
                                            <div onClick={errorClick} className="dropdown-cart-action">
                                                <a href style={{color: "#c96"}}
                                                   className="btn btn-outline-primary-2">Оформить заказ
                                                    <i style={{marginRight: "-1px"}} className="icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        : data?.length >= 5 ?
                                        <NavLink  to={CHECKOUT_ROUTE}>
                                            <div className="dropdown-cart-action">
                                                <a href=""
                                                   className="btn btn-outline-primary-2">Оформить заказ
                                                    <i style={{marginRight: "-1px"}} className="icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </NavLink> :
                                            <div onClick={errorClick} className="dropdown-cart-action">
                                                <a href style={{color: "#c96"}}
                                                   className="btn btn-outline-primary-2">Оформить заказ
                                                    <i style={{marginRight: "-1px"}} className="icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                    }
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
