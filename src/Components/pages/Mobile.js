import React from 'react';
import { NavLink } from 'react-router-dom';
import {ABOUT_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, NEWS_ROUTE, SUBCATEGORY_ROUTE} from "../../utils/Const"


export default function Mobile() {
    return (
        <div>
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-menu ">
                            <li className="active ">
                                <NavLink className="sf-with-ul"  to={HOME_ROUTE}>
                                    ГЛАВНАЯ
                                </NavLink>
                            </li>
                            <li >
                                <NavLink className="sf-with-ul" to={SUBCATEGORY_ROUTE}>
                                    КАТАЛОГ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to={DELIVERY_ROUTE}>ДОСТАВКА</NavLink>
                            </li>
                            <li>
                                <NavLink  to={CONTACT_ROUTE}>КОНТАКТЫ</NavLink>
                            </li>
                            {/* <li>
                                <NavLink  to={NEWS_ROUTE}>НОВОСТИ</NavLink>
                            </li> */}
                            <li>
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
