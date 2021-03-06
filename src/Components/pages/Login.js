import React, {useState, useContext, useEffect} from 'react';
import axios from "axios";
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {useHistory} from 'react-router';
import { MYACOUNT_ROUTE, FORGET_ROUTE} from '../../utils/Const';
import "../../App.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import logo from "../../assets/login.png"
import {BsFillEyeFill} from "react-icons/bs";
import {BsFillEyeSlashFill} from "react-icons/bs";
import { userService } from '../../services/users';
const Login = observer(() => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const {user} = useContext(Context)
    const history = useHistory()

    const toggler = (e, bo) => {
        setShow(bo)
        e.preventDefault();
    }
    const sing = async (e) => {
        e.preventDefault();
        const data = {email, password, username}

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, data)
            .then(response => {
                setEmail("")
                setPassword('')
                setUsername('')
                toast.success("")
            })
            .catch(error => {
                setError(true)
                console.log(error)
                toast.error("произошла ошибка")

            })


    }

    const login = (event) => {
        setLoading(true)
        setError(false)
        const article = {password, username}

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, article)
            .then(response => {
                setLoading(false)
                setError(true)
                user.setIsAuth(true)
                localStorage.setItem('value', JSON.stringify(response.data));
                history.push(MYACOUNT_ROUTE)

            })
            .catch(error => {
                setLoading(false)
                setError(true)
                console.log(error)
                user.setIsAuth(false)
            })


        event.preventDefault();

    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <body>
        <div className="page-wrapper">
            <main className="main">

                <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                     style={{backgroundImage: `url(${logo})`}}>
                    <div className="container">
                        <div className="form-box">
                            <div className="form-tab">
                                <ul className="nav nav-pills nav-fill" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2"
                                           role="tab" aria-controls="signin-2" aria-selected="false">Логин</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="register-tab-2" data-toggle="tab"
                                           href="#register-2" role="tab" aria-controls="register-2"
                                           aria-selected="true">Регистрация</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="signin-2" role="tabpanel"
                                         aria-labelledby="signin-tab-2">
                                        {error ? <p style={{color: "red", padding: "10px"}}>Логин или пароль
                                            неверный...</p> : ""}
                                        <form onSubmit={login}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="singin-email-2"
                                                    name="singin-email"
                                                    placeholder="Имя пользователя или email"
                                                    required
                                                    value={username}
                                                    onChange={e => setUsername(e.target.value)}
                                                />
                                            </div>

                                            <div  className="form-group input-group shadow border rounded">
                                                <input
                                                    style={{borderRight: "none"}}
                                                    type={show ? "text" : "password"}
                                                    className="form-control"
                                                    id="singin-password-2"
                                                    name="singin-password"
                                                    placeholder="Пароль"
                                                    required
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                                {show ? <BsFillEyeFill  style={{marginTop: "15px", cursor: "pointer", marginRight: "10px", color: "black"  }} onClick={(e) => toggler(e,false)}/> :

                                                <BsFillEyeSlashFill onClick={(e) => toggler(e,true)} style={{marginTop: "15px", cursor: "pointer", marginRight: "10px", color: "black" }}/> }
                                            </div>
                                            <p className="forget">Если Вы забыли свой пароль, нажмите на кнопку "забыл
                                                пароль".</p>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span
                                                        style={{fontSize: "18px"}}>{loading ? 'Загрузка...' : 'Войти'}</span>
                                                </button>


                                                    <a  className="btn btn-link "><Link className="forget" to={FORGET_ROUTE}>Забыли пароль?</Link></a>

                                            </div>
                                        </form>
                                    </div>
                                    <ToastContainer/>
                                    <div className="tab-pane fade show active" id="register-2" role="tabpanel"
                                         aria-labelledby="register-tab-2">
                                        <form >
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="register-email"
                                                    placeholder="Имя"
                                                    required
                                                    value={username}
                                                    onChange={e => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="register-email-2"
                                                    name="register-email"
                                                    placeholder="Ваша электронная почта"
                                                    required
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <div  className="form-group input-group shadow border rounded">
                                                <input
                                                    style={{borderRight: "none"}}
                                                    type={show ? "text" : "password"}
                                                    className="form-control"
                                                    id="register-password-2"
                                                    name="register-password"
                                                    placeholder="Пароль"
                                                    required
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                                {show ? <BsFillEyeFill style={{marginTop: "15px", cursor: "pointer", marginRight: "10px", color: "black" }} onClick={(e) => toggler(e,false)}/> :

                                                    <BsFillEyeSlashFill   onClick={(e) => toggler(e,true)} style={{marginTop: "15px", cursor: "pointer", marginRight: "10px", color: "black"}}/> }
                                            </div>
                                            <div className="form-footer">
                                                <button onClick={(e) => sing(e)} type="submit"
                                                        className="btn btn-outline-primary-2">
                                                    <span
                                                        style={{fontSize: "18px"}}>{loading ? 'Загрузка...' : 'Регистрация'}</span>
                                                </button>

                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>
        <h2></h2>
        </body>
    )
})

export default Login;
