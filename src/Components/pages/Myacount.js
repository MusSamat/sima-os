import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect} from 'react';
import { Context } from '../../index';
import "../../App.css";
import { useHistory } from 'react-router';
import { LOGIN_ROUTE } from '../../utils/Const';

const Myacount = observer(() => {

    const history = useHistory()
    const {user} = useContext(Context)

     const logoOut = () => {
        user.setIsAuth(false)
        localStorage.removeItem("value")
        history.push(LOGIN_ROUTE)

    }

    useEffect(() => {
        user.getUserData()
        console.log(user.userId.email)
        
        

    }, [])
    return (
        <div className="page-wrapper">
            <main className="main">
                <div className="page-header text-center" style={{backgroundImage: "url('assets/images/page-header-bg.jpg')"}}>
                    <div className="container">
                        <h1 className="page-title">My Account<span>Shop</span></h1>
                    </div>
                </div>
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">My Account</li>
                        </ol>
                    </div>
                </nav>

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
                                            <a  id="tab-orders-link" data-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="false">Заказы</a>
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
                                                            <h3 className="card-title">Billing Address</h3>

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
                                                            <h3 className="card-title">Shipping Address</h3>

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
                                                        <label>First Name *</label>
                                                        <input  type="text" className="form-control" required/>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <label>Last Name *</label>
                                                        <input type="text" className="form-control" required/>
                                                    </div>
                                                </div>

                                                <label>Display Name *</label>
                                                <input type="text" className="form-control" required/>
                                                <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>

                                                <label>Email address *</label>
                                                <input type="email" className="form-control" required/>

                                                <label>Current password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control"/>

                                                <label>New password (leave blank to leave unchanged)</label>
                                                <input type="password" className="form-control"/>

                                                <label>Confirm new password</label>
                                                <input type="password" className="form-control mb-2"/>

                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>SAVE CHANGES</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
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
