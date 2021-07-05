import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { Context } from '../../index';

const OrdersTable = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        user.getUserData()
        window.scrollTo(0,0)
    }, )
    return (
        <div  className="container">
            <p style={{fontSize: "18px", marginTop: "70px"}}>Спасибо. Ваш заказ был принят.</p>
            <table style={{marginTop: "30px"}} className="table table-cart table-mobile">
                <thead>
                    <tr >
                        <th>НОМЕР ЗАКАЗА</th>
                        <th >ДАТА:</th>
                        <th >EMAIL:</th>
                        <th >ИТОГО:</th>
                        <th >МЕТОД ОПЛАТЫ:</th>
                    </tr>
                </thead>

                <tbody>
                {console.log(user.items)}
                    {user.items.map((c, index)=>
                    
                    
                    
                    <tr>
                        <td key={index} className="product-col">
                            №{c.id}
                        </td>
                        <td className="price-col">{c.product.price} ₽</td>
                        
                        <td >
                            
                            
                        </td>

                        <td style={{fontWeight: "500"}}>{(c.product.price * c.quantity).toFixed(2)} ₽</td>
                        <td ></td>
                    </tr>)}
                </tbody>
            </table>
            <p style={{fontSize: "18px"}}>Оформите заказ и наш менеджер свяжется с Вами.</p>
        </div>
    )
})

export default OrdersTable
