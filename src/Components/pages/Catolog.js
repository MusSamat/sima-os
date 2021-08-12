import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../index';
import {Link} from 'react-router-dom';
import "../../App.css";
import Slider from '@material-ui/core/Slider';
import {makeStyles} from '@material-ui/core/styles';
import {SUBCATEGORY_ROUTE} from "../../utils/Const";
import mobile_menu from '../../Http/mobile_menu';
import {Modal, Button} from "react-bootstrap";
import QuickView from './quickView';
import {FcLike} from "react-icons/fc";
import {CgMathPlus} from "react-icons/cg";
import {FiMinus} from "react-icons/fi";
import axios from 'axios';
import Pagination from './Pagination';
import Modall from './Modal'
import {toast} from "react-toastify";
import {Accordion} from "@material-ui/core";

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
    const [input, setInput] = useState("")
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

    const [currentSeason, setCurrentSeason] = useState(1)
    const [allSeason, setAllSeason] = useState(3)

    const [isActive, setIsActive] = useState(false);
    const [Active, setActive] = useState("all");
    const [name, setName] = useState("");

    const classes = useStyles();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.products.slice(indexOfFirstPost, indexOfLastPost)

    const indexLastSeason = currentSeason * allSeason;
    const indexFirstSeason = indexLastSeason - allSeason
    let seasonFour = product.subcategory.slice(indexFirstSeason, indexLastSeason)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    const toggleClass = () => {
        setActive(!Active);
    };


    const seasonPage = (e) => {
        e.preventDefault();
        console.log(seasonFour)
        seasonFour = product.subcategory

    }
    console.log(seasonFour)


    const paginate = (e, pageNumber) => {
        setCurrentPage(pageNumber)
        e.preventDefault();
    }


    const [value, setValue] = useState([500, 2000]);


    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        product.priceFilter(newValue);
    };

    const allProduct = (e) => {
        product.getActualProducts(user.isAuth)
        setActive("all")
        e.preventDefault();
    }
    const allNovelty = (e) => {
        product.getNoveltyProducts(user.isAuth)
        setActive("novelty")
        e.preventDefault();
    }
    const allPopular = (e) => {
        product.getPopularProducts(user.isAuth)
        setActive("popular")
        e.preventDefault();
    }
    const allDiscount = (e) => {
        product.discountTodo(user.isAuth)
        setActive("discount")
        e.preventDefault();
    }
    const typeOfProduct = (e, title) => {
        product.fetchTodoCatalog(title, user.isAuth)
        setActive("typeProduct")
        setName(title)
        e.preventDefault();
    }




    const search = (e) => {
        product.searchFilter(input)
        e.preventDefault();
    }

    const openModal = (id) => {
        setLgShow(true)
        user.getOrderDataId(id)
        console.log(id)
    }

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    let data = JSON.parse(localStorage.getItem('order'))

    const addCardLocal = (proId, price, color, title, count) => {
        // let data = JSON.parse(localStorage.getItem('order'))
        let productId = product.productOrder.map((i) => i.product)
        if(data === null){
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
                if(Active === "all"){
                    product.getActualProducts(user.isAuth)
                } else if(Active === "novelty"){
                    product.getNoveltyProducts(user.isAuth)
                } else if(Active === "popular"){
                    product.getPopularProducts(user.isAuth)
                } else if(Active === "discount") {
                    product.discountTodo(user.isAuth)
                } else if(Active === "typeProduct"){
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
                if(Active === "all"){
                    // product.fetchTodoCatalog(title, user.isAuth)
                    product.getActualProducts(user.isAuth)
                } else if(Active === "novelty"){
                    product.getNoveltyProducts(user.isAuth)
                } else if(Active === "popular"){
                    product.getPopularProducts(user.isAuth)
                } else if(Active === "discount") {
                    product.discountTodo(user.isAuth)
                }else if(Active === "typeProduct"){
                    product.fetchTodoCatalog(name, user.isAuth)
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

    let route = props.location.popular


    useEffect(() => {
        window.scrollTo(0, 0)
        mobile_menu()
        user.getWishlistData()
        user.getUserData()
        product.fetchTodo()
        if (route === "discount") {
            product.discountTodo()
        } else if (!route) {
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
            product.getPopularProducts(user.isAuth)
        } else if (route === "novelty") {
            product.getNoveltyProducts(user.isAuth)
        }else if (route === "catalog") {
            product.getActualProducts(user.isAuth)
        }
        // product.getActualProducts()
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
    // let quantity = 5
    let percent
    product.discount.map((i) => i.percent === percent)
    return (
        <div>
            <main className="main">
                <div className="page-content ">
                    <div className="container">
                        <nav>
                        <ol className="breadcrumb ">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="">Каталог</a></li>
                        </ol>
                        </nav>
                        <div className="row">
                            <div className="col-lg-9">
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
                                                        <Link to={{pathname: '/product/' + prod.id}}>
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
                                                            <a onClick={() => openModal()}
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

                                                    <Modal
                                                        show={lgShow}
                                                        onHide={handleClose}
                                                        dialogClassName="modal-90w "
                                                        aria-labelledby="example-custom-modal-styling-title"
                                                        fullscreen={true}
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-custom-modal-styling-title">
                                                                Custom Modal Styling
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <p>
                                                                Ipsum molestiae natus adipisci modi eligendi? Debitis
                                                                amet quae unde
                                                                commodi aspernatur enim, consectetur. Cumque deleniti
                                                                temporibus
                                                                ipsam atque a dolores quisquam quisquam adipisci
                                                                possimus
                                                            </p>
                                                        </Modal.Body>
                                                    </Modal>


                                                    <div class="product-body">
                                                        <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        <div class="product-price">
                                                            {user.isAuth ? prod.discount ?
                                                                <><p
                                                                    style={{textDecoration: "line-through"}}>{prod.price} ₽</p>
                                                                    <p>{Math.round(prod.price - (prod.price * prod.percent / 100))}.00
                                                                        ₽</p></> :
                                                                `${prod.price} ₽` : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)}
                                    </div>
                                </div>

                                <Pagination postsPerPage={postsPerPage} totalPosts={product.products.length}
                                            paginate={paginate}/>
                            </div>
                            <aside className="col-lg-3 order-lg-first mt-3">
                                <div className="sidebar sidebar-shop">


                                    <div className="accordion accordions">
                                        <div className="accordion-item">
                                            <div
                                                className="accordion-title d-flex justify-content-sm-between "
                                                onClick={() => setIsActive(!isActive)}
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
                                            <div style={{cursor: "pointer"}}
                                                 className={Active === "all" ? "btn-wrap active" : "btn-wrap "}>
                                                <a name={"vse"} onClick={allProduct}
                                                   className="btn btn-outline-dark nan"><span>Все</span></a>
                                            </div>
                                            <div style={{cursor: "pointer"}}
                                                 className={Active === "novelty" ? "btn-wrap active" : "btn-wrap "}>
                                                <a name={"novelty"} onClick={allNovelty}
                                                   className="btn btn-outline-dark nan"><span>Новинки</span></a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div style={{cursor: "pointer"}}
                                                 className={Active === "popular" ? "btn-wrap active" : "btn-wrap "}>
                                                <a name={"popular"} onClick={allPopular}
                                                   className="btn btn-outline-dark nan"><span>Популярное</span></a>
                                            </div>
                                            <div style={{cursor: "pointer"}}
                                                 className={Active === "discount" ? "btn-wrap active" : "btn-wrap "}>
                                                <a name={"discount"} onClick={allDiscount}
                                                   className="btn btn-outline-dark nan"><span>Скидки</span></a>
                                            </div>
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
                                        <p className="filter mt-1">ФИЛЬТР ПО ЦЕНЕ: {value[0]} ₽ {value[1]} ₽</p>
                                    </div>

                                    <div className="wrappe mt-3">
                                        <div className="accordions">
                                            {product.subcategory.map((item, index) =>
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
                                            )}
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
