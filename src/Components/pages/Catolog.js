import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../index';
import {Link, useLocation, useHistory} from 'react-router-dom';
import "../../App.css";
import Slider from '@material-ui/core/Slider';
import {makeStyles} from '@material-ui/core/styles';
import mobile_menu from '../../Http/mobile_menu';
import {FcLike} from "react-icons/fc";
import {CgMathPlus} from "react-icons/cg";
import {FiMinus} from "react-icons/fi";
import axios from 'axios';
import Pagination from './Pagination';
import {toast} from "react-toastify";
import Modal from "./Modal"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles((theme) => ({
    MuiSlider: {
        color: "rgb(238, 162, 135)",
        padding: '0px 0px',
        marginTop: "10px",
        MuiSlidertrack: {
            height: '6px'
        },
        MuiSliderthumb: {
            border: "1px solid black",
            backroundColor: "white"
        }
    },
}));


function valuetext(value) {
    return `${value}°C`;
}


const Catolog = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = props.match.params.id
    const catId = props.match.params.catId
    const title = props.match.params.title
    const [lgShow, setLgShow] = useState(false);
    const [count, setCount] = useState(5)
    const [quantity, setQuantity] = useState(5)
    const [disable, setDisable] = useState([]);
    const [clicked, setClicked] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(60)

    const [isActive, setIsActive] = useState(false);
    const [Active, setActive] = useState("");
    const [name, setName] = useState("");
    const [modalActive, setModalActive] = useState(false)
    const [prodactId, setProdactId] = useState(0)
    const [isReadMore, setIsReadMore] = useState(true);
    const [breadcrumb, setBreadcrumb] = useState('Актуальные')
    const [seson, setSeson] = useState('')



    const classes = useStyles();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.products.slice(indexOfFirstPost, indexOfLastPost)

    let route = props.location.popular

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    console.log(props)

    let query = useQuery();

    const toggle = (index, title, year) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setBreadcrumb("")
        setClicked(index)
        setSeson(title + year)

    }

    const paginate = (e, pageNumber) => {
        setCurrentPage(pageNumber)
        e.preventDefault();
    }


    const [value, setValue] = useState([500, 2000]);


    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        product.priceFilter(newValue);
    };

    const history = useHistory();
    console.log(breadcrumb)
    const allProduct = (e) => {
        history.push({
            popular: "",
        })
        history.location.popular.replace()
        product.getActualProducts()
        setActive("all")
        setBreadcrumb("Актуальные")
        e.preventDefault();
    }
    const allNovelty = (e) => {
        product.getNoveltyProducts()
        setActive("novelty")
        setBreadcrumb("Новинки")
        history.push({
            popular: "",
        })
        e.preventDefault();
    }
    const allPopular = (e) => {
        product.getPopularProducts()
        setActive("popular")
        setBreadcrumb("Популярное")
        history.push({
            popular: "",
        })
        e.preventDefault();
    }
    const allDiscount = (e) => {
        product.discountTodo()
        setActive("discount")
        setBreadcrumb("Скидки")
        history.push({
            popular: "",
        })
        e.preventDefault();
    }
    const typeOfProduct = (e, title) => {
        product.fetchTodoCatalog(title)
        setActive("typeProduct")
        setName(title)
        e.preventDefault();
    }

    const allCategory = () => {
        setIsActive(!isActive)
        setSeson("Все категории")
        setBreadcrumb("")
    }


    const openModal = (id) => {
        setProdactId(id)
        setModalActive(true)

    }

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    let data = JSON.parse(localStorage.getItem('order'))

    const addCardLocal = (proId, price, color, title, count) => {
        // let data = JSON.parse(localStorage.getItem('order'))
        let productId = product.productOrder?.map((i) => i.product)
        if (data === null) {
            data = []
        }
        data.push({id: proId, quantity: count, color: color, title: title, price: price})
        let found = -1
        productId.map(item => {
            if (item === proId) {
                found = item
            }
        })
        if (found === -1) {
            localStorage.setItem('order', JSON.stringify(data));
            product.productOrder.push({
                product: proId,
                quantity: count,
                price: price,
                color: color,
                title: title
            })
        } else {
            toast.warning("этот товар есть в карзина")
            found = -1
        }


    }

    const addWishlist = (e, id) => {
        e.preventDefault();
        const data = JSON.stringify({
            product: String(id),
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                if (Active === "all") {
                    product.getActualProducts(user.isAuth)
                } else if (Active === "novelty") {
                    product.getNoveltyProducts(user.isAuth)
                } else if (Active === "popular") {
                    product.getPopularProducts(user.isAuth)
                } else if (Active === "discount") {
                    product.discountTodo(user.isAuth)
                } else if (Active === "typeProduct") {
                    product.fetchTodoCatalog(name, user.isAuth)
                }
                product.getData(id)
                user.getWishlistData()
            })
            .catch(error => {
                console.log(error)
            })


    }

    const deleteWish = (e, id) => {
        e.preventDefault();

        const data = JSON.stringify({
            product: id,
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            },
        })
            .then(res => {
                user.getWishlistData()
                if (Active === "all") {
                    // product.fetchTodoCatalog(title, user.isAuth)
                    product.getActualProducts()
                } else if (Active === "novelty") {
                    product.getNoveltyProducts()
                } else if (Active === "popular") {
                    product.getPopularProducts()
                } else if (Active === "discount") {
                    product.discountTodo()
                } else if (Active === "typeProduct") {
                    product.fetchTodoCatalog(name)
                }
            })
            .catch((e) => {
                console.error(e)
            })
    }


    const addCart = (e, id, color, count) => {
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(count)],
            color: [String(color)]


        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                setCount(count)
                user.getCartData()
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault();
    }


    useEffect(() => {


        window.scrollTo(0, 0)
        mobile_menu()
        user.getWishlistData()
        user.getUserData()
        product.fetchTodo()
        if (query.get("name")) {
            if (parseInt(query.get("name"))) {
                product.searchFilterArticul(parseInt(query.get("name")))
            } else {
                product.changeFilter(query.get("name"))
            }

        } else {
            console.log(route)
            if (route === "discount") {
                product.discountTodo()
                setBreadcrumb("Скидки")
            } else if (!route) {
                setBreadcrumb("Актуальные")
                product.getActualProducts().then(() => {
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
            } else if (route === "popular") {
                product.getPopularProducts()
                setBreadcrumb("Популярное")
            } else if (route === "novelty") {
                product.getNoveltyProducts()
                setBreadcrumb("Новинки")
            } else if (route === "all") {
                product.getActualProducts()
            }
        }
        product.getSortedData()
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

    }, []);
    let percent
    product.discount.map((i) => i.percent === percent)
    return (
        <div>
            <main className="main">
                <div className="page-content mt-3 ">
                    <div className="container">
                        <nav>
                            <ol className="breadcrumb ">
                                {/*<li className="breadcrumb-item"><a href="/">Главная</a></li>*/}
                                <li className="breadcrumb-item"><a href="">Каталог</a></li>
                            </ol>
                        </nav>
                        <div className="row">
                            <div className="col-lg-9 overflow-hidden">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                        </div>
                                    </div>
                                </div>

                                <div class="products mb-3">
                                    <div class="row justify-content-center">
                                        {console.log(currentPosts)}
                                        {currentPosts.map((prod, index) =>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <div class="product product-7 text-center">
                                                    <figure key={index} class="product-media">
                                                        {prod.percent ? <div style={{textAlign: "center"}}
                                                                             class="product-label label-sale">{prod.percent} %</div> : ""}
                                                        <Link to={{
                                                            pathname: '/product/' + prod.id,
                                                            breadcrumb: breadcrumb,
                                                            seson: seson,
                                                            title: name
                                                        }}>
                                                            <a>
                                                                <img
                                                                    src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`}
                                                                    alt="Product image" class="product-image"/>
                                                            </a>
                                                        </Link>
                                                        <div className="product-action-vertical">
                                                            {user.isAuth ? prod.is_favorite ?
                                                                <FcLike onClick={(e) => deleteWish(e, prod.id)} style={{
                                                                    fontSize: "30px",
                                                                    cursor: "pointer",
                                                                    marginBottom: "20px"
                                                                }}/>
                                                                : <span style={{cursor: "pointer"}}
                                                                        onClick={(e) => addWishlist(e, prod.id)}
                                                                        class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span> : ''}
                                                            {/*  */}
                                                            <a onClick={() => openModal(prod.id)}
                                                               className="btn-product-icon btn-quickview"
                                                               title="Quick view"><span>Quick view</span></a>

                                                        </div>

                                                        <div class="product-action">
                                                            {user.isAuth ?
                                                                <a style={{cursor: "pointer"}}
                                                                   onClick={(e) => addCart(e, prod.id, prod.images[0].title, prod.size.length)}
                                                                   className="btn-product btn-cart s-title "><span>В КОРЗИНУ </span></a>
                                                                :
                                                                <>
                                                                    <button key={prod.id}
                                                                            style={{cursor: "pointer", border: "none"}}
                                                                            onClick={() => addCardLocal(prod.id, prod.price, prod.images[0].title, prod.title, prod.size.length)}
                                                                            className="btn-product btn-cart s-title ">
                                                                        <span>В КОРЗИНУ</span></button>
                                                                </>

                                                            }
                                                        </div>
                                                    </figure>
                                                    {modalActive &&
                                                    <Modal active={modalActive} setActive={setModalActive}
                                                           id={prodactId}/>}


                                                    <div class="product-body">
                                                        <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        {prod.percent ? <div class="product-price"
                                                                             style={{color: "rgb(238, 162, 135)"}}>


                                                                {Math.round(prod.price - (prod.price * prod.percent / 100))}.00
                                                                ₽

                                                            </div> :
                                                            <div className="product-price">{`${prod.price} ₽`}</div>}
                                                    </div>
                                                </div>
                                            </div>)}
                                    </div>
                                </div>

                                <Pagination postsPerPage={postsPerPage} totalPosts={product.products.length}
                                            paginate={paginate}/>
                            </div>
                            <aside className="col-lg-3 order-lg-first  mt-3">
                                <div className="sidebar sidebar-shop salt ">


                                    <div className="accordion accordions">
                                        <div className="accordion-item">
                                            <div
                                                className="accordion-title d-flex justify-content-sm-between "
                                                onClick={() => allCategory()}
                                            >
                                                <div className="vse-button">Все категории</div>
                                                <div style={{cursor: "pointer"}}>{isActive ?
                                                    <FiMinus style={{fontSize: "18px", color: "#000000"}}/> :
                                                    <CgMathPlus style={{fontSize: "18px", color: "#000000 "}}/>}</div>
                                            </div>
                                            {isActive && <div className="accordion-content">{
                                                <ul>
                                                    {product.productSorted.map((c, index) =>

                                                        <li key={index}
                                                            onClick={(e) => typeOfProduct(e, c.title)}
                                                            key={index}><a className="category-vse" style={{
                                                            cursor: "pointer",
                                                            fontSize: "16px",
                                                            padding: "0px 1.5rem"
                                                        }}>{c.title}</a></li>
                                                    )}
                                                </ul>
                                            }</div>}
                                        </div>
                                    </div>


                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <button onClick={allProduct}
                                                    className={route === "all" ? "novelti actived" : "novelti" && Active === "all" ? "novelti actived" : "novelti" && route === "Актуальные" ? "novelti actived" : "novelti"}>Все
                                            </button>

                                            <button onClick={allNovelty}
                                                    className={route === "novelty" && "Новинки" ? "novelti actived" : "novelti" && Active === "novelty" ? "novelti actived" : "novelti" && route === "Новинки" ? "novelti actived" : "novelti"}>Новинки
                                            </button>

                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <button onClick={allPopular}
                                                    className={route === "popular" ? "novelti actived" : "novelti" && Active === "popular" ? "novelti actived" : "novelti" && route === "Популярное" ? "novelti actived" : "novelti"}>Популярное
                                            </button>

                                            <button onClick={allDiscount}
                                                    className={route === "discount" ? "novelti actived" : "novelti" && Active === "discount" ? "novelti actived" : "novelti" && route === "Скидки" ? "novelti actived" : "novelti"}>Скидки
                                            </button>

                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'block',
                                        width: 'fit-content'
                                    }}>
                                        <Slider
                                            value={value}
                                            onChange={rangeSelector}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuetext}
                                            className={classes.MuiSlider}
                                            min={500}
                                            max={2000}
                                        />
                                        <p className="filter mt-1">ФИЛЬТР ПО ЦЕНЕ: {value[0]}-{value[1]} ₽</p>
                                    </div>

                                    <div className="wrappe mt-3">
                                        <div className="accordions">
                                            {isReadMore ? product.subcategory.slice(0, 4).map((item, index) =>
                                                <div className="Aitem">
                                                    <div onClick={() => toggle(index)} className="Atitle">
                                                        <div className="year">{item.title} {item.year}</div>
                                                        <span>{clicked === index ?
                                                            <FiMinus style={{fontSize: "18px", color: "#000000"}}/> :
                                                            <CgMathPlus
                                                                style={{fontSize: "18px", color: "#000000 "}}/>}</span>
                                                    </div>
                                                    <div className={clicked === index ? "Acontent show" : "Acontent"}>
                                                        {product.prodcategory.filter(a => a.seasoncategory === item.id).map((prod) =>
                                                            <div
                                                                onClick={(e) => typeOfProduct(e, prod.title)}
                                                                className="prod" key={prod}>
                                                                {prod.title}
                                                            </div>)}

                                                    </div>

                                                </div>
                                            ) : product.subcategory.map((item, index) =>
                                                <div className="Aitem">
                                                    <div onClick={() => toggle(index, item.title, item.year)}
                                                         className="Atitle">
                                                        <div className="year">{item.title} {item.year}</div>
                                                        <span>{clicked === index ?
                                                            <FiMinus style={{fontSize: "18px", color: "#000000"}}/> :
                                                            <CgMathPlus
                                                                style={{fontSize: "18px", color: "#000000 "}}/>}</span>
                                                    </div>
                                                    <div className={clicked === index ? "Acontent show" : "Acontent"}>
                                                        {product.prodcategory.filter(a => a.seasoncategory === item.id).map((prod) =>
                                                            <div
                                                                onClick={(e) => typeOfProduct(e, prod.title)}
                                                                className="prod" key={prod}>
                                                                {prod.title}
                                                            </div>)}

                                                    </div>

                                                </div>
                                            )}

                                            <div
                                                style={{cursor: "pointer"}}
                                                className="accordion-title d-flex justify-content-sm-between "
                                                onClick={() => toggleReadMore()}
                                            >
                                                <div style={{fontWeight: "bold", color: "#000"}}
                                                     className="year">{isReadMore ? "Все сезоны" : " Закрыть"}</div>
                                                <div style={{cursor: "pointer"}}>{isReadMore ?
                                                    <CgMathPlus style={{fontSize: "18px", color: "#000000"}}/> :
                                                    <FiMinus style={{fontSize: "18px", color: "#000000 "}}/>}</div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>
        </div>
    )
})

export default Catolog;
