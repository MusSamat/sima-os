import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import {
  CATALOG_ROUTE,
  CHECKOUT_ROUTE,
  GUARANTEE_ROUTE,
  VOZVRAT_ROUTE,
  PURCHASES_ROUTE,
} from "../../utils/Const";
import "../../App.css";
import { toast } from "react-toastify";
import { userService } from "../../services/users";

const Cart = observer(() => {
  const { user } = useContext(Context);
  const { product } = useContext(Context);
  const [count, setCount] = useState(product.subcategory);
  let sum = 0;

  let data = JSON.parse(localStorage.getItem("order"));
  let token = JSON.parse(localStorage.getItem("value"));

  const UpdateCart = (e) => {
    const data = {
      product: user.items.map((i) => i.product.id),
      quantity: user.items.map((i) => i.quantity),
      color: user.items.map((i) => i.color),
    };
    userService
      .updateCart(data)
      .then((response) => {
        console.log(response);
        user.getCartData();
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };
  const deleteCart = (id, color) => {
    const data = {
      product: id,
      color: color,
    };
    userService
      .deleteUserCart(data)
      .then((res) => {
        user.getCartData(token.user.id);
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const errorClick = () => {
    // toast.warning('Минимальный заказ 5 размерных рядов')
    alert("Минимальный заказ 5 размерных рядов");
  };

  const deleteLocal = async (e, id) => {
    let order = product.productOrder.filter((item) => item.product !== id);
    product.getActualProducts();
    data = data.filter((item) => item.id !== id);
    await localStorage.setItem("order", JSON.stringify(data));
    console.log(product.productOrder);

    if (data.length === 0) {
      localStorage.removeItem("order");
    }
    e.preventDefault();
  };

  const getItem = (id) => {
    const a = data?.find((i) => i.id === id);
    return a ? a.quantity : 0;
  };
  const getPrice = (id) => {
    const a = data?.find((i) => i.id === id);
    return a ? a.quantity * a.price : 0;
  };

  // console.log(user._user ? 'a' :"b")
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user._user?.username) {
      user.getCartData(token.user.id);
    }
    product.getActualProducts();
  }, []);
  return (
    <div>
      <main className="main">
        <div className="page-content">
          <div className="cart">
            <div className="container mt-7">
              <div></div>
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Товар</th>
                        <th>Свет</th>
                        <th>Цена</th>
                        <th>Количесиво</th>
                        <th>Подытог</th>
                      </tr>
                    </thead>

                    <tbody>
                      {user._user?.username
                        ? user.items?.map((c, index) => (
                            <tr>
                              <td key={index} className="product-col">
                                <div className="product">
                                  <Link
                                    to={{
                                      pathname: "/product/" + c.product.id,
                                    }}
                                  >
                                    <figure className="product-media">
                                      <a>
                                        <img
                                          src={`${process.env.REACT_APP_BASE_URL}${c.product?.image.image}`}
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                  </Link>
                                  <h3 className="product-title">
                                    <a>{c.product?.title}</a>
                                  </h3>
                                </div>
                              </td>
                              <td className="price-col s-title">{c.color}</td>
                              <td className="price-col s-title">
                                {c.product.price} Сом
                              </td>

                              <td>
                                <div className="count">
                                  <a
                                    style={{
                                      width: "30px",
                                      cursor: "pointer",
                                      fontSize: "18px",
                                      marginLeft: "7px",
                                    }}
                                    onClick={() =>
                                      user.changeItemQuantity(
                                        index,
                                        c.quantity - c.product.size.length
                                      )
                                    }
                                  >
                                    -
                                  </a>
                                  <span
                                    style={{
                                      width: "30px",
                                      marginRight: "7px",
                                      padding: "5px",
                                    }}
                                  >
                                    {c.quantity}
                                  </span>
                                  <a
                                    style={{
                                      marginLeft: "7px",
                                      width: "30px",
                                      cursor: "pointer",
                                      fontSize: "18px",
                                      marginTop: "5px",
                                    }}
                                    onClick={() =>
                                      user.changeItemQuantity(
                                        index,
                                        c.quantity + c.product.size.length
                                      )
                                    }
                                  >
                                    +
                                  </a>
                                </div>
                              </td>

                              <td
                                className="price-col s-title"
                                style={{ color: "#c96" }}
                              >
                                {(c.product.price * c.quantity).toFixed(2)} Сом
                              </td>
                              <td className="remove-col">
                                <button
                                  onClick={() =>
                                    deleteCart(c.product.id, c.color)
                                  }
                                  className="btn-remove"
                                >
                                  <i className="icon-close"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        : product.products
                            ?.filter((i) =>
                              data?.map((d) => d.id).includes(i.id)
                            )
                            .map((c, index) => (
                              <tr>
                                <td key={index} className="product-col">
                                  <div className="product">
                                    <Link to={{ pathname: "/product/" + c.id }}>
                                      <figure className="product-media">
                                        <a>
                                          <img
                                            src={`${process.env.REACT_APP_BASE_URL}${c.image.image}`}
                                            alt="Product image"
                                          />
                                        </a>
                                      </figure>
                                    </Link>
                                    <h3 className="product-title">
                                      <a>{c.title}</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col s-title">
                                  {data
                                    .filter((i) => i.id === c.id)
                                    .map((f) => f.color)}{" "}
                                </td>
                                <td className="price-col s-title">
                                  {c.price} Сом
                                </td>
                                <td>
                                  <div className="count">
                                    <button
                                      disabled={
                                        isNaN(c.quantity) ||
                                        c.quantity - c.size.length <= 0
                                      }
                                      style={{
                                        width: "30px",
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                        fontSize: "18px",
                                        marginLeft: "7px",
                                        border: "none",
                                      }}
                                      onClick={() =>
                                        product.changeProductQuantity(
                                          c.id,
                                          (isNaN(c.quantity)
                                            ? getItem(c.id)
                                            : c.quantity) - c.size.length
                                        )
                                      }
                                    >
                                      -
                                    </button>
                                    <span
                                      style={{
                                        width: "30px",
                                        marginRight: "7px",
                                        padding: "5px",
                                      }}
                                    >
                                      {isNaN(c.quantity)
                                        ? getItem(c.id)
                                        : c.quantity}
                                    </span>
                                    <a
                                      style={{
                                        marginLeft: "7px",
                                        width: "30px",
                                        cursor: "pointer",
                                        fontSize: "18px",
                                      }}
                                      onClick={() =>
                                        product.changeProductQuantity(
                                          c.id,
                                          (c.quantity
                                            ? c.quantity
                                            : getItem(c.id)) + c.size.length
                                        )
                                      }
                                    >
                                      +
                                    </a>
                                  </div>
                                </td>

                                <td
                                  className="price-col s-title"
                                  style={{ color: "#c96" }}
                                >
                                  {c.quantity
                                    ? c.quantity * c.price
                                    : getPrice(c.id)}{" "}
                                  Сом
                                </td>
                                <td className="remove-col">
                                  <button
                                    onClick={(e) => deleteLocal(e, c.id)}
                                    className="btn-remove"
                                  >
                                    <i className="icon-close"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                    </tbody>
                  </table>

                  <div className="cart-bottom">
                    <div className="cart-discount"></div>

                    {user._user?.username ? (
                      <a
                        onClick={(e) => UpdateCart(e)}
                        className="btn btn-outline-dark-2 pocuoki"
                      >
                        <span>ОБНОВИТЬ КОРЗИНУ</span>
                        <i className="icon-refresh"></i>
                      </a>
                    ) : null}
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Сумма Заказов</h3>

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Подытог:</td>

                          {user._user?.username
                            ? user.items?.map((item, index) => {
                                sum =
                                  sum + item?.product.price * item?.quantity;
                              })
                            : data?.map((item, index) => {
                                sum = sum + item?.price * item?.quantity;
                              })}
                          <td>
                            {" "}
                            {new Intl.NumberFormat("fr-CA", {
                              style: "decimal",
                            }).format(sum?.toFixed(2))}{" "}
                            Сом
                          </td>
                        </tr>

                        <tr
                          className="summary-subtotal"
                          style={{ fontWeight: "500" }}
                        >
                          <td>Итого:</td>

                          <td>
                            {new Intl.NumberFormat("fr-CA", {
                              style: "decimal",
                            }).format(sum?.toFixed(2))}{" "}
                            Сом
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      style={{
                        margin: "10px",
                        fontSize: "16px",
                        color: "#000000",
                      }}
                    >
                      <Link to={PURCHASES_ROUTE}>Условия Оформить заказ</Link>
                    </p>

                    {user._user?.username ? (
                      user.items?.length >= 5 ? (
                        <NavLink to={CHECKOUT_ROUTE}>
                          <a
                            disabled={user.items?.length >= 5}
                            href=""
                            className="btn btn-outline-primary-2 btn-order btn-block"
                          >
                            Оформить заказ
                          </a>
                        </NavLink>
                      ) : (
                        <a
                          disabled={user.items?.length >= 5}
                          style={{ color: "#c96" }}
                          onClick={errorClick}
                          className="btn btn-outline-primary-2 btn-order btn-block"
                        >
                          Оформить заказ
                        </a>
                      )
                    ) : data?.length >= 5 ? (
                      <NavLink to={CHECKOUT_ROUTE}>
                        <a
                          disabled={user.items?.length >= 5}
                          href=""
                          className="btn btn-outline-primary-2 btn-order btn-block"
                        >
                          Оформить заказ
                        </a>
                      </NavLink>
                    ) : (
                      <a
                        disabled={user.items?.length >= 5}
                        style={{ color: "#c96" }}
                        onClick={errorClick}
                        className="btn btn-outline-primary-2 btn-order btn-block"
                      >
                        Оформить заказ
                      </a>
                    )}
                  </div>
                  <p
                    style={{
                      margin: "10px",
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    <Link to={VOZVRAT_ROUTE}>
                      Описания политики отмены/возврата товаров
                    </Link>
                  </p>
                  <p
                    style={{
                      margin: "10px",
                      fontSize: "16px",
                      color: "#000000",
                    }}
                  >
                    <Link to={GUARANTEE_ROUTE}>
                      Гарантии безопасности платежей;
                    </Link>
                  </p>

                  <NavLink to={`${CATALOG_ROUTE}?products=products`}>
                    <button className="btn btn-outline-dark-2 btn-block pocuoki mb-3">
                      <span>ПРОДОЛЖИТЬ ПОКУПКИ</span>
                      <i className="icon-refresh"></i>
                    </button>
                  </NavLink>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
});

export default Cart;
