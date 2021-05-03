import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Context } from '../../index';

const Product = observer(({match}) => {
    const {product} = useContext(Context)
    const id = match.params.id

    
    
    useEffect(() => {
        product.getData(id)
        // product.addProduct(product.index)
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
                                                <img id="product-zoom" src={`${process.env.REACT_APP_BASE_URL}${product.product?.images[0]}`} data-zoom-image="assets/images/products/single/extended/3-big.jpg" alt="product image"/>

                                                <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                                    <i className="icon-arrows"></i>
                                                </a>
                                            </figure>

                                        <div id="product-zoom-gallery" className="product-image-gallery">
                                            {product.images.map((img, index) =>
                                                <a className="product-gallery-item" key={index} href="#" data-image="assets/images/products/single/extended/1.jpg" data-zoom-image="assets/images/products/single/extended/1-big.jpg">
                                                    <img src={`${process.env.REACT_APP_BASE_URL}${img}`} alt="product side"/>
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h1 className="product-title">{product.product.title}</h1>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={{width: "80%;"}}></div>
                                            </div>
                                            <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                                        </div>

                                        <div className="product-price">
                                            {product.product.price}
                                        </div>

                                        <div className="product-content">
                                            <p>{product.product.description} </p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label>Color:</label>

                                            <div className="product-nav product-nav-dots">
                                                <a href="#" className="active" style={{background: "#eab656;"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#333333;"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#3a588b;"}}><span className="sr-only">Color name</span></a>
                                                <a href="#" style={{background: "#caab97;"}}><span className="sr-only">Color name</span></a>
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label for="size">Size:</label>
                                            <div className="select-custom">
                                                <select name="size" id="size" className="form-control">
                                                    {product.size.map((size, index)=>
                                                        <option key={index} value="#" selected="selected">{size}</option>
                                                    )}
                                                    
                                                </select>
                                            </div>

                                            <a href="#" className="size-guide"><i className="icon-th-list"></i>size guide</a>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label for="qty">Qty:</label>
                                            <div className="product-details-quantity">
                                                <input type="number" id="qty" className="form-control" value="5" min="1" max="100" step="5" data-decimals="0" required/>
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <a href="#" className="btn-product btn-cart"><span >add to cart</span></a>

                                            <div className="details-action-wrapper">
                                                <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                                <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                                            </div>
                                        </div>

                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Category:</span>
                                                <a href="#">Women</a>,
                                                <a href="#">Shoes</a>,
                                                <a href="#">Sandals</a>,
                                                <a href="#">Yellow</a>
                                            </div>

                                            <div className="social-icons social-icons-sm">
                                                <span className="social-label">Share:</span>
                                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* )} */}
                        </div>
                    </div>

                    {/* <div className="product-details-tab product-details-extended">
                        <div className="container">
                            <ul className="nav nav-pills justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="product-desc-link" data-toggle="tab" href="#product-desc-tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-info-link" data-toggle="tab" href="#product-info-tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-shipping-link" data-toggle="tab" href="#product-shipping-tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-review-link" data-toggle="tab" href="#product-review-tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                <div className="product-desc-content">
                                    <div className="product-desc-row bg-image"  style={{backgroundImage: "url('assets/images/products/single/extended/bg-1.jpg')"}}>
                                        <div className="container">
                                            <div className="row justify-content-end">
                                                <div className="col-sm-6 col-lg-4">
                                                    <h2>Product Information</h2>
                                                    <ul>
                                                        <li>Faux suede fabric upper</li>
                                                        <li>Tie strap buckle detail</li>
                                                        <li>Block heel</li>
                                                        <li>Open toe</li>
                                                        <li>Heel Height: 7cm / 2.5 inches</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-desc-row bg-image text-white"  style={{backgroundImage: "url('assets/images/products/single/extended/bg-2.jpg')"}}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h2>Design</h2>
                                                    <p>The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. </p>
                                                </div>

                                                <div className="col-md-6">
                                                    <h2>Fabric & care</h2>
                                                    <p>As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village.</p>
                                                </div>
                                            </div>

                                            <div className="mb-5"></div>

                                            <img src="assets/images/products/single/extended/sign.png" alt="" className="ml-auto mr-auto"/>
                                        </div>
                                    </div>

                                    <div className="product-desc-row bg-image"  style={{backgroundImage: "url('assets/images/products/single/extended/bg-3.jpg')"}}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-5">
                                                    <blockquote>
                                                        <p>“ Everything is important - <br/>that success is in the details. ”</p>

                                                        <cite>– Steve Jobs</cite>
                                                    </blockquote>
                                                    <p>Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <div className="container">
                                        <h3>Information</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
                                            Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor 
                                            mauris sit amet orci. </p>

                                        <h3>Fabric & care</h3>
                                        <ul>
                                            <li>Faux suede fabric</li>
                                            <li>Gold tone metal hoop handles.</li>
                                            <li>RI branding</li>
                                            <li>Snake print trim interior </li>
                                            <li>Adjustable cross body strap</li>
                                            <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                        </ul>

                                        <h3>Size</h3>
                                        <p>one size</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <div className="container">
                                        <h3>Delivery & returns</h3>
                                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br/>
                                        We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                <div className="reviews">
                                    <div className="container">
                                        <h3>Reviews (2)</h3>
                                        <div className="review">
                                            <div className="row no-gutters">
                                                <div className="col-auto">
                                                    <h4><a href="#">Samanta J.</a></h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{width: "80%;"}}></div>
                                                        </div>
                                                    </div>
                                                    <span className="review-date">6 days ago</span>
                                                </div>
                                                <div className="col">
                                                    <h4>Good, perfect size</h4>

                                                    <div className="review-content">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                    </div>

                                                    <div className="review-action">
                                                        <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                        <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="review">
                                            <div className="row no-gutters">
                                                <div className="col-auto">
                                                    <h4><a href="#">John Doe</a></h4>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{width: "100%"}}></div>
                                                        </div>
                                                    </div>
                                                    <span className="review-date">5 days ago</span>
                                                </div>
                                                <div className="col">
                                                    <h4>Very good</h4>

                                                    <div className="review-content">
                                                        <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                    </div>

                                                    <div className="review-action">
                                                        <a href="#"><i className="icon-thumbs-up"></i>Helpful (0)</a>
                                                        <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1></h1> */}
                    </div>






                
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  Product;
