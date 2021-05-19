import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../index';
import axios from "axios"
import { NavLink } from 'react-router-dom';
import { CHECKOUT_ROUTE } from '../../utils/Const';

 const Cart = observer(() => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [quantity, setCount] = useState(5)
    let sum  = 0;

 

    const UpdateCart = (e) => {
        console.log(quantity)
        const data = JSON.stringify({
            // product: 
            quantity: quantity, 
            
            
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                setCount(quantity)
                console.log(response)
        })
        .catch(error =>{ 
            console.log(error)  
    })
    e.preventDefault();
    }

   
    const deleteCart = (id) => {
        
       
        const data = JSON.stringify({
             product: id,  
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/destroy-cart/`, data, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },
        })
        .then(res => {
            user.getCartData()
        console.log(res)
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }
     
    
     

    useEffect(() => {
        
        console.log(user.items[product.title])
        // user.totalPrice()
        
        user.getCartData()
        // summa()
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
                                                
                                                {user.items.map((c, index)=>
                                                
                                                
                                                
                                                <tr>
                                                    <td key={index} className="product-col">
                                                        <div className="product">
                                                            <figure className="product-media">
                                                                <a href="#">
                                                                    <img src={`${process.env.REACT_APP_BASE_URL}${c.product?.images[0]}`} alt="Product image"/>
                                                                </a>
                                                            </figure>

                                                            <h3 className="product-title">
                                                                <a href="#">{c.product.title}</a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className="price-col">${c.product.price}</td>
                                                    
                                                    <td >
                                                        <div >
                                                            <button  className="kol" onClick={() => setCount(quantity - 5)}>-</button>
                                                            <span style={{marginLeft: "7px"}} className="kol-input" >{c.quantity}</span>
                                                            <button className="kol" onClick={() => setCount(quantity + 5)}>+</button>
                                                        
                                                        </div>
                                                        
                                                        
                                                        {/* <div className="cart-product-quantity">
                                                        
                                                            <input type="number" className="form-control" value={c.quantity} min="1" max="100" step="5" data-decimals="0" required/>
                                                        </div> */}
                                                        
                                                    </td>

                                                    <td className="total-col">${c.product.price * c.quantity}</td>
                                                    <td className="remove-col"><button onClick={() => deleteCart(c.product.id)} className="btn-remove"><i className="icon-close"></i></button></td>
                                                </tr>)}
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
                                    
                                                            {
                                                                user.items.map((item, index) => {
                                                                     sum = sum + item.product.price * item.quantity
                                                                    })
                                                            }

                                                    <td>{sum.toFixed(2)}</td>
                                                        
                                                    </tr>
                                                    

                                                    <tr className="summary-total">
                                                        <td>ИТОГО:</td>
                                                           
                                                        <td>{sum.toFixed(2)}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <NavLink to={CHECKOUT_ROUTE}><a  style={{fontSize: "20px"}} className="btn btn-outline-primary-2 btn-order btn-block">Оформить заказ</a></NavLink>
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
