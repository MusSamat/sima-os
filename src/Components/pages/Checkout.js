import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../index';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CART_ROUTE, ORDER_ROUTE} from '../../utils/Const';
import "../../App.css";
import {NavLink} from 'react-router-dom';
import {HOME_ROUTE} from '../../utils/Const';


const Checkout = observer(() => {

    const history = useHistory()
    const {user} = useContext(Context)
    const {product} = useContext(Context)
    let sum = 0
    const [note, setNote] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [telophone, setTelephon] = useState()
    const [company, setCompany] = useState()
    const [cupon, setCupon] = useState()
    const [discount, setDiscount] = useState()
    // const [note, setNote] = useState()

    console.log(product.productOrder)

    const notify = () => toast.success("Спасибо. Ваш заказ был принят.");
    const notifyError = () => toast.error("");

    const sendOrder = (e) => {
        let items = []
        product.productOrder?.map((item, i) => {
            let obj =
                {
                    product: item.product,
                    quantity: item.quantity,
                    price: item.percent > 0 ? (item.price -
                        (item.price * item.percent / 100)) * item.quantity :
                        item.price * item.quantity,
                    color: item.color
                }
            items.push(obj)
        })

        const data = JSON.stringify({
            user: user.carts.user,
            first_name: user.isAuth ? user.userId.first_name : firstName,
            last_name: user.isAuth ? user.userId.last_name : lastName,
            email: user.isAuth ? user.userId.email : email,
            address: user.isAuth ? user.userId.address : address,
            country: user.isAuth ? user.userId.country : country,
            city: user.isAuth ? user.userId.city : city,
            telephone: user.isAuth ? user.userId.phone_number : telophone,
            cart_user_id: user.isAuth ? user.carts.id : '',
            note: note,
            items: user.isAuth ? [] : items,
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/order/`, data, user.isAuth ?
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            } : {
                headers: {
                    'Content-Type': 'application/json',
                },

            })
            .then(response => {
                setNote('')
                notify()
                user.getCartData()
                history.push(ORDER_ROUTE)
                product.productOrder.length = 0
            })
            .catch(error => {
                console.log(error)
                notifyError()
            })
        e.preventDefault();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        user.getUserData()
        console.log(user.userId)
    }, [])
    return (
        <div className="page-wrapper" style={{marginTop: "50px"}}>
            <div className="page-content">
                <div className="checkout">
                    <div className="container">
                        <ol className="breadcrumb mb-4 ">
                            <li className="breadcrumb-item"><NavLink to={HOME_ROUTE}><a className="breadcrumb-item"
                                                                                        href="">Главная</a></NavLink>
                            </li>
                            <li className="breadcrumb-item"><NavLink to={CART_ROUTE}><a className="breadcrumb-item"
                                                                                        href="">Корзина</a></NavLink>
                            </li>
                            <li className="breadcrumb-item"><a href=""> Оформить заказ</a></li>
                        </ol>
                        {user.isRoute ?
                            <button onClick={() => user.setRoute(false)}>Есть купон? Нажмите, чтобы ввести</button>
                            : <button onClick={() => user.setRoute(true)}>Есть купон? Нажмите, чтобы ввести</button>}

                        {user.isRoute ? <div class="cta cta-horizontal cta-horizontal-box bg-image mb-5" style={{
                            backgroundImage: "url(assets/images/backgrounds/cta/bg-1.jpg)",
                            backgroundPsition: "center right"
                        }}>
                            <div class="row align-items-center">
                                <div class="col-lg-4 col-xl-3 offset-xl-1">
                                    <h3 class="cta-title">Join Our Newsletter</h3>
                                    <p class="cta-desc">Lorem ipsum dolor sit amet adipiscing.</p>
                                </div>

                                <div class="col-lg-8 col-xl-7">
                                    <form action="#">
                                        <div class="input-group">
                                            <input type="email" class="form-control"
                                                   placeholder="Enter your Email Address" aria-label="Email Adress"
                                                   required/>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary btn-rounded" type="submit">
                                                    <span>Subscribe</span><i class="icon-long-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> : ""}


                        <form action="#">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2 className="checkout-title">ДЕТАЛИ ОПЛАТЫ</h2>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Имя </label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.first_name : firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                style={{fontSize: "16px", fontWeight: "500"}}
                                                className="form-control" required/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Фамилия</label>
                                            <input
                                                onChange={e => setLastName(e.target.value)}
                                                value={user.isAuth ? user.userId.last_name : lastName} type="text"
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Страна</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.country : country}
                                                onChange={e => setCountry(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Город</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.city : city}
                                                onChange={e => setCity(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} htmlFor="register-password">Адрес</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.address : address}
                                                onChange={e => setAddress(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>


                                        </div>
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} htmlFor="register-password">Наименование организации</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.address : company}
                                                onChange={e => setCompany(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
                                    {/*<label style={{fontSize: "16px"}} for="register-password">Адрес</label>*/}
                                    {/*<input*/}
                                    {/*    type="text"*/}
                                    {/*    value={user.isAuth ? user.userId.address : address}*/}
                                    {/*    onChange={e => setAddress(e.target.value)}*/}
                                    {/*    className="form-control" required*/}
                                    {/*    style={{fontSize: "16px", fontWeight: "500"}}/>*/}

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Телефон</label>
                                            <input
                                                onChange={e => setTelephon(e.target.value)}
                                                value={user.isAuth ? user.userId.phone_number : telophone} type="tel"
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Email</label>
                                            <input
                                                type="email"
                                                value={user.isAuth ? user.userId.email : email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
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


                                            {user.isAuth ? user.items?.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.product.title}</td>
                                                        <td>{(item.product?.price * item.quantity).toFixed(2)} ₽</td>
                                                    </tr>) :
                                                product.productOrder?.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td>{(item.price * item.quantity).toFixed(2)} ₽</td>
                                                    </tr>)
                                            }
                                            <tr className="summary-subtotal">
                                                <td>ПОДЫТОГ:</td>
                                                {user.isAuth ?
                                                    user.items?.map((item, index) => {
                                                        sum = sum + item.product?.price * item.quantity
                                                    }) :
                                                    product.productOrder?.map((item, index) => {
                                                        sum = sum + item.price * item.quantity
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

                                        <button onClick={sendOrder} type="submit"
                                                className="btn btn-outline-primary-2 btn-order btn-block">
                                            <span style={{fontSize: "18px"}}>Подтвердить заказ</span>
                                        </button>
                                        <ToastContainer/>
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

export default Checkout
