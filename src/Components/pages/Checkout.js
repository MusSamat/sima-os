import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import axios from "axios";
import {  useHistory} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ORDER_ROUTE } from '../../utils/Const';

const Checkout = observer(() => {

	const history = useHistory()
	const {user} = useContext(Context)
	let sum = 0
	const [note, setNote] = useState()
	console.log(user.userId)

	const notify = () => toast.success("Спасибо. Ваш заказ был принят.");
	const notifyError = () => toast.error("Wow so easy!");

	console.log(user.carts)

	const sendOrder = (e) => {
        const data = JSON.stringify({
             user: user.carts.user,
			 first_name: user.userId.first_name,
			 last_name: user.userId.last_name,
			 email: user.userId.email,
			 address: user.userId.address,
			 country: user.userId.country,
			 city: user.userId.city,
			 telephone: user.userId.phone_number,
			 cart_user_id: user.carts.id,
			 note: note
        })  
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/order/`, data, 
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },

        })
            .then(response => {
				setNote('')
				notify()
				user.getCartData()
				history.push(ORDER_ROUTE)
        })
        .catch(error =>{ 
            console.log(error) 
			notifyError() 
    })
    e.preventDefault();
    }

	useEffect(() => {
		user.getUserData()
		console.log(user.userId)
	}, [])
    return (
        <div classNameName="page-wrapper" style={{marginTop: "50px"}}>
            <div className="page-content">
            	<div className="checkout">
	                <div className="container">
            			<form action="#">
		                	<div className="row">
		                		<div className="col-lg-9">
		                			<h2 className="checkout-title">ДЕТАЛИ ОПЛАТЫ</h2>
		                				<div className="row">
		                					<div className="col-sm-6">
												<label style={{fontSize: "16px"}} for="register-password">Имя </label>
		                						<input 
													type="text"
													value={user.userId.first_name} 
													style={{fontSize: "16px", fontWeight: "500"}}
													className="form-control" required/>
		                					</div>

		                					<div className="col-sm-6">
												<label style={{fontSize: "16px"}} for="register-password">Фамилия</label>
		                						<input 
													value={user.userId.last_name} type="text" 
													className="form-control" required
													style={{fontSize: "16px", fontWeight: "500"}}/>
		                					</div>
		                				</div>
										<div className="row">
		                					<div className="col-sm-6">
												<label style={{fontSize: "16px"}} for="register-password">Страна</label>
												<input 
													 type="text" 
													value={user.userId.country} 
													className="form-control" required
													style={{fontSize: "16px", fontWeight: "500"}}/>
											</div>

										<div className="col-sm-6">
											<label style={{fontSize: "16px"}} for="register-password">Город</label>
											<input 
												 type="text" 
												value={user.userId.city} 
												className="form-control" required
												style={{fontSize: "16px", fontWeight: "500"}}/>
												</div>
		                				</div>
										<label style={{fontSize: "16px"}} for="register-password">Адрес</label>
	        							<input 
											 type="text" 
											value={user.userId.address} 
											className="form-control" required
											style={{fontSize: "16px", fontWeight: "500"}}/>

	            						<div className="row">
		                					<div className="col-sm-6">
												<label style={{fontSize: "16px"}} for="register-password">Телефон</label>
		                						<input  
													value={user.userId.phone_number} type="tel" 
													className="form-control" required
													style={{fontSize: "16px", fontWeight: "500"}}/>
		                					</div>

		                					<div className="col-sm-6">
												<label style={{fontSize: "16px"}} for="register-password">Email</label>
		                						<input 
													 type="email" 
													value={user.userId.email} 
													className="form-control" required
													style={{fontSize: "16px", fontWeight: "500"}}/>
		                					</div>
		                				</div>

	                					

	        							{/* <div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-create-acc"/>
											<label className="custom-control-label" for="checkout-create-acc">ДЕТАЛИ</label>
										</div>

	                					<label>Примечание к заказу (необязательно)</label>
	        							<textarea value={note} onChange={e => setNote(e.target.value)}  className="form-control" cols="30" rows="4" placeholder="Примечания к вашему заказу, например, особые пожелания отделу доставки."></textarea> */}
		                		</div>
		                		<aside className="col-lg-3">
		                			<div className="summary">
		                				<h3 className="summary-title">ВАШ ЗАКАЗ</h3>

		                				<table className="table table-summary">
		                					<thead>
		                						<tr>
		                							<th>ТОВАР</th>
		                							<th>ПОДЫТОГ</th>
		                						</tr>
		                					</thead>
											
		                					<tbody >
											
											
											{user.items.map((item, index)=>
		                						<tr  key={index}>
		                							<td><a href="">{item.product.title}</a></td>
		                							<td>{(item.product.price*item.quantity).toFixed(2)} ₽</td>
		                						</tr>)}
		                						<tr className="summary-subtotal">
		                							<td>ПОДЫТОГ:</td>
															{
                                                                user.items.map((item, index) => {
                                                                     sum = sum + item.product.price * item.quantity
                                                                    })
                                                            }
		                							<td>{sum.toFixed(2)} ₽</td>
		                						</tr>
		                						<tr className="summary-total">
		                							<td>ИТОГО:</td>
		                							<td>{sum.toFixed(2)} ₽</td>
		                						</tr>
												
		                					</tbody>
		                				</table>

		                				<button onClick={sendOrder} type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
		                					<span style={{fontSize: "18px"}} >Подтвердить заказ</span>
		                				</button>
										<ToastContainer />
		                			</div>
		                		</aside>
		                	</div>
            			</form>
	                </div>
                </div>
            </div>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  Checkout
