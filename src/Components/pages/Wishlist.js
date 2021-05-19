import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import axios from "axios"

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

    useEffect(() => {
        
      user.getWishlistData()
    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">
                {/* <div className="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
                    <div className="container">
                        <h1 className="page-title">Wishlist<span>Shop</span></h1>
                    </div>
                </div> */}
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <table className="table table-wishlist table-mobile">
                            <thead>
                                <tr>
                                    <th>ТОВАР</th>
                                    <th>ЦЕНА</th>
                                    <th>Состояние на складе</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {user.list.map((l, index)=>
                                
                                <tr key={index}>
                                    <td className="product-col">
                                        <div className="product">
                                            <figure className="product-media">
                                                <a href="#">
                                                    <img src={`${process.env.REACT_APP_BASE_URL}${l.product?.images[0]}`} alt="Product image"/>
                                                </a>
                                            </figure>

                                            <h3 className="product-title">
                                                <a href="#">{l.product.title}</a>
                                            </h3>
                                        </div>
                                    </td>
                                    <td className="price-col">${l.product.price }</td>
                                    <td className="stock-col"><span className="in-stock">В наличии</span></td>
                                    <td className="action-col">
                                        <div className="dropdown">
                                        <button className="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            В КОРЗИНУ
                                        </button>
                                        </div>
                                    </td>
                                    <td  className="remove-col"><button onClick={() => deleteWish(l.product.id)}  className="btn-remove"><i className="icon-close">{}</i></button></td>
                                </tr>)}
                                
                            </tbody>
                        </table>
                        <div className="wishlist-share">
                            <div className="social-icons social-icons-sm mb-2">
                                <label className="social-label">Поделись:</label>
                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default Wishlist;
