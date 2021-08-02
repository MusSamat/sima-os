import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import "../../App.css";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import {SUBCATEGORY_ROUTE} from "../../utils/Const";
import mobile_menu from '../../Http/mobile_menu';
import {Modal, Button} from "react-bootstrap";
import QuickView from './quickView';
import { FcLike } from "react-icons/fc";
import axios from 'axios';
import Pagination from './Pagination';

const useStyles = makeStyles( (theme) =>({
    MuiSlider: {
      color: "#333333",
      padding: '0px 0px',
      MuiSlidertrack: {
        height: '6px'
    },
    MuiSliderthumb : {
        border: "1px solid black",
        backroundColor: "white"
    }
    },
    

    
    

  }));


function valuetext(value) {
    return `${value}°C`;
  }

 
const  Catolog = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState("")
    const id = props.match.params.id
    const catId = props.match.params.catId
    const title = props.match.params.title
    const [lgShow, setLgShow] = useState(false);
    const [count, setCount] = useState(5)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(60)

    const classes = useStyles();

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = product.products.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (e, pageNumber) => {
        setCurrentPage(pageNumber)
        e.preventDefault();
    }
    

    

    const [value, setValue] = useState([500,5000]);

  
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    product.priceFilter(newValue);
  };


    
    
    
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

    const addWishlist = (e, id) => {
        e.preventDefault();
        const data = JSON.stringify({
            product: String(id),
        })  
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                product.fetchTodoCatalog(catId, title, user.isAuth)
                product.getData(id)
                setCount(count)
                user.getWishlistData()
                product.getData(id)
        })
        .catch(error =>{ 
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
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },
        })
        .then(res => {
            product.fetchTodoCatalog(catId, title, user.isAuth)
            user.getWishlistData()
            product.getData(id)
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }
    

    const addCart = (e, id) => {
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(count)]
            
            
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCount(count)
                user.getCartData()
        })
        .catch(error =>{ 
            console.log(error)  
    })
    e.preventDefault();
    }

    let route = props.location.popular
    
    
    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        user.getUserData()
        product.fetchTodo()
        if(route === "discount"){
            product.discountTodo()
        }else if(route === "catalog"){
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
        })} else if(route === "popular"){
            product.getPopularProducts()
        } else if(route === "novelty"){
            product.getNoveltyProducts()
        }
        // product.getActualProducts()
        product.getSortedData()
        product.getSubcategory()
        
       
        
        
    
      }, []); 
      let percent
      product.discount.map((i) => i.percent === percent )
    return (
        <div>
             <main  className="main">
                <div className="page-content ">
                    <div className="container">
                        <ol className="breadcrumb mt-2 ml-3">
                            <li className="breadcrumb-item"><a href="/">Главная</a></li>
                            <li className="breadcrumb-item"><a href="">Каталог</a></li>
                        </ol>
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
                                                {currentPosts.map((prod, index) =>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <div class="product product-7 text-center">
                                                        <figure key={index} class="product-media">
                                                            {prod.percent ? <div style={{textAlign: "center"}} class="product-label label-sale">{prod.percent} %</div> : ""}
                                                            <Link to={{pathname: '/product/'+prod.id}} >
                                                                <a >
                                                                    <img src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`} alt="Product image" class="product-image"/>
                                                                </a>
                                                            </Link>
                                                            <div className="product-action-vertical">
                                                            {prod.is_favorite ? 
                                                                <FcLike  onClick={(e) => deleteWish(e, prod.id)} style={{fontSize: "30px", cursor: "pointer", marginBottom: "20px"}}/>
                                                            : <span style={{cursor: "pointer"}} onClick={(e) => addWishlist(e, prod.id)} class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>}
                                                                 {/*  */}
                                                                <a  onClick={() => openModal()} className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                            </div>
                                                            <div class="product-action">
                                                                <a onClick={(e) => addCart(e, prod.id)} href="#" className="btn-product btn-cart s-title "><span>В КОРЗИНУ</span></a>
                                                            </div>
                                                        </figure>

                                                        <Modal
                                                            show={lgShow}
                                                            onHide={handleClose}    
                                                            dialogClassName="modal-90w"
                                                            aria-labelledby="example-custom-modal-styling-title"
                                                        >
                                                            {/* <Modal.Body closeButton>
                                                                <QuickView/>
                                                            </Modal.Body> */}
                                                            <Modal.Header closeButton>
                                                                <Modal.Title id="example-custom-modal-styling-title">
                                                                    Custom Modal Styling
                                                                </Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                <p>
                                                                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                                                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                                                    ipsam atque a dolores quisquam quisquam adipisci possimus
                                                                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                                                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                                                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                                                    deleniti rem!
                                                                </p>
                                                                </Modal.Body>
                                                        </Modal>

                                                        


                                                    <div class="product-body">
                                                        <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        <div class="product-price">
                                                            {user.isAuth ? prod.discount ? 
                                                            <><p style={{textDecoration:"line-through"}}>{prod.price} ₽</p>
                                                            <p >{Math.round(prod.price - (prod.price * prod.percent/100))}.00 ₽</p></> :
                                                                 `${prod.price} ₽` : "" }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>

                                    <Pagination postsPerPage={postsPerPage} totalPosts={product.products.length} paginate={paginate}/>
                            </div>
                            <aside className="col-lg-3 order-lg-first mt-3">
                                <div className="sidebar sidebar-shop">

                                    <div >
                                        <div className="col-sm-10 col-md-8 col-lg-10">
                                            <form onSubmit={search}>
                                                    <input 
                                                        style={{width: "250px", paddingLeft: "-10px"}}
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Поиск..."  
                                                        value={input}
                                                        onChange={e => setInput(e.target.value)}
                                                        required/>
                                                    
                                                        <button style={{width: "250px", height: "40px"}} className="btn btn-primary form-control" type="submit">ПОИСК</button>
                                                    
                                               
                                            </form>
                                        </div>
                                    </div>

                                    
                                    
                                    <div className="widget widget-clean">
                                    
                                        
                                        <div className="widget widget-collapsible">
                                            
                                            

                                           
                                        </div>
                                    </div>

                                    <nav className="mobile-nav">
                                        <ul className="mobile-menu">
                                            
                                            <li>
                                                <a className="s-title" style={{color: "black", cursor: "pointer", paddingLeft: "2px"}}>Все</a>
                                                <ul>
                                                    {product.productSorted.map((c, index) =>

                                                        <li key={index} onClick={() => product.fetchTodoCatalog(c.seasoncategory, c.title, user.isAuth)}  key={index}><a className="category-vse" style={{color: "black", cursor: "pointer", fontSize: "16px", padding: "0px 1.5rem"}}>{c.title}</a></li>
                                                
                                                    )}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="row justify-content-center">
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="btn-wrap">
                                                <a  onClick={(e)=> product.getActualProducts(e)}  className="btn btn-outline-dark nan"><span>Все</span></a>
                                            </div>
                                            <div className="btn-wrap">
                                                <a onClick={(e) => product.getNoveltyProducts(e)}  className="btn btn-outline-dark nan"><span>Новинки</span></a>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6">
                                            <div className="btn-wrap ">
                                                <a onClick={(e) => product.getPopularProducts(e)}  className="btn btn-outline-dark nan"><span>Популярное</span></a>
                                            </div>
                                            <div className="btn-wrap ">
                                                <a onClick={(e) => product.discountTodo(e)} className="btn btn-outline-dark nan"><span>Скидки</span></a>
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
                                            max={2500} 
                                        />
                                        <p className="filter" >ФИЛЬТР ПО ЦЕНЕ: {value[0]} ₽ {value[1]} ₽</p>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        {/* <h3 className="widget-title">
                                            <Link to={SUBCATEGORY_ROUTE} >
                                                <a className="cate" data-toggle="collapse" href="#widget-1"  role="button" aria-expanded="true" aria-controls="widget-1">
                                                    Категория
                                                </a>
                                            </Link>
                                        </h3> */}

                                            <div className="collapse show" >
                                                <div className="widget-body">
                                                    <div className="filter-items filter-items-count">
                                                        <div className="filter-item">    
                                                            <nav className="mobile-nav">
                                                                <ul className="mobile-menu">
                                                                {product.subcategory.map((c, index) =><li>
                                                                     <a key={index} className="s-title" style={{color: "black", cursor: "pointer", paddingLeft: "2px"}}>{c.title} {c.year}</a>
                                                                        <ul>
                                                                            {product.prodcategory.filter(a => a.seasoncategory === c.id).map((prod) =>
                                                                            <li key={prod} onClick={() => product.fetchTodoCatalog(prod.seasoncategory, prod.title, user.isAuth)}  key={index}><a className="category-vse" style={{color: "black", cursor: "pointer", fontSize: "16px", padding: "0px 1.5rem"}}>{prod.title}</a></li>)}                                                                       
                                                                        </ul>
                                                                    </li>)}
                                                                </ul>
                                                            </nav>                                                  
                                                            {/* {product.subcategory.map((c, index) =>
                                                            <div  key={index} className="custom-control custom-checkbox">
                                                                <label onClick={() => product.fetchTodoCatalog(c.id, title)} className="custom-control-label s-title"  > {c.title} {c.year}</label>
                                                                <span  className="item-count">({product.changeFilterCount(c.id)?.count})</span>
                                                            </div>
                                                            )} */}
                                                        </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="cat-blocks-container">
                                            {/* <p onClick={() => product.changeDiscounted()} className=" s-title" style={{  cursor: "pointer", marginBottom: "30px", color: "#eea287"}}>ТОВАРЫ СО СКИДКОЙ</p>                                             */}
                                            {/* {product.discount.slice(0,4).map((discout, index)=>
                                                <div key={index}>
                                                <div  className="row">
                                                    <div  className="col-6 ">
                                                    <Link to={{pathname: '/product/'+ discout.id}}>
                                                        <a className="cat-block">
                                                            <figure>
                                                                <span>
                                                                    <img className="images-s" src={`${process.env.REACT_APP_BASE_URL}${discout.images[0].images[0]}`} alt="Category image"/>
                                                                </span>
                                                            </figure>
                                                        </a>
                                                        </Link>
                                                    </div>
                                                   
                                                    <div  className="col-5 ">
                                                        <h3 className="product-title"><a >{discout.title}</a></h3>
                                                        {user.isAuth ? <><p style={{textDecoration:"line-through"}}>{discout.price} ₽</p>
                                                        <p >{Math.round(discout.price - (discout.price * discout.percent/100))}.00 ₽</p></> : ''}
                                                    </div>
                                                    
                                                </div>
                                                </ div>
                                            )} */}
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

export default  Catolog;
