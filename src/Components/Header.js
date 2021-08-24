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
import {FaTimes} from "react-icons/fa";


const Header = observer(() => {

    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [input, setInput] = useState("")


    let sum = 0
    let data = JSON.parse(localStorage.getItem('order'))
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

    // window.addEventListener("click", function(){
    //     const byId = document.getElementById("inputId")
    //     const ids = document.getElementById("ids")
    //     if(byId !== "click" || ids !== "click"){
    //         user.setRoute(false)
    //     }
    //
    // });


    useEffect(() => {
        mobile_menu()
        // product.getActualProducts()
        if(user.isAuth){
            user?.getUserData()
            user?.getCartData()
            user.getWishlistData()
        }

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
        <div class="page-wrapper">
            {/*<header className="header">*/}
            {/*    <div className="header-bottom sticky-header">*/}
            {/*        <div className="container">*/}
            {/*            <div className="header-left">*/}
            {/*                <button className="mobile-menu-toggler">*/}
            {/*                    <span className="sr-only">Toggle mobile menu</span>*/}
            {/*                    <i className="icon-bars"></i>*/}
            {/*                </button>*/}

            {/*                <a href="index.html" className="logo">*/}
            {/*                    <img src="assets/images/demos/demo-8/logo.png" alt="Molla Logo" width="82" height="20"/>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <div className="header-center">*/}
            {/*                <nav className="main-nav">*/}
            {/*                    <ul className="menu sf-arrows">*/}
            {/*                        <li className="megamenu-container active">*/}
            {/*                            <a href="index.html" className="sf-with-ul">Home</a>*/}


            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a href="category.html" className="sf-with-ul">Shop</a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a href="product.html" className="sf-with-ul">Product</a>*/}

            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a href="#" className="sf-with-ul">Pages</a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a href="blog.html" className="sf-with-ul">Blog</a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a href="elements-list.html" className="sf-with-ul">Elements</a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </nav>*/}
            {/*            </div>*/}

            {/*            <div className="header-right">*/}
            {/*                <div className="header-search">*/}
            {/*                    <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>*/}
            {/*                    <form action="#" method="get">*/}
            {/*                        <div className="header-search-wrapper">*/}
            {/*                            <label htmlFor="q" className="sr-only">Search</label>*/}
            {/*                            <input type="search" className="form-control" name="q" id="q"*/}
            {/*                                   placeholder="Search in..." required/>*/}
            {/*                        </div>*/}
            {/*                    </form>*/}
            {/*                </div>*/}

            {/*                <a href="wishlist.html" className="wishlist-link">*/}
            {/*                    <i className="icon-heart-o"></i>*/}
            {/*                    <span className="wishlist-count">3</span>*/}
            {/*                </a>*/}

            {/*                <div className="dropdown cart-dropdown">*/}
            {/*                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown"*/}
            {/*                       aria-haspopup="true" aria-expanded="false" data-display="static">*/}
            {/*                        <i className="icon-shopping-cart"></i>*/}
            {/*                        <span className="cart-count">2</span>*/}
            {/*                        <span className="cart-txt">$ 164,00</span>*/}
            {/*                    </a>*/}

            {/*                    <div className="dropdown-menu dropdown-menu-right">*/}
            {/*                        <div className="dropdown-cart-products">*/}
            {/*                            <div className="product">*/}
            {/*                                <div className="product-cart-details">*/}
            {/*                                    <h4 className="product-title">*/}
            {/*                                        <a href="product.html">Beige knitted elastic runner shoes</a>*/}
            {/*                                    </h4>*/}

            {/*                                    <span className="cart-product-info">*/}
            {/*                                    <span className="cart-product-qty">1</span>*/}
            {/*                                    x $84.00*/}
            {/*                                </span>*/}
            {/*                                </div>*/}

            {/*                                <figure className="product-image-container">*/}
            {/*                                    <a href="product.html" className="product-image">*/}
            {/*                                        <img src="assets/images/products/cart/product-1.jpg" alt="product"/>*/}
            {/*                                    </a>*/}
            {/*                                </figure>*/}
            {/*                                <a href="#" className="btn-remove" title="Remove Product"><i*/}
            {/*                                    className="icon-close"></i></a>*/}
            {/*                            </div>*/}

            {/*                            <div className="product">*/}
            {/*                                <div className="product-cart-details">*/}
            {/*                                    <h4 className="product-title">*/}
            {/*                                        <a href="product.html">Blue utility pinafore denim dress</a>*/}
            {/*                                    </h4>*/}

            {/*                                    <span className="cart-product-info">*/}
            {/*                                    <span className="cart-product-qty">1</span>*/}
            {/*                                    x $76.00*/}
            {/*                                </span>*/}
            {/*                                </div>*/}

            {/*                                <figure className="product-image-container">*/}
            {/*                                    <a href="product.html" className="product-image">*/}
            {/*                                        <img src="assets/images/products/cart/product-2.jpg" alt="product"/>*/}
            {/*                                    </a>*/}
            {/*                                </figure>*/}
            {/*                                <a href="#" className="btn-remove" title="Remove Product"><i*/}
            {/*                                    className="icon-close"></i></a>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                        <div className="dropdown-cart-total">*/}
            {/*                            <span>Total</span>*/}

            {/*                            <span className="cart-total-price">$160.00</span>*/}
            {/*                        </div>*/}

            {/*                        <div className="dropdown-cart-action">*/}
            {/*                            <a href="cart.html" className="btn btn-primary">View Cart</a>*/}
            {/*                            <a href="checkout.html"*/}
            {/*                               className="btn btn-outline-primary-2"><span>Checkout</span><i*/}
            {/*                                className="icon-long-arrow-right"></i></a>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
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
                            <NavLink exact to={HOME_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
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
                                                 to={HOME_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}> <a className="sf-with-ul">Главная</a></NavLink>
                                    </li>
                                    <li className="megamenu-container ">
                                        <Link className="sf-with" style={{fontSize: "18px", color: "#000000"}}
                                              to={`${CATALOG_ROUTE}?products=products`}
                                              innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a className="sf-with-ul">Каталог </a></Link>

                                    </li>
                                    <li className="megamenu-container">
                                        <NavLink exact className="sf-with" to={NEWS_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a
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
                                            <Link to={ABOUT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>О нас</a></li>
                                            </Link>
                                            <Link to={CONTACT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with  Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>Контакты</a></li>
                                            </Link>
                                            <Link to={PURCHASES_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                                <li className="megamenu-container "><a className="sf-with Uslovia"
                                                                                       style={{
                                                                                           cursor: "pointer",
                                                                                           fontSize: "16px",
                                                                                           color: "#000000"
                                                                                       }}>Условия покупки</a></li>
                                            </Link>
                                            <Link to={DELIVERY_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
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

                            {/*<div className="search-box">*/}
                            {/*    <input className="search-txt" type="text" name="" placeholder="Type to search"/>*/}
                            {/*    <a className="search-btn" >*/}
                            {/*        <VscSearch className="icons" />*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                        <div className="divInput">
                            {/*{user.isRoute ?  <input onKeyDown={handleKeyDown} value={input} onChange={(e) => setInput(e.target.value)}type="text" className="inputFor" id="inputId"*/}
                            {/*                        placeholder="Search in..." />: null}*/}
                        </div>

                        <div className="header-right">
                            <div onClick={()=>user.setRoute(true)} className={ user.isRoute ? "search-box showed" : "search-box" }>
                                <input className="" type="text" onKeyDown={handleKeyDown} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search in..." />
                                <div className="search-btn">
                                    <VscSearch className="icons" />
                                </div>
                                {/*<div className="cancel-btn">*/}
                                {/*    <FaTimes className="icons" />*/}
                                {/*</div>*/}
                            </div>
                             {/*<div className="header-search">*/}
                             {/*   <a href="" className="search-toggle active" role="button"><i className="icon-search"></i></a>*/}
                             {/*   <form action="" method="get">*/}
                             {/*       <div className="header-search-wrapper show">*/}
                             {/*           <label  className="sr-only">Search</label>*/}
                             {/*           <input onKeyDown={handleKeyDown} value={input} onChange={(e) => setInput(e.target.value)} type="text" className="form-control"*/}
                             {/*                  placeholder="Search in..." />*/}
                             {/*       </div>*/}
                             {/*   </form>*/}
                             {/*</div>*/}

                            {/*{user.isRoute ? <VscSearch className="icons" id="ids" onClick={()=>user.setRoute(false)}/> : <VscSearch id="ids" className="icons" onClick={()=>user.setRoute(true)}/>}*/}
                            {user.isAuth ?
                                <NavLink to={MYACOUNT_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#000000"}} className="icon-user"></i></a></NavLink>
                                : <NavLink to={LOGIN_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a style={{fontSize: "30px"}} data-toggle="modal"><i
                                    style={{color: "#000000"}} className="icon-user"></i></a></NavLink>}<br/>

                            <NavLink className="wishlist-link" to={WISHLIST_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}>
                                <i style={{color: "#000000"}} className="icon-heart-o"></i>
                                <span className="wishlist-count">{user.list?.length || '0'}</span>
                            </NavLink>
                            <div className="dropdown cart-dropdown mr-10">
                                <NavLink to={CART_ROUTE} innerRef={node => node?.addEventListener('click', () => window.scrollTo({top: "0px"}))}><a className="dropdown-toggle ">
                                    <i style={{color: "#000000"}} className="icon-shopping-cart"></i>
                                    <span
                                        className="cart-count">{user.isAuth ? user.items?.length || '0' : data?.length || "0"}</span>
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
                                    <div className="dropdown-cart-action">
                                        <NavLink  to={CART_ROUTE}>
                                            <a href="" className="btn btn-outline-primary-2">Просмотр корзины</a><br/>
                                        </NavLink>
                                    </div>
                                    <NavLink  to={CHECKOUT_ROUTE}>
                                    <div className="dropdown-cart-action">

                                            <a href=""
                                               className="btn btn-outline-primary-2">Оформить заказ
                                                <i style={{marginRight: "-1px"}} className="icon-long-arrow-right"></i>
                                            </a>

                                    </div>
                                    </NavLink>


                                    {/*<div className="dropdown-cart-action" style={{display: "block"}}>*/}
                                    {/*    <NavLink  to={CART_ROUTE}>*/}
                                    {/*        /!* <a className="btn btn-primary" ></a>*/}
                                    {/*     <a href="#" class="btn btn-link">ПРОСМОТР КОРЗИНЫ</a> *!/*/}
                                    {/*        <a href="" class="btn btn-outline-dark btn-rounded mb-1">ПРОСМОТР*/}
                                    {/*            КОРЗИНЫ</a>*/}
                                    {/*    </NavLink><br/>*/}

                                    {/*    <NavLink  to={CHECKOUT_ROUTE}>*/}
                                    {/*        <a href="" class="btn btn-outline-dark btn-rounded">ОФОРМИТЬ ЗАКАЗ</a>*/}
                                    {/*    </NavLink>*/}

                                    {/*</div>*/}
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
