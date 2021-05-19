import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Context } from '../../index';

const Checkout = observer(() => {

	const {user} = useContext(Context)
	let sum = 0

	useEffect(() => {
		user.getCartData()
	}, [])
    return (
        <div classNameName="page-wrapper">
            <div className="page-content">
            	<div className="checkout">
	                <div className="container">
            			<div className="checkout-discount">
            				<form action="#">
        						<input type="text" className="form-control" required id="checkout-discount-input"/>
            					<label for="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
            				</form>
            			</div>
            			<form action="#">
		                	<div className="row">
		                		<div className="col-lg-9">
		                			<h2 className="checkout-title">ДЕТАЛИ ОПЛАТЫ</h2>
		                				<div className="row">
		                					<div className="col-sm-6">
		                						<label>Имя  *</label>
		                						<input type="text" className="form-control" required/>
		                					</div>

		                					<div className="col-sm-6">
		                						<label>Фамилия *</label>
		                						<input type="text" className="form-control" required/>
		                					</div>
		                				</div>
										<label>Страна *</label>
										<select className="form-select form-control" aria-label=".form-select-sm example">
											<option selected>Open this select menu</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>

										<label>Город *</label>
	        							<input type="text" className="form-control" required/>

	            						<div className="row">
		                					<div className="col-sm-6">
		                						<label>Телефон *</label>
		                						<input type="tel" className="form-control" required/>
		                					</div>

		                					<div className="col-sm-6">
		                						<label>Email *</label>
		                						<input type="email" className="form-control" required/>
		                					</div>
		                				</div>

	                					

	        							<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-create-acc"/>
											<label className="custom-control-label" for="checkout-create-acc">ДЕТАЛИ</label>
										</div>

	                					<label>Примечание к заказу (необязательно)</label>
	        							<textarea className="form-control" cols="30" rows="4" placeholder="Примечания к вашему заказу, например, особые пожелания отделу доставки."></textarea>
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
											
		                					<tbody>
											
											
											{user.items.map((item, index)=>
		                						<tr key={index}>
		                							<td><a href="">{item.product.title}</a></td>
		                							<td>{item.product.price*item.quantity}</td>
		                						</tr>)}
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

		                				<button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
		                					<span className="btn-text">Подтвердить заказ</span>
		                					<span className="btn-hover-text">Перейти к оформлению заказа</span>
		                				</button>
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
