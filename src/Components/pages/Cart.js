import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react'
import { Context } from '../../index';

 const Cart = observer(() => {
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

      }, [])
    return (
        <div style={{marginTop: "80px"}}>
            <main className="main">
                    <div className="page-content">
                        <div className="cart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>ТОВАР</th>
                                                    <th>ЦЕНА</th>
                                                    <th>КОЛИЧЕСТВО</th>
                                                    <th>ПОДЫТОГ</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <a href="#">
                                                                    <img src="assets/images/products/table/product-1.jpg" alt="Product image"/>
                                                                </a>
                                                            </figure>

                                                            <h3 className="product-title">
                                                                <a href="#">Beige knitted elastic runner shoes</a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className="price-col">$84.00</td>
                                                    <td className="quantity-col">
                                                        <div className="cart-product-quantity">
                                                            <input type="number" className="form-control" value="15" min="1" max="100" step="5" data-decimals="0" required/>
                                                        </div>
                                                    </td>
                                                    <td className="total-col">$84.00</td>
                                                    <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <a href="#">
                                                                    <img src="assets/images/products/table/product-2.jpg" alt="Product image"/>
                                                                </a>
                                                            </figure>

                                                            <h3 className="product-title">
                                                                <a href="#">Blue utility pinafore denim dress</a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className="price-col">$76.00</td>
                                                    <td className="quantity-col">
                                                        <div className="cart-product-quantity">
                                                            <input type="number" className="form-control" value="5" min="1" max="100" step="5" data-decimals="0" required/>
                                                        </div>                                
                                                    </td>
                                                    <td className="total-col">$76.00</td>
                                                    <td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" required placeholder="coupon code"/>
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <a href="#" className="btn btn-outline-dark-2"><span>UPDATE CART</span><i className="icon-refresh"></i></a>
                                        </div>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary summary-cart">
                                            <h3 className="summary-title">СУММА ЗАКАЗОВ</h3>

                                            <table className="table table-summary">
                                                <tbody>
                                                    <tr className="summary-subtotal">
                                                        <td>ПОДЫТОГ:</td>
                                                        <td>$160.00</td>
                                                    </tr>
                                                    

                                                    <tr className="summary-total">
                                                        <td>ИТОГО:</td>
                                                        <td>$160.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <a  style={{fontSize: "20px"}} className="btn btn-outline-primary-2 btn-order btn-block">Оформить заказ</a>
                                        </div>

                                        <button  className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUE SHOPPING</span><i className="icon-refresh"></i></button>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default Cart;
