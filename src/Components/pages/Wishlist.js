import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
import "../../App.css";
import { HOME_ROUTE } from '../../utils/Const';

const Wishlist = observer(()=> {
    const {user} = useContext(Context)
    
    
        
    const deleteWish = (id) => {
        
       
        const data = JSON.stringify({
             product: id,  
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`, data, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },
        })
        .then(res => {
            user.getWishlistData()
        console.log(res)
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }


    const addCart = (e, id, quantity) => {
        const data = JSON.stringify({
            product: [id],
            quantity: [5], 
            
            
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
                user.getCartData()
                console.log(response)
                deleteWish(id)

        })
        .catch(error =>{ 
            console.log(error)  
    })
    e.preventDefault();
    }

    useEffect(() => {
        window.scrollTo(0,0)
        
        user.getWishlistData()
        
      
    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">

                <div className="page-content">
                    <div className="container">
                        <ol className="breadcrumb mb-4 ">
                            <li className="breadcrumb-item"><NavLink to={HOME_ROUTE}><a className="breadcrumb-item" href="">Главная</a></NavLink></li>
                            <li className="breadcrumb-item"><a href=""> Изображение</a></li>
                        </ol>
                        <table className="table table-wishlist table-mobile">
                            <thead>
                                <tr>
                                    <th style={{color: "#000000"}}>ТОВАР</th>
                                    <th style={{color: "#000000"}}>ЦЕНА</th>
                                    <th style={{color: "#000000"}}>Состояние на складе</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {console.log(user.list)}
                                {user.list?.map((l, index)=>
                                <tr key={index}>
                                    <td className="product-col">
                                        <div className="product">
                                            <Link to={{pathname: '/product/'+ l.product.id}}>
                                                <figure className="product-media">
                                                    <a >
                                                        <img src={`${process.env.REACT_APP_BASE_URL}${l.product?.images[0].images[0]}`} alt="Product image"/>
                                                    </a>
                                                </figure>
                                            </Link>
                                            <h3 className="product-title">
                                                <a href="#">{l.product.title}</a> 
                                            </h3>
                                        </div>
                                    </td>
                                    <td className="price-col">{l.product.price } {l.quantity} ₽</td>
                                    <td className="stock-col"><span className="in-stock">В наличии</span></td>
                                    <td className="action-col">
                                        <div className="dropdown">
                                        <button onClick={(e) =>addCart(e, l.product.id)} className="btn btn-block btn-outline-primary-2" >
                                            В КОРЗИНУ
                                        </button>
                                        </div>
                                    </td>
                                    <td  className="remove-col"><button onClick={() => deleteWish(l.product.id)}  className="btn-remove"><i className="icon-close">{}</i></button></td>
                                </tr>)}
                                
                            </tbody>
                        </table>
                        {/* <div className="wishlist-share">
                            <div className="social-icons social-icons-sm mb-2">
                                <label  className="social-label">Поделись:</label>
                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default Wishlist;
