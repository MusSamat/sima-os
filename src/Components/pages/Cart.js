import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react'
import { Context } from '../../index';
import axios from "axios"
import { NavLink, Link } from 'react-router-dom';
import { CATALOG_ROUTE, CHECKOUT_ROUTE, HOME_ROUTE } from '../../utils/Const';
import "../../App.css";


 const Cart = observer(() => {
    const {user} = useContext(Context)
    const {product} = useContext(Context)
    const [count , setCount] = useState( product.subcategory)
    let sum  = 0;
    
    console.log(user.items)
    const UpdateCart = (e) => {
        const data = JSON.stringify({ 
            product: user.items.map(i=> i.product.id),
            quantity: user.items.map(i=> i.quantity)
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                console.log(response)
                user.getCartData()
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
        window.scrollTo(0,0)
        user.getCartData().then((items)  => {
            console.log(items)
        })

      }, [])
    return (
        <div >
            <main className="main">
                    <div className="page-content">
                        <div className="cart">
                            <div className="container">
                                <ol className="breadcrumb mb-5">
                                    <li className="breadcrumb-item"><NavLink to={HOME_ROUTE}><a href="">Главная</a></NavLink></li>
                                    <li className="breadcrumb-item"><a href=""> Корзина</a></li>
                                </ol>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr >
                                                    <th style={{color: "black"}}>ТОВАР</th>
                                                    <th style={{color: "black"}}>ЦЕНА</th>
                                                    <th style={{color: "black"}}>КОЛИЧЕСТВО</th>
                                                    <th style={{color: "black"}}>ПОДЫТОГ</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {console.log(user.items)}
                                                {user.items?.map((c, index)=>
                                                
                                                
                                                
                                                <tr>
                                                    <td key={index} className="product-col">
                                                    {console.log(c.color == c.product.images.map(a => a.title))}
                                                        <div className="product">
                                                            <Link to={{pathname: '/product/'+ c.product.id}}>
                                                                <figure className="product-media">
                                                                    <a>
                                                                        <img src={`${process.env.REACT_APP_BASE_URL}${c.product?.images[0]?.images[0]}`} alt="Product image"/>
                                                                    </a>
                                                                </figure>
                                                            </Link>
                                                            <h3 className="product-title">
                                                                <a>{c.product?.title}</a>
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className="price-col">{c.product.price} ₽</td>
                                                    
                                                    <td >
                                                        <div >
                                                            <button  className="kol" onClick={() =>  user.changeItemQuantity(index, c.quantity - 5)}>-</button>
                                                            <span style={{marginLeft: "7px"}} className="kol-input" >{c.quantity}</span>
                                                            <button className="kol" onClick={() => user.changeItemQuantity(index, c.quantity + 5)}>+</button>
                                                            
                                                        
                                                        </div>
                                                        
                                                    </td>

                                                    <td className="price-col" style={{fontWeight: "500"}}>{(c.product.price * c.quantity).toFixed(2)} ₽</td>
                                                    <td className="remove-col"><button onClick={() => deleteCart(c.product.id)} className="btn-remove"><i className="icon-close"></i></button></td>
                                                </tr>)}
                                            </tbody>
                                        </table>

                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                            </div>

                                            <a onClick={(e) => UpdateCart(e)} className="btn btn-outline-dark-2"><span>ОБНОВИТЬ КОРЗИНУ</span><i className="icon-refresh"></i></a>
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
                                                                user.items?.map((item, index) => {
                                                                     sum = sum + item.product.price * item.quantity
                                                                    })
                                                            }

                                                    <td>  {sum.toFixed(2)} ₽ </td>
                                                        
                                                    </tr>
                                                    

                                                    <tr className="summary-subtotal" style={{fontWeight: "500"}}>
                                                        <td>ИТОГО:</td>
                                                           
                                                        <td>{sum.toFixed(2)} ₽</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <NavLink to={CHECKOUT_ROUTE}><a href="" class="btn btn-outline-dark btn-rounded mb-1">Оформить заказ</a></NavLink>
                                            
                                        </div>

                                        <NavLink to={CATALOG_ROUTE}><button  className="btn btn-outline-dark-2 btn-block mb-3"><span>ПРОДОЛЖИТЬ ПОКУПКИ</span><i className="icon-refresh"></i></button></NavLink>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    )
})

export default Cart;
