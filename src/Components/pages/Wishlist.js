import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { toast } from "react-toastify";
import { userService } from "../../services/users";

const Wishlist = observer(() => {
  const { user } = useContext(Context);
  const { product } = useContext(Context);

  let wish = JSON.parse(localStorage.getItem("wishlist"));
  let data = JSON.parse(localStorage.getItem("order"));

  const deleteWish = (id) => {
    const data = {
      product: id,
    };
    userService
      .deleteUserWish(data)
      .then((res) => {
        user.getWishlistData();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const addCart = (e, id, color, size) => {
    const data = {
      product: [id],
      quantity: [size],
      color: [color],
    }; //     })
    userService
      .addCart(data)
      .then((response) => {
        user.getCartData();
        deleteWish(id);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  const deleteWishLocal = async (proId) => {
    wish = wish.filter((item) => item.id !== proId);
    await localStorage.setItem("wishlist", JSON.stringify(wish));
    product.getActualProducts();
  };

  const addCardLocal = (proId, price, color, title, count) => {
    let productId = product.productOrder?.map((i) => i.product);
    if (data === null) {
      data = [];
    }
    data.push({
      id: proId,
      quantity: count,
      color: color,
      title: title,
      price: price,
    });
    let found = -1;
    productId.map((item) => {
      if (item === proId) {
        found = item;
      }
    });
    if (found === -1) {
      localStorage.setItem("order", JSON.stringify(data));
      product.productOrder.push({
        product: proId,
        quantity: count,
        price: price,
        color: color,
        title: title,
      });
    } else {
      toast.warning("этот товар есть в карзина");
      found = -1;
    }
    deleteWishLocal(proId);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (user._user) {
      user.getWishlistData();
    }
    product.getActualProducts();
  }, []);
  return (
    <div className="page-wrapper">
      <main className="main mt-5">
        <div className="page-content">
          <div className="container">
            <table className="table table-wishlist table-mobile">
              <thead>
                <tr>
                  <th>Товар</th>
                  <th>Цена</th>
                  <th>Состояние на складе</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {user._user?.username
                  ? user.list?.map((l, index) => (
                      <tr key={index}>
                        <td className="product-col">
                          <div className="product">
                            <Link to={{ pathname: "/product/" + l.product.id }}>
                              <figure className="product-media">
                                <a>
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}${l.product?.image.image}`}
                                    alt="Product image"
                                  />
                                </a>
                              </figure>
                            </Link>
                            <h3 className="product-title poppi">
                              <a href="">{l.product.title} </a>
                            </h3>
                          </div>
                        </td>
                        <td className="price-col s-title">
                          {l.product.price} {l.quantity} ₽
                        </td>
                        <td className="stock-col">
                          <span className="in-stock">В наличии</span>
                        </td>
                        <td className="action-col">
                          <div className="dropdown">
                            <button
                              onClick={(e) =>
                                addCart(
                                  e,
                                  l.product.id,
                                  l.product.images[0].title,
                                  l.product.size.length
                                )
                              }
                              className="btn btn-block btn-outline-primary-2"
                            >
                              В КОРЗИНУ
                            </button>
                          </div>
                        </td>
                        <td className="remove-col">
                          <button
                            onClick={() => deleteWish(l.product.id)}
                            className="btn-remove"
                          >
                            <i className="icon-close">{}</i>
                          </button>
                        </td>
                      </tr>
                    ))
                  : product.products
                      ?.filter((i) => wish?.map((d) => d.id).includes(i.id))
                      .map((l, index) => (
                        <tr key={index}>
                          <td className="product-col">
                            <div className="product">
                              <Link to={{ pathname: "/product/" + l.id }}>
                                <figure className="product-media">
                                  <a>
                                    <img
                                      src={`${process.env.REACT_APP_BASE_URL}${l.image.image}`}
                                      alt="Product image"
                                    />
                                  </a>
                                </figure>
                              </Link>
                              <h3 className="product-title poppi">
                                <a href="">{l.title} </a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col s-title">{l.price} ₽</td>
                          <td className="stock-col">
                            <span className="in-stock">В наличии</span>
                          </td>
                          <td className="action-col">
                            <div className="dropdown">
                              <button
                                onClick={() =>
                                  addCardLocal(
                                    l.id,
                                    l.price,
                                    l.images[0].title,
                                    l.title,
                                    l.size.length
                                  )
                                }
                                className="btn btn-block btn-outline-primary-2"
                              >
                                В КОРЗИНУ
                              </button>
                            </div>
                          </td>
                          <td className="remove-col">
                            <button
                              onClick={() => deleteWishLocal(l.id)}
                              className="btn-remove"
                            >
                              <i className="icon-close">{}</i>
                            </button>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
});

export default Wishlist;
