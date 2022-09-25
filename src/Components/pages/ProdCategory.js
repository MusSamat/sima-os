import { observer } from 'mobx-react-lite';
import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import "../../App.css";
import Mobile from './Mobile';
import mobile_menu from '../../Http/mobile_menu';
import {Modal, Button} from "react-bootstrap";
import { FcLike } from "react-icons/fc";




const ProdCategory = observer(() => {
    const {user} =  useContext(Context)
    const {product} =  useContext(Context)
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    const openModal = (id) => {
        setLgShow(true)
        user.getOrderDataId(id)
     }

     


    
    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        user.getUserData()
        product.fetchTodoCatalog( user.isAuth).then(() => {
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
        product.fetchTodo().then(() => {
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
    
        product.getSubcategory()
        product.getSubcategoryId()
            
    
      }, []); 

    return (
        <div  className="page-content mt-7">
             <main  className="main ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 ">
                                <div className="products mb-3 ">
                                    <div className="row justify-content-center ">  
                                        </div>
                                    </div>
                                    
                                    <div class="products mb-3">
                                        <div class="row justify-content-center">
                                        {product.products.map((prod, index) =>
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
                                                            {/* {prod.is_favorite ? 
                                                                <FcLike s onClick={(e) => deleteWish(e, prod.id)} style={{fontSize: "30px", cursor: "pointer", marginBottom: "20px"}}/>
                                                            : <span style={{cursor: "pointer"}} onClick={(e) => addWishlist(e, prod.id)} class="icon-box-icon">
                                                                <i class="icon-heart-o"></i>
                                                                </span>} */}
                                                                 {/*  */}
                                                                <a  onClick={() => openModal()} className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                            </div>
                                                            <div class="product-action">
                                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
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
                                        {product.productSorted.filter(i => i.id).map((prod, index) =>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <div class="product product-7 text-center">
                                                    <Link to={{pathname: `/catalog/${prod.seasoncategory}/${prod.title}`}} key={index}>
                                                        <figure class="product-media">
                                                            <a href="">
                                                                <img src={prod.image} alt="Product image" class="product-image"/>
                                                            </a>
                                                        </figure>
                                                        <div class="product-body">
                                                            <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                    </div>

                                



                            </div>
                            <aside  className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop"> 
                                    <div className="widget widget-clean ">
                                    
                                        
                                        <div className="widget widget-collapsible">
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible ">

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">

                                                        <nav className="mobile-nav">
                                                            <ul className="mobile-menu">
                                                                
                                                                <li>
                                                                    <a style={{color: "black", cursor: "pointer"}}>Все</a>
                                                                    <ul>
                                                                        {product.productSorted.filter(i => i.id).map((c, index) =>

                                                                            <li  key={index}><a style={{color: "black", cursor: "pointer", fontSize: "16px", padding: "0px 3rem"}}>{c.title}</a></li>
                                                                    
                                                                        )}
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </nav>


                                                        
                                                    <label onClick={() =>product.fetchTodo()} className="custom-control-label vse s-title" style={{ fontWeight:"300", color: "#000000"}} >ВСЕ</label> 
                                                        {product.subcategory.map((c, index) =>
                                                                <div  key={index} className="custom-control custom-checkbox">
                                                                    
                                                                   <label onClick={() => product.getSubcategoryId(c.id) } className="custom-control-label s-title" style={{ fontWeight:"300", color: "#000000"}} > {c.title} {c.year}</label>
                                                                    <span style={{ fontWeight:"300"}} className="item-count">({c.count})</span>
                                                                </div>
                                                                
                                                            
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                           
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
            <Mobile/>
        </div>
       
        
    )
})

export default  ProdCategory
