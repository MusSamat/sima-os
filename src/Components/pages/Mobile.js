import React from 'react';
import { NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE } from "../../utils/Const"


export default function Mobile() {
    return (
        <div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label for="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required/>
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-menu ">
                            <li className="active ">
                                {/* <a href="index.html">Home</a> */}
                                <NavLink className="sf-with-ul"  to={HOME_ROUTE}>
                                    
                                    ГЛАВНАЯ
                                </NavLink>
                            </li>
                            <li >
                                <a >
                                <NavLink className="sf-with-ul" to={CATALOG_ROUTE}>
                                    <a >КАТАЛОГ</a>
                                </NavLink>
                                </a>
                            </li>
                            <li>
                                {/* <a href="product.html" className="sf-with-ul">Product</a> */}
                                <NavLink  to={DELIVERY_ROUTE}>ДОСТАВКА</NavLink>
                            </li>
                            <li>
                                {/* <a href="#">Pages</a> */}
                                <NavLink  to={CONTACT_ROUTE}>КОНТАКТЫ</NavLink>
                            </li>
                            <li>
                                {/* <a href="blog.html">Blog</a> */}
                                <NavLink  to={NEWS_ROUTE}>НОВОСТИ</NavLink>

                                
                            </li>
                            <li>
                                {/* <a href="elements-list.html">Elements</a> */}
                                <NavLink to={ABOUT_ROUTE}>О КОМПАНИЯ</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
