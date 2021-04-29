import React from 'react'

export default function ProductCategory() {
    return (
        <div>
            <div className="page-wrapper">
                <header className="header">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-left">
                                <div className="header-dropdown">
                                    <a href="#">Usd</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">Eur</a></li>
                                            <li><a href="#">Usd</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="header-dropdown">
                                    <a href="#">Eng</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="header-right">
                                <ul className="top-menu">
                                    <li>
                                        <a href="#">Links</a>
                                        <ul>
                                            <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                            <li><a href="wishlist.html"><i className="icon-heart-o"></i>Wishlist <span>(3)</span></a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user"></i>Login</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-middle sticky-header">
                        <div className="container">
                            

                            <div className="header-right">
                                <div className="header-search">
                                    <a href="#" className="search-toggle" role="button" title="Search"><i className="icon-search"></i></a>
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper">
                                            <label for="q" className="sr-only">Search</label>
                                            <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required/>
                                        </div>
                                    </form>
                                </div>
                                <div className="dropdown compare-dropdown">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                        <i className="icon-random"></i>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <ul className="compare-products">
                                            <li className="compare-product">
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                                <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                            </li>
                                            <li className="compare-product">
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                                <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                            </li>
                                        </ul>

                                        <div className="compare-actions">
                                            <a href="#" className="action-link">Clear All</a>
                                            <a href="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="dropdown cart-dropdown">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i className="icon-shopping-cart"></i>
                                        <span className="cart-count">2</span>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-cart-products">
                                            <div className="product">
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Beige knitted elastic runner shoes</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        x $84.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                                    </a>
                                                </figure>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                            </div>

                                            <div className="product">
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Blue utility pinafore denim dress</a>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                                                        x $76.00
                                                    </span>
                                                </div>

                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                                    </a>
                                                </figure>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                            </div>
                                        </div>

                                        <div className="dropdown-cart-total">
                                            <span>Total</span>

                                            <span className="cart-total-price">$160.00</span>
                                        </div>

                                        <div className="dropdown-cart-action">
                                            <a href="cart.html" className="btn btn-primary">View Cart</a>
                                            <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="page-header text-center" style={{backgroundImage: " url('assets/images/page-header-bg.jpg')"}}>
                        <div className="container">
                            <h1 className="page-title">Product Category Boxed<span>Shop</span></h1>
                        </div>
                    </div>
                    <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                        <div className="container">
                            <a href="#" className="sidebar-toggler"><i className="icon-bars"></i>Filters</a>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                <li className="breadcrumb-item"><a href="#">Product Category</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Boxed</li>
                            </ol>
                        </div>
                    </nav>

                    <div className="page-content">
                        <div className="categories-page">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-1.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Dresses</h3>
                                                <h4 className="banner-subtitle">3 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>

                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-2.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Jackets</h3>
                                                <h4 className="banner-subtitle">2 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <a href="#">
                                                        <img src="assets/images/category/boxed/banner-3.jpg" alt="Banner"/>
                                                    </a>

                                                    <a className="banner-link" href="#">
                                                        <h3 className="banner-title">T-shirts</h3>
                                                        <h4 className="banner-subtitle">0 Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <a href="#">
                                                        <img src="assets/images/category/boxed/banner-4.jpg" alt="Banner"/>
                                                    </a>

                                                    <a className="banner-link" href="#">
                                                        <h3 className="banner-title">Jeans</h3>
                                                        <h4 className="banner-subtitle">1 Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-5.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Bags</h3>
                                                <h4 className="banner-subtitle">4 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-6.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Sportwear</h3>
                                                <h4 className="banner-subtitle">0 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3 order-md-last">
                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-8.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Jumpers</h3>
                                                <h4 className="banner-subtitle">1 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="banner banner-cat banner-badge">
                                            <a href="#">
                                                <img src="assets/images/category/boxed/banner-7.jpg" alt="Banner"/>
                                            </a>

                                            <a className="banner-link" href="#">
                                                <h3 className="banner-title">Shoes</h3>
                                                <h4 className="banner-subtitle">2 Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="sidebar-filter-overlay"></div>
                        <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
                            <div className="sidebar-filter-wrapper">
                                <div className="widget widget-clean">
                                    <label><i className="icon-close"></i>Filters</label>
                                    <a href="#" className="sidebar-filter-clear">Clean All</a>
                                </div>
                                <div className="widget">
                                    <h3 className="widget-title">
                                        Browse Category
                                    </h3>

                                    <div className="widget-body">
                                        <div className="filter-items filter-items-count">
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-1"/>
                                                    <label className="custom-control-label" for="cat-1">Women</label>
                                                </div>
                                                <span className="item-count">3</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-2"/>
                                                    <label className="custom-control-label" for="cat-2">Men</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-3"/>
                                                    <label className="custom-control-label" for="cat-3">Holiday Shop</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-4"/>
                                                    <label className="custom-control-label" for="cat-4">Gifts</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-5"/>
                                                    <label className="custom-control-label" for="cat-5">Homeware</label>
                                                </div>
                                                <span className="item-count">0</span>
                                            </div>

                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="cat-6" checked="checked"/>
                                                    <label className="custom-control-label" for="cat-6">Grid Categories Fullwidth</label>
                                                </div>
                                                <span className="item-count">13</span>
                                            </div>

                                            <div className="sub-filter-items">
                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-7"/>
                                                        <label className="custom-control-label" for="cat-7">Dresses</label>
                                                    </div>
                                                    <span className="item-count">3</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-8"/>
                                                        <label className="custom-control-label" for="cat-8">T-shirts</label>
                                                    </div>
                                                    <span className="item-count">0</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-9"/>
                                                        <label className="custom-control-label" for="cat-9">Bags</label>
                                                    </div>
                                                    <span className="item-count">4</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-10"/>
                                                        <label className="custom-control-label" for="cat-10">Jackets</label>
                                                    </div>
                                                    <span className="item-count">2</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-11"/>
                                                        <label className="custom-control-label" for="cat-11">Shoes</label>
                                                    </div>
                                                    <span className="item-count">2</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-12"/>
                                                        <label className="custom-control-label" for="cat-12">Jumpers</label>
                                                    </div>
                                                    <span className="item-count">1</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-13"/>
                                                        <label className="custom-control-label" for="cat-13">Jeans</label>
                                                    </div>
                                                    <span className="item-count">1</span>
                                                </div>

                                                <div className="filter-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="cat-14"/>
                                                        <label className="custom-control-label" for="cat-14">Sportwear</label>
                                                    </div>
                                                    <span className="item-count">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget widget-about">
                                        <img src="assets/images/logo.png" className="footer-logo" alt="Footer Logo" width="105" height="25"/>
                                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

                                        <div className="social-icons">
                                            <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                                            <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                                            <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                                            <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                                            <a href="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">Useful Links</h4>

                                        <ul className="widget-list">
                                            <li><a href="about.html">About Molla</a></li>
                                            <li><a href="#">How to shop on Molla</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                            <li><a href="login.html">Log in</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title"></h4>

                                        <ul className="widget-list">
                                            <li><a href="#">Payment Methods</a></li>
                                            <li><a href="#">Money-back guarantee!</a></li>
                                            <li><a href="#">Returns</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Terms and conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>

                                        <ul className="widget-list">
                                            <li><a href="#">Sign In</a></li>
                                            <li><a href="cart.html">View Cart</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Track My Order</a></li>
                                            <li><a href="#">Help</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">
                            <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                            <figure className="footer-payments">
                                <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20"/>
                            </figure>
                        </div>
                    </div>
                </footer>
            </div>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>

          
            <div className="mobile-menu-overlay"></div>

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>

                    <form action="#" method="get" className="mobile-search">
                        <label for="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required/>
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                    </form>
                    
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <a href="index.html">Home</a>

                                <ul>
                                    <li><a href="index-1.html">01 - furniture store</a></li>
                                    <li><a href="index-2.html">02 - furniture store</a></li>
                                    <li><a href="index-3.html">03 - electronic store</a></li>
                                    <li><a href="index-4.html">04 - electronic store</a></li>
                                    <li><a href="index-5.html">05 - fashion store</a></li>
                                    <li><a href="index-6.html">06 - fashion store</a></li>
                                    <li><a href="index-7.html">07 - fashion store</a></li>
                                    <li><a href="index-8.html">08 - fashion store</a></li>
                                    <li><a href="index-9.html">09 - fashion store</a></li>
                                    <li><a href="index-10.html">10 - shoes store</a></li>
                                    <li><a href="index-11.html">11 - furniture simple store</a></li>
                                    <li><a href="index-12.html">12 - fashion simple store</a></li>
                                    <li><a href="index-13.html">13 - market</a></li>
                                    <li><a href="index-14.html">14 - market fullwidth</a></li>
                                    <li><a href="index-15.html">15 - lookbook 1</a></li>
                                    <li><a href="index-16.html">16 - lookbook 2</a></li>
                                    <li><a href="index-17.html">17 - fashion store</a></li>
                                    <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                                    <li><a href="index-19.html">19 - games store</a></li>
                                    <li><a href="index-20.html">20 - book store</a></li>
                                    <li><a href="index-21.html">21 - sport store</a></li>
                                    <li><a href="index-22.html">22 - tools store</a></li>
                                    <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                                    <li><a href="index-24.html">24 - extreme sport store</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="category.html">Shop</a>
                                <ul>
                                    <li><a href="category-list.html">Shop List</a></li>
                                    <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                    <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                    <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                    <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                    <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                    <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                    <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="#">Lookbook</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="product.html" className="sf-with-ul">Product</a>
                                <ul>
                                    <li><a href="product.html">Default</a></li>
                                    <li><a href="product-centered.html">Centered</a></li>
                                    <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                    <li><a href="product-gallery.html">Gallery</a></li>
                                    <li><a href="product-sticky.html">Sticky Info</a></li>
                                    <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                    <li><a href="product-fullwidth.html">Full Width</a></li>
                                    <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>

                                        <ul>
                                            <li><a href="about.html">About 01</a></li>
                                            <li><a href="about-2.html">About 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>

                                        <ul>
                                            <li><a href="contact.html">Contact 01</a></li>
                                            <li><a href="contact-2.html">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>

                                <ul>
                                    <li><a href="blog.html">classNameic</a></li>
                                    <li><a href="blog-listing.html">Listing</a></li>
                                    <li>
                                        <a href="#">Grid</a>
                                        <ul>
                                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Masonry</a>
                                        <ul>
                                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Mask</a>
                                        <ul>
                                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Single Post</a>
                                        <ul>
                                            <li><a href="single.html">Default with sidebar</a></li>
                                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements-list.html">Elements</a>
                                <ul>
                                    <li><a href="elements-products.html">Products</a></li>
                                    <li><a href="elements-typography.html">Typography</a></li>
                                    <li><a href="elements-titles.html">Titles</a></li>
                                    <li><a href="elements-banners.html">Banners</a></li>
                                    <li><a href="elements-product-category.html">Product Category</a></li>
                                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                                    <li><a href="elements-buttons.html">Buttons</a></li>
                                    <li><a href="elements-accordions.html">Accordions</a></li>
                                    <li><a href="elements-tabs.html">Tabs</a></li>
                                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                                    <li><a href="elements-cta.html">Call to Action</a></li>
                                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>

            
            <div className="modal fade" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label for="singin-email">Username or email address *</label>
                                                    <input type="text" className="form-control" id="singin-email" name="singin-email" required/>
                                                </div>

                                                <div className="form-group">
                                                    <label for="singin-password">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password" name="singin-password" required/>
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember"/>
                                                        <label className="custom-control-label" for="signin-remember">Remember Me</label>
                                                    </div>

                                                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label for="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="register-email" required/>
                                                </div>

                                                <div className="form-group">
                                                    <label for="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="register-password" required/>
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required/>
                                                        <label className="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
}
