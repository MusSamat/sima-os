import { observer } from 'mobx-react-lite'
import React from 'react'

const Allproducts = observer(() => {
    return (
        <div>
             {product.products.map((prod, index) => 
                                        
                <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                    <div className="product product-7 text-center">
                        <Link to={{pathname: '/product/'+prod.id}} key={index}>
                            <figure className="product-media" >
                                    <img src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`} alt="Product image" className="product-image catologImg"/>
                            </figure>
                            <div className="product-body">
                                <div className="product-cat">
                                    <a >{title}</a>
                                </div>
                                <h3 className="product-title"><a >{prod.title}</a></h3>
                                <div className="product-price">
                                    {user.isAuth ? prod.price : "" } ₽
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                
                )}  
        </div>
    )
})

export default  Allproducts