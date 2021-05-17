import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE } from '../../utils/Const';
import axios from "axios";
import "../../App.css";

const Product = observer(({match}) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = match.params.id
    const [count, setCount] = useState(5)
    console.log(id)

    
    function updateValue(e) {
        console.log(e.target.value);
      }


    const addWishlist = (e) => {
        const id = match.params.id
        const data = JSON.stringify({
            product: id, 
            
            
        })  
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCount(count)
                console.log(response)
        })
        .catch(error =>{ 
            console.log(error)  
    })
    e.preventDefault();
    }

    const addCart = (e) => {
        console.log(count)
        const id = match.params.id
        const data = JSON.stringify({
            product: id,
            quantity: count, 
            
            
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
                console.log(response)
        })
        .catch(error =>{ 
            console.log(error)  
    })
    e.preventDefault();
    }
    
    
    useEffect(() => {
        const log = document.getElementById('qty');
        console.log(log)
         log?.addEventListener('change', updateValue);

        user.getUserData()
        product.getData(id).then(() => {
            const scripts = [
                '/assets/js/jquery.elevateZoom.min.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/jquery.magnific-popup.min.js',
                '/assets/js/main.js'
            ]
            scripts.forEach(i => {
                const s = document.createElement('script')
                s.src = i
                document.body.appendChild(s)
            })
        })
        // product.addProduct(product.index)
        return () => {
            const elements = document.getElementsByClassName('zoomContainer')
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
        }

      }, [])
    return (
        <div>
            <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
                    <div className="container d-flex align-items-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Products</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Extended Description</li>
                        </ol>

                        <nav className="product-pager ml-auto" aria-label="Product">
                            <a className="product-pager-link product-pager-prev" href="#" aria-label="Previous" tabindex="-1">
                                <i className="icon-angle-left"></i>
                                <span>Prev</span>
                            </a>

                            <a className="product-pager-link product-pager-next" href="#" aria-label="Next" tabindex="-1">
                                <span>Next</span>
                                <i className="icon-angle-right"></i>
                            </a>
                        </nav>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2">
                            
                            {/* {product.loadest.map((item, index)=> */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="product-gallery">
                                            <figure className="product-main-image">
                                                <img id="product-zoom" src={`${process.env.REACT_APP_BASE_URL}${product.product?.images[0]}`} data-zoom-image={`${process.env.REACT_APP_BASE_URL}${product.product?.images[0]}`} alt="product image"/>

                                                <a href={`${process.env.REACT_APP_BASE_URL}${product.product?.images[0]}`} id="btn-product-gallery" className="btn-product-gallery">
                                                    <i className="icon-arrows"></i>
                                                </a>
                                            </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {product.images.map((img, index) =>
                                                <a className="product-gallery-item" key={index} href="#" data-image={`${process.env.REACT_APP_BASE_URL}${img}`} data-zoom-image={`${process.env.REACT_APP_BASE_URL}${img}`}>
                                                    <img src={`${process.env.REACT_APP_BASE_URL}${img}`} alt="product side"/>
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h1 className="product-title">{product.product.title}</h1>

                                        <div className="ratings-container justify-content-between">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "80%;"}}></div>
                                                <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                                            </div>
                                            
                                            <div className="product-cat">
                                                <span>Категория :</span>
                                                <a href="#">МАГАЗИН /</a>
                                                <a href="#">{product.product.category} / </a>
                                                <a href="#">{product.product.title}</a>
                                            </div>
                                        </div>

                                        <div className="product-price">
                                            {user.isAuth ? product.product.price : ""}
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            
                                        </div>

                                        {user.isAuth ?<>
                                            <div className="details-filter-row details-row-size">
                                                <label for="size">Размер:</label>
                                                <div className="select-custom">
                                                    <select name="size" id="size" className="form-control">
                                                        {product.size.map((size, index)=>
                                                            <option key={index} value="#" selected="selected">{size}</option>
                                                        )}
                                                            
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="details-filter-row details-row-size">
                                                <label style={{}} for="qty">КОЛ-ВО:</label>
                                                <div className="product-details-quantity">
                                                    <button className="kol" onClick={() => setCount(count - 5)}>-</button>
                                                    <span style={{margin: "3px", fontWeight:"bold", fontSize: "20px", marginTop: "10px"}}>{count}</span>
                                                    <button className="kol" onClick={() => setCount(count + 5)}>+</button>
                                                    {/* <input 
                                                        type="number" 
                                                        id="qty" 
                                                        className="form-control" 
                                                        value={count} 
                                                        min="1" 
                                                        max="100" 
                                                        step="5" 
                                                        data-decimals="0"
                                                        onChange={e => setCount(e.target.value)} 
                                                        required/> */}
                                                </div>
                                            </div>

                                            <div className="product-details-action">
                                                <button onClick={addCart} className="btn-product btn-cart"><span >В КОРЗИНУ</span></button>

                                                <div className="details-action-wrapper">
                                                    <a style={{fontSize: "30px"}} href="" onClick={addWishlist} className="btn-product btn-wishlist" title="Wishlist"></a>
                                                </div>
                                            </div>
                                        </> :
                                        <div>
                                            <p>ЗАРЕГИСТРИРУЙТЕСЬ, ЧТОБЫ ПОСМОТРЕТЬ ЦЕНЫ</p>
                                            <Link to={LOGIN_ROUTE}>
                                                <button className=" btn-round">Регистрация</button>
                                            </Link>
                                        </div>
                                        }

                                        <div className="product-details-footer">
                                            

                                            

                                            
                                        </div>


                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="nav nav-pills" id="tabs-5" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="tab-17-tab" data-toggle="tab" href="#tab-17" role="tab" aria-controls="tab-17" aria-selected="true">Описание</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="tab-18-tab" data-toggle="tab" href="#tab-18" role="tab" aria-controls="tab-18" aria-selected="false">Детали</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="tab-19-tab" data-toggle="tab" href="#tab-19" role="tab" aria-controls="tab-19" aria-selected="false">Отзывы (0)</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content" id="tab-content-5">
                                                    <div className="tab-pane fade show active" id="tab-17" role="tabpanel" aria-labelledby="tab-17-tab">
                                                        <p><strong>Размер: </strong> {product.product.size[0]}-{product.product.size[product.product.size.length -1]} </p>
                                                        <p ><strong>Ткань:</strong> {product.product.cloth}</p>
                                                        <p className="p"><strong>Описание:</strong> {product.product.description}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-18" role="tabpanel" aria-labelledby="tab-18-tab">
                                                        <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-19" role="tabpanel" aria-labelledby="tab-19-tab">
                                                        <strong>БУДЬТЕ ПЕРВЫМ, КТО ОСТАВИЛ ОТЗЫВ НА "{product.product.title}"</strong>
                                                        <hr></hr>
                                                        <div className="ratings-container justify-content-between">
                                                            <p>ВАШ ОТЗЫВ *</p>
                                                            <div className="ratings" style={{width: "80%;", cursor:"pointer"}}></div>
                                                        </div>
                                                        <textarea class="form-control"></textarea>
                                                        <div className="d-grid gap-2">
                                                            <button className="button-otzyv" type="button">Отправить</button>
                                                            
                                                        </div>

                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            
                                            
                                            
                                            
                                        </div>
                                        
                                    </div>
                                    <div className="social-icons social-icons-sm">
                                        <span className="social-label">ПОДЕЛИТЬСЯ:</span>
                                        <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                        <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                        <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                        <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* )} */}
                        </div>
                    </div>

                    
                    </div>






                
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  Product;
