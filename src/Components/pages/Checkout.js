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
import Checkbox from '@material-ui/core/Checkbox';
import {Button, Col, Form, Row} from "react-bootstrap";
import {FormControlLabel} from "@material-ui/core";


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
    const [checked, setChecked] = React.useState(true);
    const [value, setValue] = useState("")
    let datalocal = JSON.parse(localStorage.getItem('order'))

    const notify = () => toast.success("Спасибо. Ваш заказ был принят.");
    const notifyError = () => toast.error("");


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const sendOrder = (e) => {
        let items = []
        datalocal?.map((item, i) => {
            let obj =
                {
                    product: item.id,
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
            first_name: user.isAuth ? user.userId.first_name ? user.userId.first_name : firstName : firstName,
            last_name: user.isAuth ? user.userId.last_name ? user.userId.last_name : lastName : lastName,
            email: user.isAuth ? user.userId.email : email,
            address: user.isAuth ? user.userId.address ? user.userId.address : address : address,
            country: user.isAuth ? user.userId.country ? user.userId.country : country : country,
            city: user.isAuth ? user.userId.city ? user.userId.city : city : city,
            telephone: user.isAuth ? user.userId.phone_number ? user.userId.phone_number : telophone : telophone,
            cart_user_id: user.isAuth ? user.carts.id : '',
            company: user.isAuth ? user.userId.company ? user.userId.company : company : company,
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
                product.getActualProducts()
                localStorage.removeItem('order')
                product.productOrder = []
            })
            .catch(error => {
                console.log(error)
                notifyError()
            })
        e.preventDefault();
    }
    console.log(user.carts)

    useEffect(() => {
        window.scrollTo(0, 0)
        user.getUserData()
    }, [])
    return (
        <div className="page-wrapper" style={{marginTop: "50px"}}>
            <div className="page-content">
                <div className="checkout">
                    <div className="container">
                        <ol className="breadcrumb mb-4 ">
                            <li className="breadcrumb-item"><NavLink to={CART_ROUTE}><a className="breadcrumb-item"
                                                                                        href="">Корзина</a></NavLink>
                            </li>
                            <li className="breadcrumb-item"><a href=""> Оформить заказ</a></li>
                        </ol>
                        {user.isRoute ?
                            <div style={{fontSize: "16px"}} className="s-title">Есть купон? Нажмите, чтобы <a href=""
                                                                                                              onClick={() => user.setRoute(false)}
                                                                                                              style={{fontSize: "16px"}}
                                                                                                              className=" s-title btn-link"> ввести</a>
                            </div>
                            : null}

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
                                                value={user.isAuth ? user.userId.first_name ? user.userId.first_name : firstName : firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                style={{fontSize: "16px", fontWeight: "500"}}
                                                className="form-control" required/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Фамилия</label>
                                            <input
                                                onChange={e => setLastName(e.target.value)}
                                                value={user.isAuth ? user.userId.last_name ? user.userId.last_name : lastName : lastName} type="text"
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Страна</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.country ? user.userId.country : country : country}
                                                onChange={e => setCountry(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Город</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.city ? user.userId.city : city : city}
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
                                                value={user.isAuth ? user.userId.address ? user.userId.address : address : address}
                                                onChange={e => setAddress(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>


                                        </div>
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} htmlFor="register-password">Наименование
                                                организации</label>
                                            <input
                                                type="text"
                                                value={user.isAuth ? user.userId.address ? user.userId.address : company : company}
                                                onChange={e => setCompany(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Телефон</label>
                                            <input
                                                onChange={e => setTelephon(e.target.value)}
                                                value={user.isAuth ? user.userId.phone_number ? user.userId.phone_number : telophone : telophone} type="tel"
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
                                                datalocal?.map((item, index) =>
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
                                                    datalocal?.map((item, index) => {
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

                                        <Form>
                                            {console.log(value)}
                                            <label style={{cursor: "pointer"}}>
                                                <input type="radio" value="odin"
                                                       checked={value === "odin"}
                                                       onChange={e => setValue(e.target.value)}/>
                                                Оплата курьеру при доставке
                                            </label><br/>
                                            <label style={{cursor: "pointer"}}>
                                                <input type="radio" value="two"
                                                       checked={value === "two"}
                                                       onChange={e => setValue(e.target.value)}/>

                                                VISA/MasterCard/Maestro/ЭЛКАРТ
                                            </label><br/>
                                            <label style={{cursor: "pointer"}}>
                                                <input type="radio" value="three"
                                                       checked={value === "three"}
                                                       onChange={e => setValue(e.target.value)}/>
                                                ЭЛСОМ
                                            </label><br/>
                                            <label style={{cursor: "pointer"}}>
                                                <input type="radio" value="four"
                                                       checked={value === "four"}
                                                       onChange={e => setValue(e.target.value)}/>
                                                О!Деньги
                                            </label><br/>
                                        </Form>
                                        <span>Способ доставки</span>
                                        <Form.Check type="radio" aria-label="radio 1" label="Доставка курьером"/>

                                        <Form.Check aria-label="option 1"  label="Прочитал и согласен с"/>
                                        <a href="">Соглашение на обработку персональных данных</a>
                                        <Form.Check aria-label="option 1" label="Прочитал и согласен с"/>
                                        <a href="">Условия использования</a>


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
