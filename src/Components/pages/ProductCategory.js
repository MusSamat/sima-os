import { observer } from 'mobx-react-lite';
import React, {useState, useEffect, useContext} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';



const ProductCategory = observer(({match}) => {
    const {user} =  useContext(Context)
    const {product} =  useContext(Context)
    const catId = match.params.id


    
    useEffect(() => {
        // product.fetchTodo().then(() => {
        //     const scripts = [
        //         '/assets/js/jquery.elevateZoom.min.js',
        //         '/assets/js/bootstrap-input-spinner.js',
        //         '/assets/js/jquery.magnific-popup.min.js',
        //         '/assets/js/main.js',
        //         '/assets/js/bootstrap-input-spinner.js',
        //         '/assets/js/owl.carousel.min.js',
        //         '/assets/js/superfish.min.js',
        //         '/assets/js/jquery.waypoints.min.js',
        //         '/assets/js/jquery.hoverIntent.min.js',
        //         '/assets/js/bootstrap.bundle.min.js',
        //         '/assets/js/jquery.min.js',
        //     ]
        //     scripts.forEach(i => {
        //         const s = document.createElement('script')
        //         s.src = i
        //         document.body.appendChild(s)
        //     })
        // })
        product.getProdcategory(catId)
        
        // user.getLocal()
        
        
    
      }, []); 

    return (
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
                
                    {/* <div className="products mb-3">
                        <div className="row justify-content-center">                                        
                            {product.allProducts.map((prod, index) => 
                            
                                <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                                    <div className="product product-7 text-center">
                                        <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                            <figure className="product-media" >
                                                    
                                                    <img src={`${process.env.REACT_APP_BASE_URL}${prod.images[0].images[0]}`} alt="Product image" className="product-image"/>
                                                    <span className="onsale"></span>

                                                <div className="product-action-vertical">
                                                   
                                                </div>

                                                
                                            </figure>
                                            
                                        

                                        <div className="product-body">
                                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                                <h3 className="product-title"><a >{prod.title}</a></h3>
                                                <div style={{color: "black"}} className="product-price">
                                                    {user.isAuth ? prod.price : "" } $
                                                
                                                </div>
                                                    
                                            </div>
                                            <div className="ratings-container">

                                            <span style={{color: "black", fontSize: "18px"}}>Размеры:</span> <span className="product-price razmer">  {prod.size[0]}-{prod.size[1]} </span>
                                                
                                            </div>
                                            
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                                
                            )} 
                            
                        </div>
                    </div> */}
                    
                
                </div>
            </div>
        </div>
        
    )
})

export default  ProductCategory
