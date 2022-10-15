import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CATALOG_ROUTE,
  DELIVERY_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  NEWS_ROUTE,
  PURCHASES_ROUTE,
} from "../../utils/Const";
import "../../App.css";
import { Context } from "../..";

export default function Mobile() {
  const { user } = useContext(Context);
  const handleClick = (event) => {
    user.setActive(false);
  };
  return (
    <div className={user.active ? "mmenu-active" : ""}>
      {/* <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span onClick={handleClick} className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <nav className="mobile-nav">
            <ul className="mobile-menu ">
              <li className="active ">
                <NavLink className="sf-with-ul" to={HOME_ROUTE}>
                  ГЛАВНАЯ
                </NavLink>
              </li>
              <li>
                <NavLink className="sf-with-ul" to={`${CATALOG_ROUTE}`}>
                  КАТАЛОГ
                </NavLink>
              </li>
              <li>
                <NavLink className="sf-with-ul" to={DELIVERY_ROUTE}>
                  ДОСТАВКА
                </NavLink>
              </li>
              <li>
                <NavLink className="sf-with-ul" to={CONTACT_ROUTE}>
                  КОНТАКТЫ
                </NavLink>
              </li>
              <li>
                <NavLink className="sf-with-ul" to={NEWS_ROUTE}>
                  НОВОСТИ
                </NavLink>
              </li>
              <li>
                <NavLink to={ABOUT_ROUTE}>СОТРУДНИЧЕСТВО</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}

      <div
        className={
          user.active
            ? "mmenu-active mobile-menu-container"
            : "mobile-menu-container"
        }
      >
        <div className="mobile-menu-wrapper">
          <span onClick={handleClick} className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li>
                <a href="/">ГЛАВНАЯ</a>
              </li>
              <li>
                <a href={`/catalog`}>КАТАЛОГ</a>
              </li>
              <li>
                <a href={NEWS_ROUTE}>НОВОСТИ</a>
              </li>
              <li>
                <a href>Сотрудничество</a>
                <ul>
                  <li>
                    <a href={ABOUT_ROUTE}>О нас</a>
                  </li>
                  <li>
                    <a href={CONTACT_ROUTE}>Контакты</a>
                  </li>
                  <li>
                    <a href={PURCHASES_ROUTE}>Условия покупки</a>
                  </li>
                  <li>
                    <a href={DELIVERY_ROUTE}>Условия доставки</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="social-icons">
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" target="_blank" title="Twitter">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              target="_blank"
              title="odnoklassniki"
            >
              <i className="icon-odnoklassniki"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
