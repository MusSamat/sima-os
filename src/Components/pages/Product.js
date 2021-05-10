import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../index';
import { LOGIN_ROUTE } from '../../utils/Const';

const Product = observer(({match}) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const id = match.params.id

    
    
    useEffect(() => {
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

                                        <div className="product-content">
                                            <p>{product.product.description} </p>
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
                                                <label for="qty">КОЛ-ВО:</label>
                                                <div className="product-details-quantity">
                                                    <input type="number" id="qty" className="form-control" value="5" min="1" max="100" step="5" data-decimals="0" required/>
                                                </div>
                                            </div>

                                            <div className="product-details-action">
                                                <a href="#" className="btn-product btn-cart"><span >В КОРЗИНУ</span></a>

                                                <div className="details-action-wrapper">
                                                    <a style={{fontSize: "30px"}} href="#" className="btn-product btn-wishlist" title="Wishlist"></a>
                                                </div>
                                            </div>
                                        </> :
                                        <div>
                                            <p>ЗАРЕГИСТРИРУЙТЕСЬ, ЧТОБЫ ПОСМОТРЕТЬ ЦЕНЫ</p>
                                            <Link to={LOGIN_ROUTE}>
                                                <button className="btn-outline-dark btn-round">Регистрация</button>
                                            </Link>
                                        </div>
                                        }

                                        <div className="product-details-footer">
                                            

                                            

                                            
                                        </div>


                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="title mb-3">Line Style Tabs</h2>
                                            </div>
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
                                                        <p><strong>Размер:</strong> {product.size.map((size, index)=>
                                                            <p key={index}>{size[0]}{size.length -1}</p>
                                                        )}</p>
                                                        <p><strong>Ткань:</strong> {product.product.cloth}</p>
                                                        <p>{product.product.description}</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-18" role="tabpanel" aria-labelledby="tab-18-tab">
                                                        <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="tab-19" role="tabpanel" aria-labelledby="tab-19-tab">
                                                        <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
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
