import React from 'react';
import Particle from './Particle';
import "../../App.css";


export default function Main() {
    return (
        <div>
            <main className="main">
                <div className="App">
                    <Particle/>
                </div>
                <div className="pt-2 pb-2">
                    <div className="container brands">

                        
                    </div>
                </div>

                <div className="mb-3"></div>

                <div className="container">
                    <ul className="nav nav-pills nav-big nav-border-anim justify-content-center mb-2 mb-md-3" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="products-featured-link" data-toggle="tab" href="#products-featured-tab" role="tab" aria-controls="products-featured-tab" aria-selected="true">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="products-sale-link" data-toggle="tab" href="#products-sale-tab" role="tab" aria-controls="products-sale-tab" aria-selected="false">On Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="products-top-link" data-toggle="tab" href="#products-top-tab" role="tab" aria-controls="products-top-tab" aria-selected="false">Top Rated</a>
                        </li>
                    </ul>

                    <div className="tab-content tab-content-carousel">
                        <div className="tab-pane p-0 fade show active" id="products-featured-tab" role="tabpanel" aria-labelledby="products-featured-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="https://c.stocksy.com/a/dH7500/z9/1219641.jpg" alt="Product image" className="product-image"/>
                                            <img src="https://static.livebooks.com/d83c385466b046478be0d0cf58471552/i/ad9ecc4c598e4bcca0d8b3c715cfa6c2/1/4SoifmQp45JMgBnHp7ed2/22_1_3716_1rayne_15.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>
                                        <div className="product-price">
                                            $19.99
                                        </div>
                                        <div className="product-nav product-nav-thumbs">
                                            <a href="#" className="active">
                                                <img src="https://c.stocksy.com/a/dH7500/z9/1219641.jpg" alt="product desc"/>
                                            </a>
                                            <a href="#">
                                                <img src="https://c.stocksy.com/a/dH7500/z9/1219641.jpg" alt="product desc"/>
                                            </a>
                                            <a href="#">
                                                <img src="https://c.stocksy.com/a/dH7500/z9/1219641.jpg" alt="product desc"/>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                
                                
                                
                                
                                
                                

                                

                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-4-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-4-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>
                                        <div className="product-price">
                                            $17.99
                                        </div>
                                        <div className="product-nav product-nav-thumbs">
                                            <a href="#" className="active">
                                                <img src="assets/images/demos/demo-8/products/product-4-thumb.jpg" alt="product desc"/>
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-8/products/product-4-2-thumb.jpg" alt="product desc"/>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="products-sale-tab" role="tabpanel" aria-labelledby="products-sale-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-2-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-2-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Sandals</a></h3>
                                        <div className="product-price">
                                            $24.99
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-2">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-3-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-3-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Printed sweatshirt</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">Now $7.99</span>
                                            <span className="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="products-top-tab" role="tabpanel" aria-labelledby="products-top-link">
                            <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":1
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>

                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-2-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-2-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Sandals</a></h3>
                                        <div className="product-price">
                                            $24.99
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-2">
                                    <figure className="product-media">
                                        <span className="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-3-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-3-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Printed sweatshirt</a></h3>
                                        <div className="product-price">
                                            <span className="new-price">Now $7.99</span>
                                            <span className="old-price">Was $12.99</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="product product-2">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-8/products/product-4-1.jpg" alt="Product image" className="product-image"/>
                                            <img src="assets/images/demos/demo-8/products/product-4-2.jpg" alt="Product image" className="product-image-hover"/>
                                        </a>

                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-wishlist btn-expandable" title="Add to wishlist"><span>add to wishlist</span></a>
                                        </div>

                                        <div className="product-action ">
                                            <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div className="product-body">
                                        <div className="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>
                                        <h3 className="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>
                                        <div className="product-price">
                                            $17.99
                                        </div>
                                        <div className="product-nav product-nav-thumbs">
                                            <a href="#" className="active">
                                                <img src="assets/images/demos/demo-8/products/product-4-thumb.jpg" alt="product desc"/>
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-8/products/product-4-2-thumb.jpg" alt="product desc"/>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3 mb-xl-2"></div>

               
                
                
                
                
                
                
                
                
                

                <div className="mb-5"></div>

                <div className="container recent-arrivals">
                    

                    <div className="tab-content">
                        <div className="tab-pane p-0 fade show active" id="recent-all-tab" role="tabpanel" aria-labelledby="recent-all-link">
                            <div className="products">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-5-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-5-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Tie-detail top</a></h3>
                                                <div className="product-price">
                                                    <span className="new-price">Now $3.99</span>
                                                    <span className="old-price">Was $6.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    
                                    
                                    
                                    

                                    

                                    

                                    

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-10-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-10-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Biker jacket</a></h3>
                                                <div className="product-price">
                                                    $34.99
                                                </div>

                                                <div className="product-nav product-nav-thumbs">
                                                    <a href="#" className="active">
                                                        <img src="assets/images/demos/demo-8/products/product-10-thumb.jpg" alt="product desc"/>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/demos/demo-8/products/product-10-2-thumb.jpg" alt="product desc"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-11-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-11-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Loafers</a></h3>
                                                <div className="product-price">
                                                    $9.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-12-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-12-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Super Skinny High Jeggings</a></h3>
                                                <div className="product-price">
                                                    <span className="new-price">Now $12.99</span>
                                                    <span className="old-price">Was $17.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="recent-women-tab" role="tabpanel" aria-labelledby="recent-women-link">
                            <div className="products">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-5-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-5-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Tie-detail top</a></h3>
                                                <div className="product-price">
                                                    <span className="new-price">Now $3.99</span>
                                                    <span className="old-price">Was $6.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-6-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-6-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Sandals</a></h3>
                                                <div className="product-price">
                                                    $12.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="recent-men-tab" role="tabpanel" aria-labelledby="recent-men-link">
                            <div className="products">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-11-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-11-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Loafers</a></h3>
                                                <div className="product-price">
                                                    $9.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <span className="product-label label-sale">sale</span>
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-12-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-12-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Super Skinny High Jeggings</a></h3>
                                                <div className="product-price">
                                                    <span className="new-price">Now $12.99</span>
                                                    <span className="old-price">Was $17.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane p-0 fade" id="recent-shoes-tab" role="tabpanel" aria-labelledby="recent-shoes-link">
                            <div className="products">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-7-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-7-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Bags</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Small bucket bag</a></h3>
                                                <div className="product-price">
                                                    $14.99
                                                </div>

                                                <div className="product-nav product-nav-thumbs">
                                                    <a href="#" className="active">
                                                        <img src="assets/images/demos/demo-8/products/product-7-thumb.jpg" alt="product desc"/>
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/demos/demo-8/products/product-7-2-thumb.jpg" alt="product desc"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-8/products/product-8-1.jpg" alt="Product image" className="product-image"/>
                                                    <img src="assets/images/demos/demo-8/products/product-8-2.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>
                                                <div className="product-price">
                                                    $34.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-4 col-lg-3">
                                        <div className="product product-2 text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2E42WsYrZRCT3RuoyCp1Z1iCbUBAOKwz5nA&usqp=CAU" alt="Product image" className="product-image"/>
                                                    <img src="https://c.stocksy.com/a/dH7500/z9/1219641.jpg" alt="Product image" className="product-image-hover"/>
                                                </a>

                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                </div>

                                                <div className="product-action">
                                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                                </div>
                                            </figure>

                                            <div className="product-body">
                                                <div className="product-cat">
                                                    <a href="#">Clothing</a>
                                                </div>
                                                <h3 className="product-title"><a href="product.html">BShort wrap dress</a></h3>
                                                <div className="product-price">
                                                    $17.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="more-container text-center mt-3 mb-3">
                        <a href="category.html" className="btn btn-outline-dark-3 btn-more"><span>View More</span><i className="icon-long-arrow-right"></i></a>
                    </div>
                </div>

                <div className="mb-7"></div>
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Payment & Delivery</h3>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Return & Refund</h3>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-card text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Quality Support</h3>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="container instagram">
                    <div className="heading text-center">
                        <h2 className="title title-lg">ПОДПИСАТЬСЯ НА INSTAGRAM</h2>
                        <p className="title-desc">Хочешь поделиться с нами своим стилем?</p>
                    </div>
                </div>

                <div className="owl-carousel owl-simple" data-toggle="owl" 
                data-owl-options='{
                    "nav": false, 
                    "dots": false,
                    "items": 6,
                    "margin": 0,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":1
                        },
                        "360": {
                            "items":2
                        },
                        "600": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1200": {
                            "items":5
                        },
                        "1500": {
                            "items":6
                        }
                    }
                }'>
                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/1.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>466</a>
                        <a href="#"><i className="icon-comments"></i>65</a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/2.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>39</a>
                        <a href="#"><i className="icon-comments"></i>78</a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/3.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>691</a>
                        <a href="#"><i className="icon-comments"></i>87</a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/4.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>508</a>
                        <a href="#"><i className="icon-comments"></i>124</a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/5.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>433</a>
                        <a href="#"><i className="icon-comments"></i>27</a>
                    </div>
                </div>

                <div className="instagram-feed">
                    <img src="assets/images/demos/demo-8/instagram/6.jpg" alt="img"/>

                    <div className="instagram-feed-content">
                        <a href="#"><i className="icon-heart-o"></i>122</a>
                        <a href="#"><i className="icon-comments"></i>55</a>
                    </div>
                </div>
            </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
        
    )
}

