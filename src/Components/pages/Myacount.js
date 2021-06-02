import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import "../../App.css";
import { useHistory } from 'react-router';
import { LOGIN_ROUTE } from '../../utils/Const';
import axios from "axios"
import { Button, Modal } from 'react-bootstrap'
import { FaLastfmSquare } from 'react-icons/fa';

const Myacount = observer(() => {

    const history = useHistory()
    const {user} = useContext(Context)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
        return axios.put(`${process.env.REACT_APP_BASE_URL}/change_password/${user.userGetId?.user.id}/`, data, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
            },
        })
        .then(res => {
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setLoadingPas(false)
        })
        .catch((e)=>{
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
        return axios.put(`${process.env.REACT_APP_BASE_URL}/update_profile/${user.userGetId?.user.id}/`, data, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + user.token?.token
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
        .catch((e)=>{
            setLoading(false)
            setIsError(true)
        })
        
     }


    useEffect(() => {
        console.log(user.userId.email)
        
        

    }, [])
    return (
        <div className="page-wrapper">
            <main className="main" style={{marginTop: "50px"}}>
                

                <div className="page-content">
                    <div className="dashboard">
                        <div className="container">
                            <div className="row">
                                <aside className="col-md-4 col-lg-3">
                                    <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="tab-dashboard-link" data-toggle="tab" href="#tab-dashboard" role="tab" aria-controls="tab-dashboard" aria-selected="true">Панель управления</a>
                                        </li>
                                        <li className="nav-item">
                                            <a  className="nav-link" id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Заказы</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab-downloads-link" data-toggle="tab" href="#tab-downloads" role="tab" aria-controls="tab-downloads" aria-selected="false">Загрузки</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab-address-link" data-toggle="tab" href="#tab-address" role="tab" aria-controls="tab-address" aria-selected="false">Адрес</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab-account-link" data-toggle="tab" href="#tab-account" role="tab" aria-controls="tab-account" aria-selected="false">Профиль</a>
                                        </li>
                                        <li style={{cursor: "pointer"}} className="nav-item">
                                            <a className="nav-link" onClick={logoOut}>Выйти</a>
                                        </li>
                                    </ul>
                                </aside>

                                <div className="col-md-8 col-lg-9">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-dashboard" role="tabpanel" aria-labelledby="tab-dashboard-link">
                                            <p>Добро пожаловать <span className="font-weight-normal text-dark">{user.userId.username}</span> (не <span className="font-weight-normal text-dark">{user.userId.email}</span>? <a href="" onClick={logoOut}>Выйти</a>) 
                                            <br/>
                                            Из главной страницы аккаунта вы можете посмотреть ваши <a href="#tab-orders" className="tab-trigger-link link-underline">недавние заказы</a>, настроить <a href="#tab-address" className="tab-trigger-link">платежный адрес и адрес доставки</a>, а также <a href="#tab-account" className="tab-trigger-link">изменить пароль и основную информацию.</a>.</p>
                                        </div>

                                        <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="tab-orders-link">
                                            <p>No order has been made yet.</p>
                                            <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                        </div>

                                        <div className="tab-pane fade" id="tab-downloads" role="tabpanel" aria-labelledby="tab-downloads-link">
                                            <p>No downloads available yet.</p>
                                            <a href="category.html" className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></a>
                                        </div>

                                        <div className="tab-pane fade" id="tab-address" role="tabpanel" aria-labelledby="tab-address-link">
                                            <p>The following addresses will be used on the checkout page by default.</p>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="card card-dashboard">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Платежный адрес</h3>

                                                            <p>User Name<br/>
                                                            User Company<br/>
                                                            John str<br/>
                                                            New York, NY 10001<br/>
                                                            1-234-987-6543<br/>
                                                            yourmail@mail.com<br/>
                                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="card card-dashboard">
                                                        <div className="card-body">
                                                            <h3 className="card-title">Адреса доставки</h3>

                                                            <p>You have not set up this type of address yet.<br/>
                                                            <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="tab-account" role="tabpanel" aria-labelledby="tab-account-link">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input 
                                                            type="text" placeholder="Имя  *" 
                                                            value={firstName}
                                                            onChange={e => setFirstName(e.target.value)} 
                                                            className="form-control" required/>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <input 
                                                            placeholder="Фамилия *" 
                                                            value={lastName} 
                                                            onChange={e => setLastName(e.target.value)}
                                                            type="text" className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input  
                                                            placeholder="Имя пользователя" type="text" 
                                                            value={username} 
                                                            onChange={e => setUserName(e.target.value)} 
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input 
                                                            placeholder="Страна " type="text" 
                                                            value={country} 
                                                            onChange={e => setCountry(e.target.value)} 
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input 
                                                            placeholder="Город " type="text" 
                                                            value={city} 
                                                            onChange={e => setCity(e.target.value)} 
                                                            className="form-control" required/>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input 
                                                            placeholder="Адрес" type="text" 
                                                            value={address} 
                                                            onChange={e => setAddress(e.target.value)} 
                                                            className="form-control" required/>
                                                    </div>
                                                </div>

                                                
                                               
                                                
                                                

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <input placeholder="Телефон" value={number} onChange={e => setNumber(e.target.value)} type="tel" className="form-control" required/>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <input placeholder="Email" type="email" value={user.userId.email} onChange={e => setEmail(e.target.value)} className="form-control" required/>
                                                    </div>
                                                </div>

                                                <button 
                                                        style={{marginRight: "10px"}}
                                                        onClick={getUserPut}
                                                        disabled={loading} type="submit" 
                                                        className="btn btn-outline-primary-2">
                                                    
                                                    {loading ? 'Загрузка...' : 'СОХРАНИТЬ ИЗМЕНЕНИЯ'}
                                                </button> 
                                                <>
                                                    <button className="btn btn-outline-primary-2"  style={{color: "#1877f2", fontSize: "16px",  fontWeight: "500", cursor: "pointer"}} onClick={handleShow}>
                                                        Изменить пароль
                                                    </button >

                                                    <Modal show={show} onHide={handleClose} animation={false}>
                                                        <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div style={{maxWidth: "90%", display: "block", justifyContent: "center", marginLeft: "20px"}}>
                                                                
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
                                                            {loadingPas ? 'Загрузка...': 'Сохранить изменения'}
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

export default  Myacount
