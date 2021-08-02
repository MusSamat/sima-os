import React, {useContext, useEffect, setState}from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { useHistory } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {HOME_ROUTE } from '../../utils/Const';
import "../../App.css";
import Moment from 'react-moment';
import 'moment-timezone';


const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  };


const News = observer(() =>{
    const {product} = useContext(Context)

    const clearState = () => {
        setState({ ...initialState, });
      };
      console.log(clearState)
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0,0)
        product.blogFetchTodo()
      }, []);
    return (
        <div className="page-wrapper">
             <main className="main mt-2">
                <div className="page-content">
                    <div className="container ">
                        <ol className="breadcrumb mb-4 ">
                            <li className="breadcrumb-item"><NavLink to={HOME_ROUTE}><a className="breadcrumb-item" href="">Главная</a></NavLink></li>
                            <li className="breadcrumb-item"><a href=""> Новости</a></li>
                        </ol>
                            {product.blog.map((blog, index) =>
                            <div className="entry-item lifestyle shopping " key={index}  >
                                
                                <article className="entry entry-grid text-center row">
                                    
                                    <div className="entry-body col-12 col-md-6 col-lg-7 ">
                                        <h6 className="entry-title">
                                           {blog.title}
                                        </h6>
                                        <div className="entry-content p-2" >
                                            <p style={{textAlign: "left", fontSize: '16px', textAlign: "justify", color: "#000000"}}>
                                                {blog.description.slice(0, 250)}
                                                
                                            </p>
                                            {/* <div className="entry-meta" style={{display: "flex"}}>
                                                <span className="entry-author">
                                                Добавленно <a href=""></a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href=""><Moment format="YYYY.MM.DD" date={blog.created}></Moment></a>
                                                <a href="" className="read-more">Подробнее</a>
                                            </div> */}
                                            <div class="entry-content">
                                                <Link to={{pathname: '/single/'+ blog.id}}>
                                                    <a href="" class="read-more">Подробнее</a>
                                                </Link>
                                            </div>
                                            
                                                {/* <button  className="btn btn-outline-dark btn-block col-12 news-btn"><span>подробнее</span><i className="icon-refresh"></i></button> */}
                                                
                                                
                                            
                                        </div>
                                       
                                    </div>
                                    <figure  className="entry-media col-12 col-md-6 col-lg-5">
                                            <img className="imgPhoto"  src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                    </figure>
                                </article><hr />
                                
                            </div>)}
                        {/* </div> */}
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  News;
