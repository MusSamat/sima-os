import {observer} from 'mobx-react-lite';
import React, {useEffect, useContext} from 'react';
import {Context} from '../../index';
import { NEWS_ROUTE} from '../../utils/Const';
import {NavLink} from 'react-router-dom';
import "../../App.css";

const Single = observer(({match}) => {
    const {product} = useContext(Context)
    const id = match.params.id
    useEffect(() => {
        window.scrollTo(0, 0)
        product.getBlogData(id)
    }, [])
    return (
        <div>
            <main className="main">


                <div className="page-content">
                    <div className="container">
                        <ol className="breadcrumb mb-4 ">
                            <li className="breadcrumb-item"><NavLink to={NEWS_ROUTE}><a className="breadcrumb-item"
                                                                                        href="">Новости</a></NavLink>
                            </li>
                            <li className="breadcrumb-item"><a href=""> {product.blogItem.title}</a></li>
                        </ol>
                        <div className="row">
                            <div className="col">
                                <article className="entry single-entry">
                                    <figure className="entry-media">
                                        <img  style={{backgroundSize: "cover",objectFit: "cover", maxHeight: "600px"}}
                                             src={`${process.env.REACT_APP_BASE_URL}${product.blogItem?.images[0]}`}
                                             alt="image desc"/>
                                    </figure>

                                    <div className="entry-body ">
                                        <div className="entry-meta">

                                        </div>

                                        <h2 style={{textAlign: "center"}} className="entry-title ">
                                            {product.blogItem.title}
                                        </h2>

                                        <div className="entry-cats">
                                        </div>

                                        <div className="entry-content editor-content">
                                            <p style={{fontSize: "16px"}}>{product.blogItem.description}</p>
                                            <div className="pb-1"></div>
                                        </div>
                                    </div>
                                </article>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
})

export default Single;
