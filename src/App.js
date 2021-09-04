import './App.css';
import Header from "./Components/Header";
import Footer from './Components/pages/Footer';
import AppRouter from './Components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import Mobile from './Components/pages/Mobile';
import {ToastContainer} from "react-toastify";
import axios from "axios";
import React, {useEffect} from "react";


// axios.interceptors.response.use((response) => {
//     console.log(response.data)
//     return response
// })
axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        localStorage.removeItem('value');
    }
    return error;
});

function App() {




    return (
        <div className="page">
            <BrowserRouter>
                <ToastContainer/>
                <Header/><br/>
                <Mobile/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;

