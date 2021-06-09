import { observer } from 'mobx-react-lite';
import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';



const ProductCategory = observer(({match}) => {
    const {user} =  useContext(Context)
    const {product} =  useContext(Context)
    const catId = match.params.id


    
    useEffect(() => {
        product.getProdcategory(catId)
      }, []); 

    return (
        <div className="page-wrapper">
             <main class="main">
                <div className="page-content">
                    <div  className="container">
                        
                        <div  className="row">

                            {product.prodcategory.map((sub, index) =>
                                
                                    <div style={{marginTop: "50px"}} key={index} className="col-md-4">
                                        <figure className="product-media" >
                                            <Link to={{pathname: `/catalog/${catId}/${ + sub.id}/${sub.title}`
                                        }} key={index}>
                                                <img src={sub.image} alt="Product image" className="product-image news_image"/>
                                            </Link> 
                                        </figure>
                                        <div className="onsale">{sub.title}</div>
                                    </div>
                                
                            )}
                        
                        </div>
                        
                        <div class="entry-container" data-layout="fitRows">
                            
                            {/* {product.prodcategory.map((sub, index) =>
                                <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                    <article className="entry entry-mask">
                                        <figure className="entry-media">
                                            <a href="single.html">
                                                <img src={sub.image} alt="image desc" className="news_image"/>
                                            </a>
                                        </figure>
                                        <div style={{textAlign: "center"}} className="entry-body">
                                            <h2 style={{textAlign: "center"}} className="entry-title">
                                                <a >{sub.title}</a>
                                            </h2>
                                        </div>
                                        
                                    </article>
                                </div>)} */}
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
})

export default  ProductCategory
