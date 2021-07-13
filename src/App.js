import './App.css';
import Header from "./Components/Header";
import Footer from './Components/pages/Footer';
import AppRouter from './Components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Mobile from './Components/pages/Mobile';


function App() {
  return (
     <div className="page">
       <BrowserRouter>
        <Header /><br/>
        <Mobile/>
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
