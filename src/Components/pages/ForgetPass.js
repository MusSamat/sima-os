import React, {useState, useContext, useEffect} from 'react';
import axios from "axios";
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {useHistory} from 'react-router';
import {SUBCATEGORY_ROUTE, MYACOUNT_ROUTE} from '../../utils/Const';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css";
import login from "../../assets/login.png"

const ForgetPass = observer(() => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const {user} = useContext(Context)
    const history = useHistory()


    const notify = () => toast.success("Wow so easy!");
    const notifyError = (error) => toast.error(`Wow so ${error} easy!`);


    const sing = () => {
        const article = {email}

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/password_reset/`, article)
            .then(response => {
                setEmail("")
            })
            .catch(error => {
                console.log(error)
            })


    }
    const ForgetPass = (event) => {
        const article = {password, username}

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, article)
            .then(response => {
                setPassword(response.password)
                setUsername(response.username)
                user.setIsAuth(true)
                localStorage.setItem('value', JSON.stringify(response.data));
                history.push(SUBCATEGORY_ROUTE)
                notify()
            })
            .catch(error => {
                console.log(error)
                user.setIsAuth(false)
                notifyError(error)
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
                     style={{backgroundImage: `url(${login})`}}>
                    <div className="container">
                        <div className="form-box">
                            <div className="form-tab">
                                <ul className="nav nav-pills nav-fill" role="tablist">
                                    {/* <li className="nav-item">
                                            <a className="nav-link" id="signin-tab-2" data-toggle="tab" href="#signin-2" role="tab" aria-controls="signin-2" aria-selected="false">Логин</a>
                                        </li> */}
                                    <li className="nav-item">
                                        <a className="nav-link active" id="register-tab-2" data-toggle="tab"
                                           href="#register-2" role="tab" aria-controls="register-2"
                                           aria-selected="true">
                                            Электронная почта
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade" id="signin-2" role="tabpanel"
                                         aria-labelledby="signin-tab-2">

                                    </div>
                                    <ToastContainer/>
                                    <div className="tab-pane fade show active" id="register-2" role="tabpanel"
                                         aria-labelledby="register-tab-2">
                                        <form action="#">
                                            <div className="form-group">

                                            </div>
                                            <p className="forget mb-3">Электронный адрес, указанный в вашем профиле</p>
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

                                            <div className="form-group">
                                                {/* <input
                                                        type="password" 
                                                        className="form-control" 
                                                        id="register-password-2" 
                                                        name="register-password"
                                                        placeholder="Пароль" 
                                                        required
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                    /> */}
                                            </div>

                                            <div className="form-footer">
                                                <button onClick={() => sing()} type="submit"
                                                        className="btn btn-outline-primary-2">
                                                    <span style={{fontSize: "18px"}}>Получить код</span>
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
        </body>
    )
})

export default ForgetPass;
