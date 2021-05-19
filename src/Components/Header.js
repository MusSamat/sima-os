import React, {useContext, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, WISHLIST_ROUTE, LOGIN_ROUTE, MYACOUNT_ROUTE } from "../utils/Const";
import "../App.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";


const Header = observer(() => {

    const{user} = useContext(Context)

    let sum = 0

    

    useEffect(() => {
        user.getUserData()
        user.getCartData()
        user.getWishlistData()
    }, [])
    
  return (
      <div className="App" >
            


             <header className="header" style={{position: "fixed", marginTop: "0px", marginLeft: "0px", zIndex: "999"}}>
             <div className="header-top">
                 <div className="container eki">
                    <div className="header-left">
                        <div className="header-dropdown">
                            
                            <div className="header lefft">
                            <a >Bishkek</a>
                                
                            </div>
                        </div><br/>

                        <div className="header">
                            <a >+996709999915</a>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <a >Links</a>
                                <ul>
                                    <li>
                                        {user.isAuth ? <NavLink className="sf-with" to={MYACOUNT_ROUTE}><i className="icon-user"></i>МОЙ АККАУНТ</NavLink>
                                        : <NavLink className="sf-with" to={LOGIN_ROUTE}><i className="icon-user"></i>АВТОРИЗАЦИЯ</NavLink>}</li>
                                    
                                    <li><a href="contact.html">sima@gmail.com</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>


                <div className="header-bottom sticky-header">
                  <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            
                            <i className="icon-bars"></i>
                        </button>
                        <NavLink className="logo" to={HOME_ROUTE}>
                            <h3 style={{marginTop: "18px"}}>SIMA</h3>
                        </NavLink>
                        
                    </div>
                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li  className="megamenu-container">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={HOME_ROUTE}>ГЛАВНАЯ</NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={CATALOG_ROUTE}>КАТАЛОГ</NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={DELIVERY_ROUTE}>ДОСТАВКА</NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={CONTACT_ROUTE}>КОНТАКТЫ</NavLink>

                                </li>
                                <li className="megamenu-container ">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={NEWS_ROUTE}>НОВОСТИ</NavLink>

                                </li >
                                <li className="megamenu-container ">
                                    <NavLink style={{fontSize:"18px", color: "#473596"}} className="sf-with" to={ABOUT_ROUTE}>О КОМПАНИИ</NavLink>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search">
                            <a  className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label for="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required/>
                                </div>
                            </form>
                        </div>
                        <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{user.list.length}</span>
                        </NavLink>
                        {/* <a href="wishlist.html" className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">3</span>
                        </a> */}

                        <div className="dropdown cart-dropdown">
                            <a  className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">{user.items.length}</span>
                                {
                                    user.items.map((item, index) => {
                                        sum = sum + item.product.price * item.quantity
                                       })
                                }
                                <span className="cart-txt">{sum.toFixed(2)}</span>
                            </a>

                            <div  className="dropdown-menu dropdown-menu-right">
                                <div style={{overflowY: "auto", height: "350px"}} >
                               {user.items.map((c, index)=>
                                <div key={index}   className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a>{c.product.title}</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x ${c.product.price}
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a  className="product-image">
                                                <img src={`${process.env.REACT_APP_BASE_URL}${c.product?.images[0]}`} alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>
                                </div>)}
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>ИТОГО:</span>

                                    <span className="cart-total-price">{sum.toFixed(2)}</span>
                                </div>

                                <div className="dropdown-cart-action" style={{display: "block"}}>
                                    <NavLink style={{marginBottom: "9px"}} className="btn btn-primary" to={CART_ROUTE}>ПРОСМОТР КОРЗИНЫ</NavLink><br/>
                                    
                                    <NavLink className="btn btn-outline-primary-2" to={CHECKOUT_ROUTE}><span>ОФОРМИТЬ ЗАКАЗ</span><i className="icon-long-arrow-right"></i></NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  );
})

export default Header;
