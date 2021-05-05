import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';





const  Catolog = observer(() => {
    const {product} = useContext(Context)
    
    
    useEffect(() => {
        
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
    
      }, []); 
    return (
        <div>
             <main className="main">
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid 4 Columns</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            ПРОСМОТР: <span>24 / 48 / 96 / ВСЕ</span> 
                                        </div>
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label for="sortby"></label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control">
                                                    <option value="popularity" selected="selected">ОТ ПОСЛЕДНЕГО</option>
                                                    <option value="rating">ПО РЕЙТИНГУ</option>
                                                    <option value="date">ПО ВОЗРАСТАНИЮ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="products mb-3">
                                    <div className="row justify-content-center">
                                        
                                        {product.products.map((prod, index) => 
                                        
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                                                <div className="product product-7 text-center">
                                                    <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                                        <figure className="product-media" >
                                                            
                                                                <img src={`${process.env.REACT_APP_BASE_URL}${prod.images[0]}`} alt="Product image" className="product-image"/>
                                                            
                                                            

                                                            <div className="product-action-vertical">
                                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                                                            </div>

                                                            <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart"><span>В КОРЗИНУ</span></a>
                                                            </div>
                                                        </figure>
                                                        
                                                    

                                                    <div className="product-body">
                                                        <div style={{display: "flex", justifyContent: "space-between"}}>
                                                            <h3 className="product-title"><a href="product.html">{prod.title}</a></h3>
                                                            <div className="product-price">
                                                                {prod.price} $
                                                            </div>
                                                        </div>
                                                        <div className="ratings-container">
                                                            <span className="ratings-text"></span>
                                                        </div>
                                                        
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                         
                                        )} 
                                        
                                    </div>
                                </div>


                                {/* <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item-total">of 6</li>
                                        <li className="page-item">
                                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
                            </div>
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">
                                    <div className="widget widget-clean">

                                        
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                    ФИЛЬТР ПО ЦЕНЕ
                                                </a>
                                            </h3>

                                            <div className="collapse show" id="widget-5">
                                                <div className="widget-body">
                                                    <div className="filter-price">
                                                        <div className="filter-price-text">
                                                            
                                                            <span id="filter-price-range"></span>
                                                        </div>

                                                        <div id="price-slider"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                                Категория
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-1">
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="cat-1"/>
                                                            <label className="custom-control-label" for="cat-1">ВЕСНА (2020)</label>
                                                        </div>
                                                        <span className="item-count">(12)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                                                Brand
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-4">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                                            <label className="custom-control-label" for="brand-1">Next</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="widget widget-collapsible">
                                        <div className="collapse show" id="widget-4">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    

                                                    

                                                    

                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-7"/>
                                                            <label className="custom-control-label" for="brand-7">Nike</label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                Price
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-5">
                                            <div className="widget-body">
                                                <div className="filter-price">
                                                    <div className="filter-price-text">
                                                        Price Range:
                                                        <span id="filter-price-range">$0-$1000</span>
                                                    </div>

                                                    <div id="price-slider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                Price
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-5">
                                            <div className="widget-body">
                                                <div className="filter-price">
                                                    <div className="filter-price-text">
                                                        Price Range:
                                                        <span id="filter-price-range"></span>
                                                    </div>

                                                    <div id="price-slider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        
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
