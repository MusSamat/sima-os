import './App.css';
import Header from "./Components/Header";
import Footer from './Components/pages/Footer';
import AppRouter from './Components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import Mobile from './Components/pages/Mobile';
import {ToastContainer} from "react-toastify";
import axios from "axios";


axios.interceptors.response.use((response) => {
    console.log(response.data)
    return response
})
// axios.interceptors.request.use((request) => {
//     console.log(request)
//     return request
// })
function App() {

let arr = [{
    actual: true,
    articul: "124343411",
    average_review_score: 1.3,
    cloth: "ФФФыФЫ",
    created: "2021-08-11T04:47:52.400797Z",
    description: "asdDSAS",
    id: 7,
    is_favorite: false,
    novelty: true,
    percent: 0,
    popular: false,
    price: "1200.00",

},
    {
        actual: true,
        articul: "124343411",
        average_review_score: 1.3,
        cloth: "ФФФыФЫ",
        created: "2021-08-11T04:47:52.400797Z",
        description: "asdDSAS",
        id: 7,
        is_favorite: false,
        novelty: true,
        percent: 0,
        popular: false,
        price: "1900.00",

    },
    {
        actual: true,
        articul: "124343411",
        average_review_score: 1.3,
        cloth: "ФФФыФЫ",
        created: "2021-08-11T04:47:52.400797Z",
        description: "asdDSAS",
        id: 7,
        is_favorite: false,
        novelty: true,
        percent: 0,
        popular: false,
        price: "1400.00",

    },
,
    {
        actual: true,
        articul: "124343411",
        average_review_score: 1.3,
        cloth: "ФФФыФЫ",
        created: "2021-08-11T04:47:52.400797Z",
        description: "asdDSAS",
        id: 7,
        is_favorite: false,
        novelty: true,
        percent: 0,
        popular: false,
        price: "1800.00",

    }]
console.log(arr.sort((a,b) => parseInt(b.price) ))


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
