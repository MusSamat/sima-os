import React, {useContext, useEffect}from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import "../../App.css";

const News = observer(() =>{
    const {product} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        product.blogFetchTodo()
      }, []);
    return (
        <div className="page-wrapper">
             <main className="main">
        	
                

                <div className="page-content">
                    <div className="container">
                       

                        <div className="entry-container max-col-2" data-layout="fitRows">
                            
                            
                            {product.blog.map((blog, index) =>
                            <div className="entry-item lifestyle shopping col-sm-6" key={index}  >
                                
                                <article className="entry entry-grid text-center">
                                    <figure  className="entry-media">
                                            <img className="news_image" src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                    </figure>

                                    <div className="entry-body">
                                        

                                        <h6 className="entry-title">
                                           {blog.title}
                                        </h6>

                                        <div className="entry-cats">
                                            admin <a> в категорию </a>,
                                            <a href="#">Новости</a>
                                        </div>

                                        <div className="entry-content" >
                                            <p style={{textAlign: "left"}}>
                                            <div dangerouslySetInnerHTML={{__html: blog.description}} />
                                            {console.log(blog)}
                                            </p>
                                            <div className="entry-meta" style={{display: "flex"}}>
                                                <span className="entry-author">
                                                Добавленно <a href="#"></a>
                                                </span>
                                                <span className="meta-separator">|</span>
                                                <a href="#">Apr 28, 2021</a>
                                                <span className="meta-separator">|</span>
                                                <a href="#"></a>
                                                admin <a> в категорию </a>,
                                                <a href="#">Новости</a>
                                            </div>
                                            <Link to={{pathname: '/single/'+ blog.id}}>
                                            <button  className="btn btn-outline-dark btn-block col-12 news-btn"><span>подробнее</span><i className="icon-refresh"></i></button>
                                                
                                            </Link>
                                        </div>
                                       
                                    </div>
                                </article>
                                
                            </div>)}
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                        <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                    </a>
                                </li>
                                <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item">
                                    <a className="page-link page-link-next" href="#" aria-label="Next">
                                        Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  News;
