import {observer} from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../../index';
import "../../App.css";
import {useHistory} from 'react-router';
import {LOGIN_ROUTE, ORDER_ROUTE, HOME_ROUTE} from '../../utils/Const';
import axios from "axios"
import {Button, Modal} from 'react-bootstrap'
import Moment from 'react-moment';
import 'moment-timezone';
import {Switch, Route, Link, NavLink} from 'react-router-dom';

const Myacount = observer(() => {

    const history = useHistory()
    const {user} = useContext(Context)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    const [username, setUserName] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [number, setNumber] = useState()
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loadingPas, setLoadingPas] = useState(false);
    const [isErrorPas, setIsErrorPas] = useState(false);


    const logoOut = () => {
        user.setIsAuth(false)
        localStorage.removeItem("value")
        history.push(LOGIN_ROUTE)

    }

    const changePassword = () => {
        setLoadingPas(true)
        setIsErrorPas(false)

        const data = JSON.stringify({
            old_password: oldPassword,
            password: newPassword,
            password2: confirmPassword,
        })
        return axios.put(`${process.env.REACT_APP_BASE_URL}/change_password/${user.token?.user.id}/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            },
        })
            .then(res => {
                setOldPassword('')
                setNewPassword('')
                setConfirmPassword('')
                setLoadingPas(false)
            })
            .catch((e) => {
                setLoadingPas(false)
                setIsErrorPas(true)
                handleClose(true)
            })
    }


    const getUserPut = () => {
        setLoading(true)
        setIsError(false)

        const data = JSON.stringify({
            username: username,
            first_name: firstName,
            last_name: lastName,
            phone_number: number,
            address: address,
            city: city,
            country: country,
            email: user.userId.email

        })
        return axios.put(`${process.env.REACT_APP_BASE_URL}/update_profile/${user.token?.user.id}/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            },
        })
            .then(res => {
                setUserName("")
                setUserName("")
                setFirstName("")
                setLastName('')
                setNumber('')
                setAddress('')
                setCity('')
                setCountry('')
                setEmail('')
                setLoading(false)

            })
            .catch((e) => {
                setLoading(false)
                setIsError(true)
            })

    }

    const openModal = (id) => {
        setLgShow(true)
        user.getOrderDataId(id)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        user.getUserData()
        if(user.token?.token){
            user.getOrderData()
        }



    }, [])
    return (
        <div className="page-wrapper">
            <main className="main" style={{marginTop: "10px"}}>


                <div className="page-content">
                    <div className="dashboard">
                        <div className="container">

                            <div className="row">
                                <aside className="col-md-4 col-lg-3">
                                    <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                                        <li className="nav-item">
                                            <a style={{fontSize: "18px", color: "#000000"}} className="nav-link active"
                                               id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard"
                                               role="tab" aria-controls="tab-dashboard" aria-selected="true">Панель
                                                управления</a>
                                        </li>
                                        <li className="nav-item">
                                            <a style={{fontSize: "18px", color: "#000000"}} className="nav-link"
                                               id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab"
                                               aria-controls="tab-orders" aria-selected="false">Заказы</a>
                                        </li>
                                        <li className="nav-item">
                                            <a style={{fontSize: "18px", color: "#000000"}} className="nav-link"
                                               id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab"
                                               aria-controls="tab-account" aria-selected="false">Профиль</a>
                                        </li>
                                        <li style={{cursor: "pointer"}} className="nav-item">
                                            <a style={{fontSize: "18px", color: "#000000"}} className="nav-link"
                                               onClick={logoOut}>Выйти</a>
                                        </li>
                                    </ul>
                                </aside>

                                <div className="col-md-8 col-lg-9">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel"
                                             aria-labelledby="tab-dashboard-link">
                                            <p style={{fontSize: "16px", color: "#000000"}}>Добро пожаловать <span
                                                style={{fontSize: "16px"}}
                                                className="font-weight-normal text-dark">{user.userId?.username}</span> !
                                                <br/>
                                                Из главной страницы аккаунта вы можете посмотреть ваши
                                                   едавние
                                                    заказы настроить
                                                                             платежный
                                                    адрес и адрес доставки, а также
                                                                                           изменить
                                                    пароль и основную информацию..</p>
                                        </div>

                                        <div className="tab-pane fade" id="tab-orders" role="tabpanel"
                                             aria-labelledby="tab-orders-link">

                                            {user.order ?
                                                <table className="table table-cart table-mobile">
                                                    <thead>
                                                    <tr>
                                                        <th style={{color: "black"}}>ЗАКАЗ</th>
                                                        <th style={{color: "black"}}>ДАТА</th>
                                                        <th style={{color: "black"}}>СТАТУС</th>
                                                        <th style={{color: "black"}}>ИТОГО</th>
                                                        <th style={{color: "black"}}>ДЕЙСТВИЯ</th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    {user.order?.map((c, index) =>


                                                        <tr>
                                                            <td key={index} style={{fontWeight: "500"}}
                                                                className="product-col">
                                                                №{c.id}
                                                            </td>
                                                            <td className="price-col"><Moment format="YYYY.MM.DD"
                                                                                              date={c.created}></Moment>
                                                            </td>

                                                            <td>
                                                                {c.status}

                                                            </td>

                                                            <td style={{fontWeight: "500"}}> {c.items.map(i => i.quantity) * c.items.map(i => i.product.price)} ₽
                                                                ЗА {c.items.map(i => i.quantity)} ЕДИНИЦ
                                                            </td>
                                                            <td><Button id={c.id} onClick={() => openModal(c.id)}
                                                                        className="btn btn-outline-primary">ПРОСМОТР</Button>
                                                            </td>
                                                        </tr>)}
                                                    </tbody>
                                                </table> :
                                                <p style={{fontSize: "16px"}}>Заказ еще не поступил.</p>}
                                            <Modal
                                                show={lgShow}
                                                onHide={() => setLgShow(false)}
                                                size="lg"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="example-modal-sizes-title-lg">

                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body style={{padding: "20px"}}>
                                                    <h3>Информация о заказе</h3>
                                                    {user.orderId?.map((c, index) =>
                                                        <p key={index}>{c.items.map((i, index) =>
                                                            <table key={index}
                                                                   className="table table-cart table-mobile">
                                                                <tr>
                                                                    <th>ТОВАР</th>
                                                                    <th>ИТОГО</th>
                                                                </tr>
                                                                <tr>
                                                                    <Link to={{pathname: '/product/' + i.product.id}}>
                                                                        <td>{i.product.title} × {c.items.map(i => i.quantity)}</td>
                                                                    </Link>
                                                                    <td>{c.items.map(i => i.quantity) * c.items.map(i => i.product.price)} ₽</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>ПОДЫТОГ</td>
                                                                    <td>{c.items.map(i => i.quantity) * c.items.map(i => i.product.price)} ₽</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>МЕТОД ОПЛАТЫ:</td>
                                                                    <td>ДЕНЕЖНЫЙ ПЕРЕВОД</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>ИТОГО:</td>
                                                                    <td>{c.items?.map(i => i.quantity) * c.items?.map(i => i.product.price)} ₽</td>
                                                                </tr>

                                                            </table>
                                                        )}</p>
                                                    )}</Modal.Body>
                                            </Modal>
                                        </div>

                                        <div className="tab-pane fade" id="tab-account" role="tabpanel"
                                             aria-labelledby="tab-account-link">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input
                                                            type="text" placeholder="Имя  "
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            value={firstName}
                                                            onChange={e => setFirstName(e.target.value)}
                                                            className="form-control" required/>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Фамилия "
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            value={lastName}
                                                            onChange={e => setLastName(e.target.value)}
                                                            type="text" className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Имя пользователя" type="text"
                                                            value={username}
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            onChange={e => setUserName(e.target.value)}
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Страна " type="text"
                                                            value={country}
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            onChange={e => setCountry(e.target.value)}
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Город " type="text"
                                                            value={city}
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            onChange={e => setCity(e.target.value)}
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Адрес" type="text"
                                                            value={address}
                                                            style={{fontSize: "16px", fontWeight: "500"}}
                                                            onChange={e => setAddress(e.target.value)}
                                                            className="form-control" required/>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Телефон"
                                                            value={number} onChange={e => setNumber(e.target.value)}
                                                            type="tel" className="form-control" required
                                                            style={{fontSize: "16px", fontWeight: "500"}}/>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <input
                                                            placeholder="Email" type="email"
                                                            value={user.userId?.email}
                                                            onChange={e => setEmail(e.target.value)}
                                                            className="form-control" required
                                                            style={{fontSize: "16px", fontWeight: "500"}}/>
                                                    </div>
                                                </div>

                                                <button
                                                    style={{marginRight: "10px", fontSize: "16px"}}
                                                    onClick={getUserPut}
                                                    disabled={loading} type="submit"
                                                    className="btn btn-outline-primary-2">

                                                    {loading ? 'Загрузка...' : 'Сохранить изменения'}
                                                </button>
                                                <>
                                                    <button className="btn btn-outline-primary-2"
                                                            style={{fontSize: "16px", cursor: "pointer"}}
                                                            onClick={handleShow}>
                                                        Изменить пароль
                                                    </button>

                                                    <Modal show={show} onHide={handleClose} animation={false}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Изменить пароль</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div style={{
                                                                maxWidth: "90%",
                                                                display: "block",
                                                                justifyContent: "center",
                                                                marginLeft: "20px"
                                                            }}>

                                                                <input
                                                                    placeholder="Текущий пароль"
                                                                    onChange={e => setOldPassword(e.target.value)}
                                                                    value={oldPassword}
                                                                    type="password" className="form-control"/>


                                                                <input
                                                                    placeholder="Новый пароль"
                                                                    onChange={e => setNewPassword(e.target.value)}
                                                                    value={newPassword}
                                                                    type="password" className="form-control"/>


                                                                <input
                                                                    placeholder="Подтвердите новый пароль"
                                                                    onChange={e => setConfirmPassword(e.target.value)}
                                                                    value={confirmPassword}
                                                                    type="password" className="form-control mb-2"/>
                                                            </div>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="primary" onClick={changePassword}>
                                                                {loadingPas ? 'Загрузка...' : 'Сохранить изменения'}
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
})

export default Myacount
