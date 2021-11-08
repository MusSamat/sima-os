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
import { Form} from "react-bootstrap";


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
    const [checkeds, setCheckeds] = React.useState(true);
    const [value, setValue] = useState("")
    let datalocal = JSON.parse(localStorage.getItem('order'))

    const notify = () => toast.success("Спасибо. Ваш заказ был принят.");
    const notifyError = () => toast.error("");


    let linkData = '';

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
            first_name: user.token?.token ? user.userId.first_name ? user.userId.first_name : firstName : firstName,
            last_name: user.token?.token ? user.userId.last_name ? user.userId.last_name : lastName : lastName,
            email: user.token?.token ? user.userId.email : email,
            address: user.token?.token ? user.userId.address ? user.userId.address : address : address,
            country: user.token?.token ? user.userId.country ? user.userId.country : country : country,
            city: user.token?.token ? user.userId.city ? user.userId.city : city : city,
            telephone: user.token?.token ? user.userId.phone_number ? user.userId.phone_number : telophone : telophone,
            cart_user_id: user.token?.token ? user.carts.id : '',
            company: user.token?.token ? user.userId.company ? user.userId.company : company : company,
            note: note,
            items: user.token?.token? [] : items,
        })
        linkData = data
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/order/`, data, user.token?.token ?
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
                localStorage.removeItem('order')
                product.productOrder = []
                user.getImageLogo()
            })
            .catch(error => {
                console.log(error)
                notifyError()
            })
        e.preventDefault();
    }

    const handleChange = (e, link) => {
        setValue(e.target.value)
        setCheckeds(true);
        localStorage.setItem('link', JSON.stringify(link));
    }

    const handleChanges = (e) => {
        setValue(e.target.value)
        setCheckeds(false);
    }


    let link = JSON.parse(localStorage.getItem('link'))
    console.log(link)

    useEffect(() => {
        window.scrollTo(0, 0)
        user.getUserData()
    }, [])
    return (
        <div className="page-wrapper" style={{marginTop: "50px"}}>
            <div className="page-content">
                <div className="checkout">
                    <div className="container">
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
                                                value={user.token?.token ? user.userId.first_name ? user.userId.first_name : firstName : firstName}
                                                onChange={e => setFirstName(e.target.value)}
                                                style={{fontSize: "16px", fontWeight: "500"}}
                                                className="form-control" required/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Фамилия</label>
                                            <input
                                                onChange={e => setLastName(e.target.value)}
                                                value={user.token?.token ? user.userId.last_name ? user.userId.last_name : lastName : lastName} type="text"
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Страна</label>
                                            <input
                                                type="text"
                                                value={user.token?.token? user.userId.country ? user.userId.country : country : country}
                                                onChange={e => setCountry(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Город</label>
                                            <input
                                                type="text"
                                                value={user.token?.token ? user.userId.city ? user.userId.city : city : city}
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
                                                value={user.token?.token ? user.userId.address ? user.userId.address : address : address}
                                                onChange={e => setAddress(e.target.value)}
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>


                                        </div>
                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} htmlFor="register-password">Наименование
                                                организации</label>
                                            <input
                                                type="text"
                                                value={user.token?.token ? user.userId.address ? user.userId.address : company : company}
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
                                                value={user.token?.token ? user.userId.phone_number ? user.userId.phone_number : telophone : telophone} type="tel"
                                                className="form-control" required
                                                style={{fontSize: "16px", fontWeight: "500"}}/>
                                        </div>

                                        <div className="col-sm-6">
                                            <label style={{fontSize: "16px"}} for="register-password">Email</label>
                                            <input
                                                type="email"
                                                value={user.token?.token ? user.userId.email : email}
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


                                            {user.token?.token ? user.items?.map((item, index) =>
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
                                                {user.token?.token ?
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

                                        {/*<Form>*/}
                                        {/*    <label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*        <input style={{cursor: "pointer"}}   className="mr-3" type="radio" value="odin"*/}
                                        {/*               checked={value === "odin"}*/}
                                        {/*               onChange={handleChanges}/>*/}
                                        {/*        Оплата курьеру при доставке*/}
                                        {/*    </label><br/>*/}
                                        {/*    <label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*        <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="two"*/}
                                        {/*               checked={value === "two"}*/}
                                        {/*               onChange={(e) => handleChange(e,"visa")}/>*/}

                                        {/*        VISA/MasterCard/Maestro/ЭЛКАРТ*/}
                                        {/*    </label><br/>*/}
                                        {/*    <label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*        <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="three"*/}
                                        {/*               checked={value === "three"}*/}
                                        {/*               onChange={(e) => handleChange(e,"three")}/>*/}
                                        {/*        ЭЛСОМ*/}
                                        {/*    </label><br/>*/}
                                        {/*    <label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*        <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="four"*/}
                                        {/*               checked={value === "four"}*/}
                                        {/*               onChange={(e) => handleChange(e,"four")}/>*/}
                                        {/*        О!Деньги*/}
                                        {/*    </label><br/>*/}
                                        {/*</Form>*/}
                                        {/*<span>Способ доставки</span><br/>*/}
                                        {/*<label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*    <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="four"*/}

                                        {/*          />*/}
                                        {/*    Доставка курьером*/}
                                        {/*</label><br/>*/}

                                        {/*<label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*    <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="four"*/}

                                        {/*    />*/}
                                        {/*    Прочитал и согласен с*/}
                                        {/*</label><br/>*/}
                                        {/*<a href="">Соглашение на обработку персональных данных</a>*/}

                                        {/*<label className="s-title" style={{cursor: "pointer"}}>*/}
                                        {/*    <input style={{cursor: "pointer"}} className="mr-3" type="radio" value="four"*/}

                                        {/*    />*/}
                                        {/*    Прочитал и согласен с*/}
                                        {/*</label><br/>*/}
                                        {/*<a href="">Условия использования</a>*/}
                                        {/*{checkeds ? <NavLink className="btn btn-outline-primary-2 btn-order btn-block mt-3" to={`/${link}`}>Подтвердить заказ</NavLink> :*/}
                                            <button onClick={sendOrder} type="submit"
                                                    className="btn btn-outline-primary-2 btn-order btn-block mt-3">
                                                <span style={{fontSize: "18px"}}>Подтвердить заказ</span>
                                            </button>
                                        {/*}*/}

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
