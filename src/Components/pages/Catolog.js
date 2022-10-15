import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../index";
import { Link, useLocation, useHistory } from "react-router-dom";
import "../../App.css";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import mobile_menu from "../../Http/mobile_menu";
import { FcLike } from "react-icons/fc";
import { CgMathPlus } from "react-icons/cg";
import { FiMinus } from "react-icons/fi";
import axios from "axios";
import Pagination from "./Pagination";
import { toast } from "react-toastify";
import Modal from "./Modal";
import { FaStar } from "react-icons/fa";
import Loader from "../Loader/Loader";
import { productService } from "../../services/product";

const useStyles = makeStyles((theme) => ({
  MuiSlider: {
    color: "#c96",
    padding: "0px 0px",
    marginTop: "10px",
    MuiSlidertrack: {
      height: "6px",
    },
    MuiSliderthumb: {
      border: "1px solid black",
      backroundColor: "white",
    },
  },
}));

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function valuetext(value) {
  return `${value}°C`;
}

const Catolog = observer((props) => {
  const { product } = useContext(Context);
  const { user } = useContext(Context);
  const [count, setCount] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const [Active, setActive] = useState("");
  const [name, setName] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [prodactId, setProdactId] = useState(0);
  const [breadcrumb, setBreadcrumb] = useState("Актуальные");
  const [seson, setSeson] = useState("");
  const stars = Array(5).fill(0);
  const [vidTitle, setVidTitle] = useState("");

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const names = query.get("name");
  const produs = query.get("products");
  const sorted = query.get("sort");

  const classes = useStyles();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.products.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  let route = props.location.popular;

  const pathname = new URLSearchParams(props.location.search);
  const a = pathname.get("name");
  const activeFilterButton = props.location.search;

  const toggleReadMore = () => {
    user.setRead(!user.isRead);
    user.setActive(false);
  };

  const toggle = (index, title, year) => {
    if (user.isClicked === index) {
      return user.setClicked(null);
    }
    localStorage.setItem("category", JSON.stringify(`${title + year}`));
    localStorage.removeItem("viewProduct");
    setBreadcrumb("");
    user.setClicked(index);
    setSeson(title + year);
    user.setActive(false);
    setVidTitle(title);
  };

  const paginate = (e, pageNumber) => {
    localStorage.setItem("pagination", JSON.stringify(pageNumber));
    setCurrentPage(pageNumber);
    product.getPagination(e, pageNumber);
    e.preventDefault();
  };

  const [value, setValue] = useState([500, 3000]);
  const timerRef = useRef();
  const expensiveCallback = (value) => {
    setValue(value);
    product.getPriceFilters(value[0], value[1]);
  };

  const rangeSelector = (event, newValue) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      expensiveCallback(newValue);
    }, 250);
  };

  const history = useHistory();

  const allProduct = (e, produs, bread, active) => {
    if (produs !== "") {
      history.push({
        search: `${produs}=${active}`,
      });
    } else {
      history.push({
        search: "",
      });
    }

    localStorage.setItem("category", JSON.stringify(bread));
    localStorage.removeItem("viewProduct");
    setBreadcrumb(bread);
    e.preventDefault();
  };

  const sortProducts = (e, des) => {
    let pagi = JSON.parse(localStorage.getItem("pagination"));
    let view = JSON.parse(localStorage.getItem("viewProduct"));
    let sesonId = JSON.parse(localStorage.getItem("sesonId"));
    let prodId = JSON.parse(localStorage.getItem("prodId"));
    e.preventDefault();
    history.push({
      search: `&sort=${des}`,
    });
    // if (!view) {
    //   if (!produs) {
    //     history.push({
    //       search: `&sort=${des}`,
    //     });
    //     // product.getAllProductsSort("products?", des);
    //   } else {
    //     history.push({
    //       search: `&sort=${des}`,
    //     });
    //   }
    //   product.getAllProductsSort(produs, des);
    // } else {
    //   product.fetchTodoCatalog(sesonId, prodId, des);
    // }
  };

  const typeOfProduct = (e, title, prodId, id) => {
    product.fetchTodoCatalog(prodId, id);
    setActive("typeProduct");
    localStorage.setItem("viewProduct", JSON.stringify(title));
    localStorage.setItem("sesonId", JSON.stringify(prodId));
    localStorage.setItem("prodId", JSON.stringify(id));
    setName(title);
    e.preventDefault();
  };

  const allCategory = () => {
    user.setActive(!user.isActive);
    setSeson("Все категории");
    localStorage.setItem("category", JSON.stringify("Все категории"));
    setBreadcrumb("");
    user.setClicked(false);
    user.setRead(true);
  };

  const openModal = (id) => {
    setProdactId(id);
    setModalActive(true);
  };

  let data = JSON.parse(localStorage.getItem("order"));
  let wish = JSON.parse(localStorage.getItem("wishlist"));
  let tokenCatalog = JSON.parse(localStorage.getItem("value"));

  const addCardLocal = (proId, price, color, count, title) => {
    user.getImageLogo();
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
      toast.warning("этот товар уже в карзине");
      found = -1;
    }
  };

  const addWishlistLocal = (e, proId, is_favorite) => {
    user.getImageLogo();
    product.productWishlist.push({
      id: proId,
    });
    const test = currentPosts.find((i) => i.id === proId);
    if (test) {
      test.is_favorite = true;
    }
    product.productWishlist.push({
      id: proId,
      is_favorite: is_favorite,
    });
    let wish = JSON.parse(localStorage.getItem("wishlist"));
    if (wish === null) {
      wish = [];
    }
    wish.push({ id: proId, is_favorite: true });
    localStorage.setItem("wishlist", JSON.stringify(wish));
    e.preventDefault();
  };

  const deleteWishLocal = async (e, proId) => {
    user.getImageLogo();
    const test = currentPosts?.find((i) => i.id === proId);
    if (test) {
      test.is_favorite = false;
    }
    wish = wish.filter((item) => item.id !== proId);
    await localStorage.setItem("wishlist", JSON.stringify(wish));
    if (wish.length === 0) {
      localStorage.removeItem("wishlist");
    }
    e.preventDefault();
  };

  const addWishlist = (e, id) => {
    const test = currentPosts.find((i) => i.id === id);
    if (test) {
      test.is_favorite = true;
    }
    e.preventDefault();
    const data = {
      product: String(id),
    };
    productService
      .addWishList(data)
      .then((response) => {
        product.getData(id);
        user.getWishlistData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteWish = (e, id) => {
    const test = currentPosts.find((i) => i.id === id);
    if (test) {
      test.is_favorite = false;
    }
    e.preventDefault();
    const data = {
      product: id,
    };
    productService
      .deleteWishList(data)
      .then((res) => {
        user.getWishlistData();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const addCart = (e, id, color, count) => {
    const data = {
      product: [String(id)],
      quantity: [String(count)],
      color: [String(color)],
    };
    productService
      .addCartId(data)
      .then((response) => {
        setCount(count);
        user.getCartData(tokenCatalog.user.id);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    mobile_menu();
    if (a) {
      product.getActual(pathname ? `/?title__icontains=${a}` : "").then(() => {
        const scripts = [
          "/assets/js/jquery.elevateZoom.min.js",
          "/assets/js/bootstrap-input-spinner.js",
          "/assets/js/jquery.magnific-popup.min.js",
          "/assets/js/main.js",
          "/assets/js/bootstrap-input-spinner.js",
          "/assets/js/owl.carousel.min.js",
          "/assets/js/superfish.min.js",
          "/assets/js/jquery.waypoints.min.js",
          "/assets/js/jquery.hoverIntent.min.js",
          "/assets/js/bootstrap.bundle.min.js",
          "/assets/js/jquery.min.js",
        ];
        scripts.forEach((i) => {
          const s = document.createElement("script");
          s.src = i;
          document.body.appendChild(s);
        });
      });
    } else {
      product.getActualProducts(activeFilterButton).then(() => {
        const scripts = [
          "/assets/js/jquery.elevateZoom.min.js",
          "/assets/js/bootstrap-input-spinner.js",
          "/assets/js/jquery.magnific-popup.min.js",
          "/assets/js/main.js",
          "/assets/js/bootstrap-input-spinner.js",
          "/assets/js/owl.carousel.min.js",
          "/assets/js/superfish.min.js",
          "/assets/js/jquery.waypoints.min.js",
          "/assets/js/jquery.hoverIntent.min.js",
          "/assets/js/bootstrap.bundle.min.js",
          "/assets/js/jquery.min.js",
        ];
        scripts.forEach((i) => {
          const s = document.createElement("script");
          s.src = i;
          document.body.appendChild(s);
        });
      });
    }
    product.getSortedData();
  }, [a, activeFilterButton]);

  useEffect(() => {
    product.getActualProducts().then(() => {
      const scripts = [
        "/assets/js/jquery.elevateZoom.min.js",
        "/assets/js/bootstrap-input-spinner.js",
        "/assets/js/jquery.magnific-popup.min.js",
        "/assets/js/main.js",
        "/assets/js/bootstrap-input-spinner.js",
        "/assets/js/owl.carousel.min.js",
        "/assets/js/superfish.min.js",
        "/assets/js/jquery.waypoints.min.js",
        "/assets/js/jquery.hoverIntent.min.js",
        "/assets/js/bootstrap.bundle.min.js",
        "/assets/js/jquery.min.js",
      ];
      scripts.forEach((i) => {
        const s = document.createElement("script");
        s.src = i;
        document.body.appendChild(s);
      });
    });
  }, []);
  let percent;
  product.discount.map((i) => i.percent === percent);
  return (
    <div className="page-wrapper">
      <main className="main">
        <div className="page-content mt-3 ">
          <div className="container">
            <nav></nav>
            <div className="row">
              <div className="col-lg-9 overflow-hidden ">
                <div style={{ color: "#333333", fontWeight: "400" }}>
                  СОРТИРОВКА
                </div>
                <div className="toolbox ">
                  <div className="">
                    <div className="toolbox-info">
                      <button
                        onClick={(e) => sortProducts(e, "asc")}
                        className={
                          activeFilterButton === "?&sort=asc"
                            ? "rating actived"
                            : "rating"
                        }
                      >
                        Цена: по возрастанию
                      </button>
                      <button
                        onClick={(e) => sortProducts(e, "desc")}
                        className={
                          activeFilterButton === "?&sort=desc"
                            ? "rating actived"
                            : "rating"
                        }
                      >
                        Цена: по убыванию
                      </button>
                      <button
                        onClick={(e) => sortProducts(e, "dis_asc")}
                        className={
                          activeFilterButton === "?&sort=dis_asc"
                            ? "rating actived"
                            : "rating"
                        }
                      >
                        Скидка: по возрастанию
                      </button>
                      <button
                        onClick={(e) => sortProducts(e, "dis_desc")}
                        className={
                          activeFilterButton === "?&sort=dis_desc"
                            ? "rating actived"
                            : "rating"
                        }
                      >
                        Скидка: по убыванию
                      </button>
                      <button
                        onClick={(e) => sortProducts(e, "rat_desc")}
                        className={
                          activeFilterButton === "?&sort=rat_desc"
                            ? "rating actived"
                            : "rating"
                        }
                      >
                        По рейтингу
                      </button>
                    </div>
                  </div>
                </div>
                <div class="products mb-3">
                  <div class="row justify-content-center">
                    {product.isLoader ? (
                      <Loader />
                    ) : product.products.length ? (
                      product.products.map((prod, index) => (
                        <div class="col-6 col-md-4 col-lg-3">
                          <div class="product product-7 text-center black">
                            <figure key={index} class="product-media">
                              {prod.percent ? (
                                <div
                                  style={{ textAlign: "center" }}
                                  class="product-label label-sale"
                                >
                                  {prod.percent} %
                                </div>
                              ) : (
                                ""
                              )}
                              <Link
                                to={{
                                  pathname: "/product",
                                  breadcrumb: breadcrumb,
                                  seson: seson,
                                  title: name,
                                  produs: produs,
                                  vidTitle: vidTitle,
                                  id: prod.id,
                                }}
                              >
                                <a>
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}${prod?.image.image}`}
                                    alt="Product image"
                                    class="product-image"
                                  />
                                </a>
                              </Link>
                              <div className="product-action-vertical">
                                {user._user?.username ? (
                                  prod.is_favorite ? (
                                    <FcLike
                                      onClick={(e) => deleteWish(e, prod.id)}
                                      style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                        marginBottom: "20px",
                                      }}
                                    />
                                  ) : (
                                    <span
                                      style={{ cursor: "pointer" }}
                                      onClick={(e) =>
                                        addWishlist(
                                          e,
                                          prod.id,
                                          prod.is_favorite
                                        )
                                      }
                                      class="icon-box-icon"
                                    >
                                      <i class="icon-heart-o"></i>
                                    </span>
                                  )
                                ) : prod.is_favorite ? (
                                  <FcLike
                                    onClick={(e) => deleteWishLocal(e, prod.id)}
                                    style={{
                                      fontSize: "30px",
                                      cursor: "pointer",
                                      marginBottom: "20px",
                                    }}
                                  />
                                ) : (
                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={(e) =>
                                      addWishlistLocal(
                                        e,
                                        prod.id,
                                        prod.is_favorite
                                      )
                                    }
                                    class="icon-box-icon"
                                  >
                                    <i class="icon-heart-o"></i>
                                  </span>
                                )}
                                <a
                                  onClick={() => openModal(prod.id)}
                                  className="btn-product-icon btn-quickview"
                                  title="Quick view"
                                >
                                  <span>Quick view</span>
                                </a>
                              </div>

                              <div class="product-action">
                                {user._user?.username ? (
                                  <a
                                    style={{ cursor: "pointer" }}
                                    onClick={(e) =>
                                      addCart(
                                        e,
                                        prod.id,
                                        prod.image.color,
                                        prod.image.size_quantity
                                      )
                                    }
                                    className="btn-product btn-cart s-title "
                                  >
                                    <span>В КОРЗИНУ </span>
                                  </a>
                                ) : (
                                  <a
                                    key={prod.id}
                                    style={{
                                      cursor: "pointer",
                                      border: "none",
                                    }}
                                    onClick={() =>
                                      addCardLocal(
                                        prod.id,
                                        prod.price,
                                        prod.image.color,
                                        prod.image.size_quantity,
                                        prod.title
                                      )
                                    }
                                    className="btn-product btn-cart s-title "
                                  >
                                    <span>В КОРЗИНУ</span>
                                  </a>
                                )}
                              </div>
                            </figure>

                            <div class="product-body">
                              <Link
                                to={{
                                  pathname: "/product/" + prod.id,
                                  breadcrumb: breadcrumb,
                                  seson: seson,
                                  title: name,
                                  produs: produs,
                                }}
                              >
                                <h3 class="product-title ">
                                  <a href="">{prod.title}</a>
                                </h3>
                              </Link>
                              {prod.percent ? (
                                <div class="product-price">
                                  <span
                                    style={{ fontWeight: "500" }}
                                    className="new-price "
                                  >
                                    {prod.discount_price} Рубль
                                  </span>
                                  <span
                                    style={{ fontWeight: "500" }}
                                    className="old-price s-title"
                                  >{`${prod.price} Рубль`}</span>
                                </div>
                              ) : (
                                <div
                                  style={{ fontWeight: "500" }}
                                  className="product-price "
                                >{`${prod.price} Рубль`}</div>
                              )}

                              <div className="ratings-container">
                                {stars.map((_, index) => {
                                  return (
                                    <FaStar
                                      key={index}
                                      size={13}
                                      style={{
                                        marginRight: 3,
                                      }}
                                      color={
                                        index <
                                        Math.round(prod.average_review_score)
                                          ? colors.orange
                                          : colors.grey
                                      }
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h2 className="s-title ">Продукт не найден</h2>
                    )}
                  </div>
                </div>
                {modalActive && (
                  <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    id={prodactId}
                  />
                )}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={product.pagination}
                  paginate={paginate}
                  page={product.products}
                />
              </div>
              <aside className="col-lg-3 order-lg-first ">
                <div className="sidebar sidebar-shop salt ">
                  <div className="accordion accordions">
                    <div className="accordion-item">
                      <div
                        className="accordion-title d-flex justify-content-sm-between "
                        onClick={() => allCategory()}
                      >
                        <div className="vse-button">Все категории</div>
                        <div style={{ cursor: "pointer" }}>
                          {user.isActive ? (
                            <FiMinus
                              style={{ fontSize: "18px", color: "black" }}
                            />
                          ) : (
                            <CgMathPlus
                              style={{ fontSize: "18px", color: "black" }}
                            />
                          )}
                        </div>
                      </div>
                      {user.isActive ? (
                        <div className="accordion-content">
                          {
                            <ul>
                              {product.productSorted.map((c, index) => (
                                <li
                                  onClick={(e) =>
                                    typeOfProduct(
                                      e,
                                      c.title,
                                      c.seasoncategory,
                                      c.id
                                    )
                                  }
                                  key={index}
                                >
                                  <a
                                    className="category-vse"
                                    style={{
                                      fontWeight: "400",
                                      color: "#333333",
                                      cursor: "pointer",
                                      fontSize: "16px",
                                      padding: "0px 1.5rem",
                                    }}
                                  >
                                    {c.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          }
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <button
                        onClick={(e) => allProduct(e, "", "Актуальные")}
                        className={
                          activeFilterButton === ""
                            ? "novelti actived"
                            : "novelti" && Active === "all"
                            ? "novelti actived"
                            : "novelti" && route === "Актуальные"
                            ? "novelti actived"
                            : "novelti"
                        }
                      >
                        Все
                      </button>
                      <button
                        onClick={(e) =>
                          allProduct(e, "novelty", "Новинки", true)
                        }
                        className={
                          activeFilterButton === "?novelty=true"
                            ? "novelti actived"
                            : "novelti" && Active === "novelty"
                            ? "novelti actived"
                            : "novelti" && route === "Новинки"
                            ? "novelti actived"
                            : "novelti"
                        }
                      >
                        Новинки
                      </button>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <button
                        onClick={(e) =>
                          allProduct(e, "popular", "Популярное", true)
                        }
                        className={
                          activeFilterButton === "?popular=true"
                            ? "novelti actived"
                            : "novelti" && Active === "popular"
                            ? "novelti actived"
                            : "novelti" && route === "Популярное"
                            ? "novelti actived"
                            : "novelti"
                        }
                      >
                        Популярное
                      </button>

                      <button
                        onClick={(e) =>
                          allProduct(e, "?percent__gt", "Скидки", 0)
                        }
                        className={
                          activeFilterButton === "?percent__gt=0"
                            ? "novelti actived"
                            : "novelti" && Active === "discount"
                            ? "novelti actived"
                            : "novelti" && route === "Скидки"
                            ? "novelti actived"
                            : "novelti"
                        }
                      >
                        Скидки
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "block",
                      width: "fit-content",
                    }}
                  >
                    <Slider
                      value={value}
                      onChange={rangeSelector}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      getAriaValueText={valuetext}
                      className={classes.MuiSlider}
                      min={500}
                      max={3000}
                    />
                    <p className="filter mt-1">
                      ФИЛЬТР ПО ЦЕНЕ: {value[0]}-{value[1]} Рубль
                    </p>
                  </div>

                  <div className="wrappe mt-3">
                    <div className="accordions">
                      {user.isRead
                        ? product.subcategory.slice(0, 4).map((item, index) => (
                            <div className="Aitem">
                              <div
                                onClick={() =>
                                  toggle(index, item.title, item.year)
                                }
                                className="Atitle"
                              >
                                <div
                                  style={{
                                    fontWeight: "500",
                                    color: "black",
                                    fontSize: "16px",
                                  }}
                                >
                                  {item.title} {item.year}
                                </div>
                                <span>
                                  {user.isClicked === index ? (
                                    <FiMinus
                                      style={{
                                        fontSize: "18px",
                                        color: "black",
                                      }}
                                    />
                                  ) : (
                                    <CgMathPlus
                                      style={{
                                        fontSize: "18px",
                                        color: "black",
                                      }}
                                    />
                                  )}
                                </span>
                              </div>
                              <div
                                className={
                                  user.isClicked === index
                                    ? "Acontent show"
                                    : "Acontent"
                                }
                              >
                                {product.prodcategory
                                  .filter((a) => a.seasoncategory === item.id)
                                  .map((prod) => (
                                    <div
                                      onClick={(e) =>
                                        typeOfProduct(
                                          e,
                                          prod.title,
                                          prod.seasoncategory,
                                          prod.id
                                        )
                                      }
                                      key={prod}
                                      className="prod"
                                    >
                                      {prod.title}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ))
                        : product.subcategory.map((item, index) => (
                            <div className="Aitem">
                              <div
                                onClick={() =>
                                  toggle(index, item.title, item.year)
                                }
                                className="Atitle"
                              >
                                <div
                                  style={{
                                    fontWeight: "500",
                                    color: "black",
                                    fontSize: "16px",
                                  }}
                                >
                                  {item.title} {item.year}
                                </div>
                                <span>
                                  {user.isClicked === index ? (
                                    <FiMinus
                                      style={{
                                        fontSize: "18px",
                                        color: "black",
                                      }}
                                    />
                                  ) : (
                                    <CgMathPlus
                                      style={{
                                        fontSize: "18px",
                                        color: "black",
                                      }}
                                    />
                                  )}
                                </span>
                              </div>
                              <div
                                className={
                                  user.isClicked === index
                                    ? "Acontent show"
                                    : "Acontent"
                                }
                              >
                                {product.prodcategory
                                  .filter((a) => a.seasoncategory === item.id)
                                  .map((prod) => (
                                    <div
                                      onClick={(e) =>
                                        typeOfProduct(
                                          e,
                                          prod.title,
                                          prod.seasoncategory,
                                          prod.id
                                        )
                                      }
                                      key={prod}
                                      className="prod"
                                    >
                                      {prod.title}..
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ))}

                      <div
                        style={{ cursor: "pointer" }}
                        className="accordion-title d-flex justify-content-sm-between "
                        onClick={() => toggleReadMore()}
                      >
                        <div
                          style={{
                            fontWeight: "500",
                            color: "black",
                            fontSize: "20px",
                          }}
                        >
                          {user.isRead ? "Все сезоны" : " Закрыть"}
                        </div>
                        <div style={{ cursor: "pointer" }}>
                          {user.isRead ? (
                            <CgMathPlus
                              style={{ fontSize: "18px", color: "black" }}
                            />
                          ) : (
                            <FiMinus
                              style={{ fontSize: "18px", color: "black" }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>
    </div>
  );
});

export default Catolog;
