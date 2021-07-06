import React, {useContext, useEffect}from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "../../App.css";
import Moment from 'react-moment';
import 'moment-timezone';

const News = observer(() =>{
    const {product} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0,0)
        product.blogFetchTodo()
      }, []);
    return (
        <div className="page-wrapper">
             <main className="main">
        	
                

                <div className="page-content">
                    <div className="container">
                       

                        {/* <div className="container " data-layout="fitRows"> */}
                            {/* {product.blog.map((blog, index) =>
                            <div className="row">
                                
                                    <article class="entry entry-list">
                                        <div class="row align-items-center">
                                            <div class="col-md-6 p-4">
                                                <figure class="entry-media">
                                                    <img className="news_image" src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                                    
                                                </figure>
                                                <figure  className="entry-media">
                                                    <img className="news_image" src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                                </figure>
                                            </div>

                                            <div class="col-md-6 p-4">
                                                <div class="entry-body">
                                                    <div class="entry-meta">
                                                        <span class="entry-author">
                                                            by <a href="#">John Doe</a>
                                                        </span>
                                                        <span class="meta-separator">|</span>
                                                        <a href="#">Nov 22, 2018</a>
                                                    </div>

                                                    <h2 class="entry-title">
                                                        <a href="">{blog.title}</a>
                                                    </h2>

                                                    <div class="entry-content">
                                                        <p>{blog.description.slice(0, 300)}</p>
                                                        <a href="" className="read-more">Подробнее</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </article><hr/>
                               
                            </div>)} */}
                            

                            {console.log(product.blog)}
                            {product.blog.map((blog, index) =>
                            <div className="entry-item lifestyle shopping " key={index}  >
                                
                                <article className="entry entry-grid text-center row">
                                    
                                    <div className="entry-body col-12 col-md-6 col-lg-6 ">
                                        <h6 className="entry-title">
                                           {blog.title}
                                        </h6>
                                        <div className="entry-content p-4" >
                                            <p style={{textAlign: "left", fontSize: '16px', textAlign: "justify"}}>
                                                {blog.description.slice(0, 750)}
                                                
                                            </p>
                                            <div className="entry-meta" style={{display: "flex"}}>
                                                <span className="entry-author">
                                                Добавленно <a href=""></a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href=""><Moment format="YYYY.MM.DD" date={blog.created}></Moment></a>
                                                {/* <a href="" className="read-more">Подробнее</a> */}
                                            </div>
                                            <Link to={{pathname: '/single/'+ blog.id}}>
                                                <button  className="btn btn-outline-dark btn-block col-12 news-btn"><span>подробнее</span><i className="icon-refresh"></i></button>
                                                
                                                
                                            </Link>
                                        </div>
                                       
                                    </div>
                                    <figure  className="entry-media col-12 col-md-6 col-lg-6">
                                            <img className="" src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
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
