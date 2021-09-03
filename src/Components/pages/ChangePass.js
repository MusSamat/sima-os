import React, {useState, useContext, useEffect, useRef} from 'react';
import axios from "axios";
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {useHistory} from 'react-router';
import { LOGIN_ROUTE} from '../../utils/Const';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css";
import logo from "../../assets/login.png"


const ChangePass = observer((props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password1, setPassword1] = useState()
    const [passError, setPassError] = useState(false)
    const {user} = useContext(Context)
    const history = useHistory()
    const token = props.match.params.token



    const sing = () => {

        const article = {password, token}

        axios.post(`${process.env.REACT_APP_BASE_URL}/api/password_reset/confirm/`, article)
            .then(response => {
                setEmail("")
                history.push(LOGIN_ROUTE)

            })
            .catch(error => {
                console.log(error)
            })


    }

    const checkValidation = (e) => {
        setPassword1(e.target.value)
        if(password != password1){
            setPassError(true)
        }
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
                                        <a className="nav-link active" id="register-tab-2" data-toggle="tab"
                                           href="#register-2" role="tab" aria-controls="register-2"
                                           aria-selected="true">
                                            Сброс пароля
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
                                            <p className="forget mb-3">Новый пароль</p>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="register-email-2"
                                                    name="register-email"
                                                    placeholder="Пароль"
                                                    required
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="register-password-2"
                                                    name="register-password"
                                                    placeholder="Подтвердить Пароль"
                                                    required
                                                    value={password1}
                                                    onChange={e => checkValidation(e)}
                                                />
                                            </div>

                                            <div className="form-footer">
                                                <button disabled={!passError} onClick={() => sing()} type="submit"
                                                        className="btn btn-outline-primary-2">
                                                    <span style={{fontSize: "18px"}}>Отправить</span>
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

export default ChangePass;
