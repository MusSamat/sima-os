import React, {useContext, useEffect}from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { useHistory } from 'react-router';

const News = observer(() =>{
    const {product} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        product.blogFetchTodo()
      }, []);
    return (
        <div className="page-wrapper">
             <main className="main">
        	
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Blog</a></li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                       

                        <div className="entry-container max-col-2" data-layout="fitRows">
                            
                            
                            {product.blog.map((blog, index) =>
                            <div className="entry-item lifestyle shopping col-sm-6" key={index}  onClick={() =>history.push()}>
                                <article className="entry entry-grid text-center">
                                    <figure className="entry-media">
                                        <a href="single.html">
                                            <img src={`${process.env.REACT_APP_BASE_URL}${blog.images}`} alt="image desc"/>
                                        </a>
                                    </figure>

                                    <div className="entry-body">
                                        <div className="entry-meta">
                                            <span className="entry-author">
                                                by <a href="#"></a>
                                            </span>
                                            <span className="meta-separator">|</span>
                                            <a href="#">Nov 22, 2018</a>
                                            <span className="meta-separator">|</span>
                                            <a href="#">2 Comments</a>
                                        </div>

                                        <h2 className="entry-title">
                                            <a href="single.html">{blog.title}</a>
                                        </h2>

                                        <div className="entry-cats">
                                            in <a href="#">Lifestyle</a>,
                                            <a href="#">Shopping</a>
                                        </div>

                                        <div className="entry-content">
                                            <p>{blog.description}</p>
                                            <a href="single.html" className="read-more">Continue Reading</a>
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
