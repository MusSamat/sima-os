import React, {useContext, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, PURCHASES_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, WISHLIST_ROUTE, LOGIN_ROUTE, MYACOUNT_ROUTE, SUBCATEGORY_ROUTE} from "../utils/Const";
import "../App.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import logo from "../assets/sima_logo.png"
import what from "../assets/WhatsApp.png"
import { BsChevronDown } from "react-icons/bs";




const Header = observer(() => {

    const{user} = useContext(Context)
    const{product} = useContext(Context)

    let sum = 0
   
    

    useEffect(() => {
        user.getUserData()
        user.getCartData()
        // user.getWishlistData()
        product.subcategoryFilter()
        product.getSubcategory()
        product.getCategory()
    }, [])
    
  return (
      <div className="App" >
            


             <header className="header" style={{position: "fixed", marginTop: "0px", marginLeft: "0px", zIndex: "999"}}>
             <div className="header-top">
                 <div className="container eki">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <div className="header lefft">
                                <a>Bishkek</a>
                                
                            </div>
                        </div><br/>
                        <div style={{marginRight: "7px", marginTop: "-5px", fontSize: "16px"}} className="header">
                            <i class="icon-phone"></i>
                        </div>
                        <div style={{marginRight: "10px"}} className="header">
                            <a >+996709999915</a>
                        </div>
                        <div  className="header">
                            <a >+996999998815</a>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <ul>
                                    <li>
                                    <a  data-toggle="modal"><i class="icon-user"></i></a>
                                        {user.isAuth ? <NavLink className="voiti"  to={MYACOUNT_ROUTE}>МОЙ АККАУНТ</NavLink>
                                        : <NavLink className="voiti" to={LOGIN_ROUTE}>ВОЙТИ</NavLink>}</li>
                                    
                                    <li className="gmail" >simacompany@bk.ru</li>
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
                            <img style={{width: "100px", height: "40px"}} src={logo}/> 
                            
                        </NavLink>
                        
                    </div>
                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows ">
                                <li className="megamenu-container ">
                                    <NavLink  className="sf-with" style={{fontSize: "16px"}} to={HOME_ROUTE}> <a class="sf-with-ul">ГЛАВНАЯ</a></NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink className="sf-with" style={{fontSize: "16px"}} to={SUBCATEGORY_ROUTE}><a class="sf-with-ul">КАТАЛОГ </a></NavLink>                                  
                                    
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink  className="sf-with" to={NEWS_ROUTE}><a style={{fontSize: "16px"}} class="sf-with-ul">НОВОСТИ</a></NavLink>

                                </li >
                                <li className="megamenu-container ">
                                    <NavLink  className="sf-with" to={ABOUT_ROUTE}><a style={{fontSize: "16px"}} class="sf-with-ul">О Компании</a></NavLink>
                                </li >
                                <li className="megamenu-container ">
                                    <a style={{fontSize: "16px"}} class="sf-with-ul">СОТРУДНИЧЕСТВО</a>
                                        <ul  style={{marginLeft: "690px", marginTop: "-15px", color: "white", width: "40px" }}>
                                            
                                                <Link to={PURCHASES_ROUTE} >
                                                    <li   ><a className="Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#777" }}>Условия покупки</a></li>
                                                </Link>
                                                <Link  to={DELIVERY_ROUTE} >
                                                    <li  ><a className="Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#777" }}>Условия доставки</a></li>
                                                </Link>
                                                <Link  to={CONTACT_ROUTE}>
                                                    <li  ><a className="Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#777" }}> Контакты</a></li>
                                                </Link>
                                            
                                        </ul>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        {/* <div className="header-search">
                            <a  className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label for="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required/>
                                </div>
                            </form>
                        </div> */}
                        <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{user.list.length}</span>
                        </NavLink>

                        <div className="dropdown cart-dropdown">
                            <NavLink to={CART_ROUTE}><a  className="dropdown-toggle" >
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">{user.items.length}</span>
                                {
                                    user.items.map((item, index) => {
                                        sum = sum + item.product?.price * item.quantity
                                       })
                                }
                                <span className="cart-txt">{sum.toFixed(2)}</span>
                                </a>
                            </NavLink>

                            <div  className="dropdown-menu dropdown-menu-right">
                                <div style={{overflowY: "auto", height: "230px"}} >
                               {user.items.map((c, index)=>
                                <div key={index}   className="dropdown-cart-products">
                                    <div className="product">
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
                                            <a  className="product-image">
                                                <img src={`${process.env.REACT_APP_BASE_URL}${c.product?.images[0].images[0]}`} alt="product"/>
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
                                    
                                    <NavLink style={{width: "167px"}} className="btn btn-outline-primary-2" to={CHECKOUT_ROUTE}>ОФОРМИТЬ ЗАКАЗ</NavLink>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <a
                href="whatsapp://send?text=Здравствуйте, я хочу стать частью команды Яндекс Такси Олимпик Парк&phone=+996501342534&abid=+996501342534"
                class="btn-whatsapp-link"
              >
                Написать на Whatsapp
              </a>
        <Link className="whatsapp"      
           to={{pathname: "https://wa.me/+996-705-555829"}} target="_blank"
        >
            <img src={what}/>
        </Link>
    </div>
  );
})

export default Header;
