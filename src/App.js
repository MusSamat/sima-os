import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/pages/Footer";
import AppRouter from "./Components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Mobile from "./Components/pages/Mobile";
import { ToastContainer } from "react-toastify";
import React, { useContext } from "react";
import { Context } from "./";

function App() {
  const { user } = useContext(Context);
  return (
    <div className={`page ${user.active ? "mmenu-active" : ""}`}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <br />
        <Mobile />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
