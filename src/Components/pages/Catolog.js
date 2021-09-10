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
import {FaStar} from "react-icons/fa";
import Loader from "../Loader/Loader";



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

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}


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
    const stars = Array(5).fill(0);
    const [vidTitle, setVidTitle] = useState("")

    const {search } = useLocation()
    const query = new URLSearchParams(search)

    const names = query.get('name')
    const produs = query.get('products')
    const sorted = query.get('sort')


    const classes = useStyles();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.products.slice(indexOfFirstPost, indexOfLastPost)

    let route = props.location.popular

    const toggleReadMore = () => {
        user.setRead(!user.isRead);
        user.setActive(false)
    };



    const toggle = (index, title, year) => {
        if (user.isClicked === index) {
            return user.setClicked(null)
        }
        localStorage.setItem('category', JSON.stringify(`${title + year}`));
        localStorage.removeItem('viewProduct')
        setBreadcrumb("")
        user.setClicked(index)
        setSeson(title + year)
        user.setActive(false)
        setVidTitle(title)
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

    const allProduct = (e, produs, bread) => {
        history.push({
            search: `?products=${produs}`
        })
        localStorage.setItem('category', JSON.stringify(bread));
        localStorage.removeItem('viewProduct')
        user.setActive(false)
        user.setClicked(false)
        setBreadcrumb(bread)
        product.getActual(produs)
        e.preventDefault();
    }

    const sortProducts = (e, des) => {
        e.preventDefault();
        user.setActive(false)
        user.setClicked(false)
        if(!produs){
            history.push({
                search: `?products=products&sort=${des}`
            })
            product.getAllProductsSort("products?", des)
        }else {
            history.push({
                search: `?products=${produs}&sort=${des}`
            })
        }

        product.getAllProductsSort(produs, des)
    }
    const typeOfProduct = (e, title) => {
        product.fetchTodoCatalog(title)
        setActive("typeProduct")
        localStorage.setItem('viewProduct', JSON.stringify(title));
        setName(title)
        e.preventDefault();
    }

    const allCategory = () => {
        user.setActive(!user.isActive)
        setSeson("Все категории")
        localStorage.setItem('category', JSON.stringify("Все категории"));
        setBreadcrumb("")
        user.setClicked(false)
        user.setRead(true)
    }


    const openModal = (id) => {
        setProdactId(id)
        setModalActive(true)

    }

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    let data = JSON.parse(localStorage.getItem('order'))
    let wish = JSON.parse(localStorage.getItem('wishlist'))

    const addCardLocal = (proId, price, color, title, count) => {
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

    const getItem = (id) => {

        const a = wish?.find(i => i.id === id)
        return a ? a.id : 0
    }
    const addWishlistLocal = (e, proId, is_favorite) => {

        const test  = currentPosts.find((i) => i.id === proId)
        if(test){
            test.is_favorite = true
        }
        product.productWishlist.push({
            id: proId,
            is_favorite: is_favorite,
        })
        let wish = JSON.parse(localStorage.getItem('wishlist'))
        if (wish === null) {
            wish = []
        }
        wish.push({id: proId, is_favorite: true,})
        localStorage.setItem('wishlist', JSON.stringify(wish));
        e.preventDefault();
    }

    const deleteWishLocal = async (e, proId) => {
        const test  = currentPosts?.find((i) => i.id === proId)
        if(test){
            test.is_favorite = false
        }
        wish = wish.filter((item) => item.id !== proId)
        await localStorage.setItem("wishlist", JSON.stringify(wish));
        if (wish.length === 0) {
            localStorage.removeItem("wishlist");
        }
        e.preventDefault();
    }

    const addWishlist = (e, id,) => {
        const test  = currentPosts.find((i) => i.id === id)
        if(test){
            test.is_favorite = true
        }
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
                product.getData(id)
                user.getWishlistData()
            })
            .catch(error => {
                console.log(error)
            })


    }
    const deleteWish = (e, id) => {
        const test  = currentPosts.find((i) => i.id === id)
        if(test){
            test.is_favorite = false
        }
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
    console.log(user.token?.token)

    useEffect(() => {
        if(produs === "discount"){
            localStorage.setItem('category', JSON.stringify("Скидки"));
        } else if (produs === "novelty"){
            localStorage.setItem('category', JSON.stringify("Новинки"));
        } else if(produs === "popular") {
            localStorage.setItem('category', JSON.stringify("Популярное"));
        }else if(produs === "products"){
            localStorage.setItem('category', JSON.stringify("Актуальные"));
        }
        user.getUserData()
        product.getActual(produs)
        window.scrollTo(0, 0)
        mobile_menu()
        if(user.token?.token){
            user.getWishlistData()
            user.getUserData()
        }
        if(user.token?.token){
            console.log("a")
        } else console.log("b")

        product.fetchTodo()
        if (names) {
            if(parseInt(names)){
                product.searchFilterArticul(names)
            }else {
                product.changeFilter(names)
            }
        } else {
            if (produs === "discount") {
                product.discountTodo()
            } else if (produs) {
                product.getActual(produs)
                    .then(() => {
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
            } else if (produs === "popular") {
                product.getPopularProducts()
                // setBreadcrumb("Популярное")
            } else if (produs === "novelty") {
                product.getNoveltyProducts()
                setBreadcrumb("Новинки")
            } else if (route === "all") {
                product.getActualProducts()
            }else{
                product.getActualProducts()
            }
        }
        product.fetchTodo()
        product.getSortedData()
        product.getSubcategory()

    }, []);
    let percent
    product.discount.map((i) => i.percent === percent)
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="page-content mt-3 ">
                    <div className="container">
                        <nav>

                        </nav>
                        <div className="row">
                            <div className="col-lg-9 overflow-hidden ">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="">СОРТИРОВКА:</a></li>
                                </ol>
                                <div className="toolbox">
                                    <div className="">
                                        <div className="toolbox-info">
                                            <button onClick={(e) => sortProducts(e,"asc")}
                                                    className={sorted === "asc" ? "novelti actived" : "novelti"}  >
                                                Цена: По Возрастанию
                                            </button>
                                            <button onClick={(e) => sortProducts( e,"desc")}
                                                    className={sorted === "desc" ? "novelti actived" : "novelti"}  >
                                                Цена: По Убыванию
                                            </button>
                                            <button onClick={(e) => sortProducts(e, "dis_asc")}
                                                    className={sorted === "dis_asc" ? "novelti actived" : "novelti"}  >
                                                Скидка: По Возрастанию
                                            </button>
                                            <button onClick={(e) => sortProducts(e,"dis_desc")}
                                                    className={sorted === "dis_desc" ? "novelti actived" : "novelti"} >
                                                Скидка: По Убыванию
                                            </button>
                                            <button onClick={(e) => sortProducts(e,"rat_desc")}
                                                    className={sorted === "rat_desc" ? "novelti actived" : "novelti"} >
                                                По Рейтингу
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div class="products mb-3">
                                    <div class="row justify-content-center">

                                        { product.isLoader ? <Loader/>
                                            : currentPosts.length ? currentPosts.map((prod, index) =>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <div class="product product-7 text-center black">
                                                    <figure key={index} class="product-media">
                                                        {prod.percent ? <div style={{textAlign: "center"}}
                                                                             class="product-label label-sale">{prod.percent} %</div> : ""}
                                                        <Link to={{
                                                            pathname: '/product/' + prod.id,
                                                            breadcrumb: breadcrumb,
                                                            seson: seson,
                                                            title: name,
                                                            produs: produs,
                                                            vidTitle: vidTitle,
                                                        }}>
                                                            <a>
                                                                <img
                                                                    src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`}
                                                                    alt="Product image" class="product-image"/>
                                                            </a>
                                                        </Link>
                                                        <div className="product-action-vertical">
                                                            {user.token?.token ? prod.is_favorite ?
                                                                <FcLike onClick={(e) => deleteWish(e, prod.id,)} style={{
                                                                    fontSize: "30px",
                                                                    cursor: "pointer",
                                                                    marginBottom: "20px"
                                                                }}/>
                                                                : <span style={{cursor: "pointer"}}
                                                                        onClick={(e) => addWishlist(e, prod.id, prod.is_favorite)}
                                                                        class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span> :
                                                                prod.is_favorite ?
                                                                <FcLike onClick={(e) => deleteWishLocal(e, prod.id)} style={{
                                                                    fontSize: "30px",
                                                                    cursor: "pointer",
                                                                    marginBottom: "20px"
                                                                }}/>
                                                                : <span style={{cursor: "pointer"}}
                                                                        onClick={(e) => addWishlistLocal(e, prod.id, prod.is_favorite)}
                                                                        class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>}
                                                            <a onClick={() => openModal(prod.id)}
                                                               className="btn-product-icon btn-quickview"
                                                               title="Quick view"><span>Quick view</span></a>

                                                        </div>

                                                        <div class="product-action">
                                                            {user.token?.token ?
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



                                                    <div class="product-body">
                                                        <Link to={{
                                                            pathname: '/product/' + prod.id,
                                                            breadcrumb: breadcrumb,
                                                            seson: seson,
                                                            title: name,
                                                            produs: produs
                                                        }}>
                                                            <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        </Link>
                                                        {prod.percent ? <div class="product-price"
                                                                             style={{color: "rgb(238, 162, 135)"}}>
                                                                <span className="new-price">{prod.discount_price} ₽</span>
                                                                <span className="old-price">{`${prod.price} ₽`}</span>




                                                            </div> :
                                                            <div className="product-price">{`${prod.price} ₽`}</div>}

                                                        <div className="ratings-container">
                                                            {
                                                                stars.map((_, index) => {
                                                                    return (
                                                                        <FaStar
                                                                            key={index}
                                                                            size={13}
                                                                            style={{
                                                                                marginRight: 3,
                                                                            }}
                                                                            color={index < Math.round(prod.average_review_score) ? colors.orange : colors.grey}
                                                                        />
                                                                    )
                                                                })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>) : <h2 className="s-title ">Продакт не найден</h2>}
                                    </div>
                                </div>
                                {modalActive &&
                                <Modal active={modalActive} setActive={setModalActive}
                                       id={prodactId}/>}
                                <Pagination postsPerPage={postsPerPage} totalPosts={product.products.length}
                                            paginate={paginate}/>
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
                                                <div style={{cursor: "pointer"}}>{user.isActive ?
                                                    <FiMinus style={{fontSize: "18px", color: "#8c8c8c;"}}/> :
                                                    <CgMathPlus style={{fontSize: "18px", color: "#8c8c8c; "}}/>}</div>
                                            </div>
                                            {user.isActive ? <div className="accordion-content">{
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
                                            }</div> : ""}
                                        </div>
                                    </div>


                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                                <button
                                                    onClick={(e) => allProduct(e,"products", "Актуальные")}
                                                        className={produs === "products" ? "novelti actived" : "novelti" && Active === "all" ? "novelti actived" : "novelti" && route === "Актуальные" ? "novelti actived" : "novelti"}>Все
                                                </button>
                                                <button
                                                    onClick={(e) => allProduct(e,"novelty", "Новинки")}
                                                        className={produs === "novelty" && "Новинки" ? "novelti actived" : "novelti" && Active === "novelty" ? "novelti actived" : "novelti" && route === "Новинки" ? "novelti actived" : "novelti"}>Новинки
                                                </button>

                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <button onClick={(e) => allProduct(e,"popular", "Популярное")}
                                                    className={produs === "popular" ? "novelti actived" : "novelti" && Active === "popular" ? "novelti actived" : "novelti" && route === "Популярное" ? "novelti actived" : "novelti"}>Популярное
                                            </button>

                                            <button onClick={(e) => allProduct(e,"discount", "Скидки")}
                                                    className={produs === "discount" ? "novelti actived" : "novelti" && Active === "discount" ? "novelti actived" : "novelti" && route === "Скидки" ? "novelti actived" : "novelti"}>Скидки
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
                                            {user.isRead ? product.subcategory.slice(0, 4).map((item, index) =>
                                                <div className="Aitem">
                                                    <div onClick={() => toggle(index, item.title, item.year)} className="Atitle">
                                                        <div className="year">{item.title} {item.year}</div>
                                                        <span>{user.isClicked === index ?
                                                            <FiMinus style={{fontSize: "18px", color: "#8c8c8c"}}/> :
                                                            <CgMathPlus
                                                                style={{fontSize: "18px", color: "#8c8c8c"}}/>}</span>
                                                    </div>
                                                    <div className={user.isClicked === index ? "Acontent show" : "Acontent"}>
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
                                                        <span>{user.isClicked === index ?
                                                            <FiMinus style={{fontSize: "18px", color: "#8c8c8c"}}/> :
                                                            <CgMathPlus
                                                                style={{fontSize: "18px", color: "#8c8c8c"}}/>}</span>
                                                    </div>
                                                    <div className={user.isClicked === index ? "Acontent show" : "Acontent"}>
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
                                                     className="year">{user.isRead ? "Все сезоны" : " Закрыть"}</div>
                                                <div style={{cursor: "pointer"}}>{user.isRead ?
                                                    <CgMathPlus style={{fontSize: "18px", color: "#8c8c8c"}}/> :
                                                    <FiMinus style={{fontSize: "18px", color: "#8c8c8c"}}/>}</div>
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
