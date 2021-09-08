import React, {useContext, useEffect, setState} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import {useHistory} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import "../../App.css";
import 'moment-timezone';





const News = observer(() => {
    const {product} = useContext(Context)

    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
        product.blogFetchTodo()
    }, []);
    return (
        <div className="page-wrapper">
            <main className="main mt-2">
                <div className="page-content">
                    <div className="container ">
                        {product.blog.map((blog, index) =>
                            <div className="entry-item lifestyle shopping " key={index}>

                                <article className="entry entry-grid text-center row">

                                    <div className="entry-body col-12 col-md-6 col-lg-7 ">
                                        <h6 className="entry-title">
                                            {blog.title}
                                        </h6>
                                        <div className="entry-content p-2">
                                            <p style={{
                                                textAlign: "left",
                                                fontSize: '16px',
                                                textAlign: "justify",
                                                color: "#000000"
                                            }}>
                                                {blog.description.slice(0, 250)}

                                            </p>
                                            <div class="entry-content">
                                                <Link to={{pathname: '/single/' + blog.id}}>
                                                    <div className="more-container text-center mt-3 mb-3">
                                                        <a href="category.html" className="btn btn-outline-dark-3 btn-more"><span>Подробнее</span><i
                                                            className="icon-long-arrow-right"></i></a>
                                                    </div>
                                                </Link>
                                                    {/*<Link to={{pathname: '/single/' + blog.id}}>*/}
                                                    {/*    <a href="" class="read-more">Подробнее</a>*/}
                                                    {/*</Link>*/}
                                            </div>

                                            {/* <button  className="btn btn-outline-dark btn-block col-12 news-btn"><span>подробнее</span><i className="icon-refresh"></i></button> */}


                                        </div>

                                    </div>
                                    <figure className="entry-media col-12 col-md-6 col-lg-5">
                                        <img className="imgPhoto"
                                             src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                    </figure>
                                </article>
                                <hr/>

                            </div>)}
                        {/* </div> */}
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>
        </div>
    )
})

export default News;
