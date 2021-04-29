import React from "react";
import { NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, WISHLIST_ROUTE } from "../utils/Const";


function Header() {
  return (
      <div className="App" >
             <header className="header" style={{position: "fixed", marginTop: "0px", marginLeft: "0px", zIndex: "999"}}>
                <div className="header-bottom sticky-header">
                  <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            {/* <span classNameNmae="sr-only">Toggle mobile menu</span> */}
                            <i className="icon-bars"></i>
                        </button>
                        
                        <a href="index.html" className="logo">
                            <img src="assets/images/demos/demo-8/logo.png" alt="Molla Logo" width="82" height="20"/>
                        </a>
                    </div>
                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <NavLink className="sf-with-ul" to={HOME_ROUTE}>ГЛАВНАЯ</NavLink>
                                </li>
                                <li>
                                    <NavLink className="sf-with-ul" to={CATALOG_ROUTE}>КАТАЛОГ</NavLink>
                                </li>
                                <li>
                                    <NavLink className="sf-with-ul" to={DELIVERY_ROUTE}>ДОСТАВКА</NavLink>
                                </li>
                                <li>
                                    <NavLink className="sf-with-ul" to={CONTACT_ROUTE}>КОНТАКТЫ</NavLink>

                                </li>
                                <li>
                                    <NavLink className="sf-with-ul" to={NEWS_ROUTE}>НОВОСТИ</NavLink>

                                </li>
                                <li>
                                    <NavLink className="sf-with-ul" to={ABOUT_ROUTE}>О КОМПАНИЯ</NavLink>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-search">
                            <a href="/" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label for="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required/>
                                </div>
                            </form>
                        </div>
                        <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">3</span>
                        </NavLink>
                        {/* <a href="wishlist.html" className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">3</span>
                        </a> */}

                        <div className="dropdown cart-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">8</span>
                                <span className="cart-txt">$ 164,00</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>

                                <div className="dropdown-cart-action" style={{display: "block"}}>
                                    <NavLink className="btn btn-primary" to={CART_ROUTE}>ПРОСМОТР КОРЗИНЫ</NavLink><br/>
                                    {/* <a href="cart.html" className="btn btn-primary">View Cart</a> */}
                                    <NavLink className="btn btn-outline-primary-2" to={CHECKOUT_ROUTE}><span>ОФОРМИТЬ ЗАКАЗ</span><i className="icon-long-arrow-right"></i></NavLink>
                                    {/* <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
