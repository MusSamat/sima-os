import React, {useContext, useEffect} from "react";
import { Link, NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, PURCHASES_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE, CART_ROUTE, CHECKOUT_ROUTE, WISHLIST_ROUTE, LOGIN_ROUTE, MYACOUNT_ROUTE, SUBCATEGORY_ROUTE} from "../utils/Const";
import "../App.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import logo from "../assets/logo1.png"
import what from "../assets/WhatsApp.png"
import mobile_menu from "../Http/mobile_menu";




const Header = observer(() => {

    const{user} = useContext(Context)
    const{product} = useContext(Context)

    let sum = 0
   
    

    useEffect(() => {
        mobile_menu()
        user?.getUserData()
        user?.getCartData()
        // user.getWishlistData()
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
      <div  >
            


             {/* <header className="header" style={{position: "fixed", marginTop: "0px", marginLeft: "0px", zIndex: "999"}}>


                <div className="header-bottom sticky-header">
                  <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <i className="icon-bars"></i>
                        </button>
                        <NavLink exact className="logo" to={HOME_ROUTE}>
                            <img style={{width: "100px", height: "40px"}} src={logo}/> 
                            
                        </NavLink>
                        
                    </div>
                    <div className="header-center ">
                        <nav className="main-nav ">
                            <ul className="menu sf-arrows  ">
                                <li className="megamenu-container ">
                                    <NavLink exact className="sf-with"  style={{fontSize: "16px"}} to={HOME_ROUTE}> <a className="sf-with-ul">ГЛАВНАЯ</a></NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink className="sf-with" style={{fontSize: "16px"}} to={SUBCATEGORY_ROUTE}><a className="sf-with-ul">КАТАЛОГ </a></NavLink>                                  
                                    
                                </li>
                                <li className="megamenu-container">
                                    <NavLink exact className="sf-with" to={NEWS_ROUTE}><a style={{fontSize: "16px"}} className="sf-with-ul">НОВОСТИ</a></NavLink>

                                </li >
                                <li className="megamenu-container ">
                                    <NavLink exact className="sf-with" to={ABOUT_ROUTE}><a style={{fontSize: "16px"}} className="sf-with-ul">О  нас</a></NavLink>
                                </li >
                                <li className="megamenu-container ">
                                    <NavLink exact className="sf-with" to={CONTACT_ROUTE}><a style={{fontSize: "16px"}} className="sf-with-ul">Контакты</a></NavLink>
                                </li >
                                <li className="megamenu-container ">
                                    <a style={{fontSize: "16px"}} className="sf-with-ul">СОТРУДНИЧЕСТВО</a>
                                        <ul className="menu sf-arrows "  style={{marginLeft: "690px", marginTop: "-15px", color: "white", width: "40px" }}>
                                            
                                                <Link to={PURCHASES_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#777" }}>Условия покупки</a></li>
                                                </Link>
                                                <Link  to={DELIVERY_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with  Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#777" }}>Условия доставки</a></li>
                                                </Link>
                                            
                                        </ul>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        {user.isAuth ? <NavLink   to={MYACOUNT_ROUTE}><a style={{fontSize: "30px", color: "#666666"}} data-toggle="modal"><i sty className="icon-user"></i></a></NavLink>
                            : <NavLink  to={LOGIN_ROUTE}><a style={{fontSize: "30px", color: "#666666"}} data-toggle="modal"><i className="icon-user"></i></a></NavLink>}
                        
                        <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{user.list?.length || '0'}</span>
                        </NavLink>

                        <div className="dropdown cart-dropdown">
                            <NavLink to={CART_ROUTE}><a  className="dropdown-toggle" >
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">{user.items?.length || '0'}</span>
                                {
                                    user.items?.map((item, index) => {
                                        sum = sum + item.product?.price * item.quantity
                                       })
                                }
                                <span className="cart-txt">{sum.toFixed(2)}</span>
                                </a>
                            </NavLink>

                            <div  className="dropdown-menu dropdown-menu-right">
                                <div style={{overflowY: "auto", height: "230px"}} >
                               {user.items?.map((c, index)=>
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
                                        <a href="" className="btn-remove" title="Remove Product"></a>
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
        </header> */}



        <header style={{position: "fixed", marginTop: "0px", marginLeft: "0px", zIndex: "999", boxShadow: "0px 0px 36px rgba(0, 0, 0, 0.15)"}} className="header mt-30">
            <div className="header-bottom ">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <NavLink exact className="logo" to={HOME_ROUTE}>
                            <img style={{width: "100px", height: "50px"}} src={logo}/> 
                            
                        </NavLink>
                        
                    </div>
                    <div className="header-center">
                        <nav className="main-nav">
                        <ul className="menu sf-arrows  ">
                                <li className="megamenu-container ">
                                    <NavLink exact className="sf-with"  style={{fontSize: "18px", fontWeight: "400"}} to={HOME_ROUTE}> <a className="sf-with-ul">Главная</a></NavLink>
                                </li>
                                <li className="megamenu-container ">
                                    <NavLink className="sf-with" style={{fontSize: "18px"}} to={SUBCATEGORY_ROUTE}><a className="sf-with-ul">Каталог </a></NavLink>                                  
                                    
                                </li>
                                <li className="megamenu-container">
                                    <NavLink exact className="sf-with" to={NEWS_ROUTE}><a style={{fontSize: "18px"}} className="sf-with-ul">Новости</a></NavLink>

                                </li >
                                {/* <li className="megamenu-container ">
                                    <NavLink exact className="sf-with" to={ABOUT_ROUTE}><a style={{fontSize: "18px"}} className="sf-with-ul">Сотрудничество</a></NavLink>
                                </li >
                                <li className="megamenu-container ">
                                    <NavLink exact className="sf-with" to={CONTACT_ROUTE}><a style={{fontSize: "18px"}} className="sf-with-ul">Контакты</a></NavLink>
                                </li > */}
                                <li className="megamenu-container ">
                                    <a style={{fontSize: "18px"}} className="sf-with-ul">Сотрудничество</a>
                                        <ul className="menu sf-arrows "  style={{marginLeft: "600px", marginTop: "-10px", color: "white", width: "40px" }}>
                                                <Link  to={ABOUT_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with  Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#000000" }}>О нас</a></li>
                                                </Link>
                                                <Link  to={CONTACT_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with  Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#000000" }}>Контакты</a></li>
                                                </Link>
                                                <Link to={PURCHASES_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#000000" }}>Условия покупки</a></li>
                                                </Link>
                                                <Link  to={DELIVERY_ROUTE} >
                                                    <li className="megamenu-container " ><a className="sf-with  Uslovia" style={{cursor: "pointer", fontSize: "16px", color: "#000000" }}>Условия доставки</a></li>
                                                </Link>
                                            
                                        </ul>

                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        {user.isAuth ? <NavLink   to={MYACOUNT_ROUTE}><a style={{fontSize: "30px" }} data-toggle="modal"><i style={{color: "#000000"}} className="icon-user"></i></a></NavLink>
                            : <NavLink  to={LOGIN_ROUTE}><a style={{fontSize: "30px" }} data-toggle="modal"><i style={{color: "#000000"}} className="icon-user"></i></a></NavLink>}<br/>
                        
                        <NavLink className="wishlist-link" to={WISHLIST_ROUTE}>
                            <i style={{color: "#000000"}} className="icon-heart-o"></i>
                            <span className="wishlist-count">{user.list?.length || '0'}</span>
                        </NavLink>
                        <div className="dropdown cart-dropdown mr-10">
                            <NavLink to={CART_ROUTE}><a  className="dropdown-toggle " >
                                <i style={{color: "#000000"}} className="icon-shopping-cart"></i>
                                <span className="cart-count">{user.items?.length || '0'}</span>
                                {
                                    user.items?.map((item, index) => {
                                        sum = sum + item.product?.price * item.quantity
                                       })
                                }
                                <span className="cart-txt">{sum.toFixed(2)}</span>
                                </a>
                            </NavLink>

                            <div  className="dropdown-menu dropdown-menu-right">
                                <div style={{overflowY: "auto", height: "230px"}} >
                               {user.items?.map((c, index)=>
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
                                        <a href="" className="btn-remove" title="Remove Product"></a>
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
                className="btn-whatsapp-link"
              >
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
