import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Subcategory from "./ProdCategory"


  

 
const  Catolog = observer(({match}) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState("")
    const id = match.params.id

    

    

    const [value, setValue] = useState([2,100]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    product.priceFilter(newValue)
     console.log(product.priceFilter(newValue))
  };


    
    
    
    const search = (e) => {
       product.searchFilter(input)
       e.preventDefault();
       console.log(input)
    }
    
    
    useEffect(() => {
        user.getUserData()
        product.fetchTodo(product.categoryId,id).then(() => {
            const scripts = [
                '/assets/js/jquery.elevateZoom.min.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/jquery.magnific-popup.min.js',
                '/assets/js/main.js',
                '/assets/js/bootstrap-input-spinner.js',
                '/assets/js/owl.carousel.min.js',
                '/assets/js/superfish.min.js',
                '/assets/js/jquery.waypoints.min.js',
                '/assets/js/jquery.hoverIntent.min.js',
                '/assets/js/bootstrap.bundle.min.js',
                '/assets/js/jquery.min.js',
            ]
            scripts.forEach(i => {
                const s = document.createElement('script')
                s.src = i
                document.body.appendChild(s)
            })
        })
        product.getCategory()
        product.changeFilter()
        product.discountTodo()
        // user.getLocal()
        
        
    
      }, []); 


    return (
        <div>
             <main className="main">
                

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            ПРОСМОТР: <span>24 / 48 / 96 / <span className="clickvse" onClick={()=>product.fetchTodo()}>ВСЕ</span></span> 
                                        </div>
                                    </div>

                                    {/* <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label for="sortby"></label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control">
                                                    <option value="popularity" selected="selected">ОТ ПОСЛЕДНЕГО</option>
                                                    <option value="rating">ПО РЕЙТИНГУ</option>
                                                    <option value="date">ПО ВОЗРАСТАНИЮ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                                <div style={{borderRadius: "40px", background: "#f7f7f7",textAlign: "center"}} className="cta cta-border mb-5">
                                    
                                    
                                        <h4>для запроса каталога следующего сезона, напишите нам на whatsapp</h4>
                                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                            <button className="wahtsapp">+996709999915</button>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                            <button className="wahtsapp">+996709999915</button>
                                        </div>
                                    
                                </div>
                                <div className="products mb-3">
                                    <div className="row justify-content-center">                                        
                                        {product.allProducts.map((prod, index) => 
                                        
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                                                <div className="product product-7 text-center">
                                                    <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                                        <figure className="product-media" >
                                                                {console.log(product.allProducts)}
                                                                <img src={`${process.env.REACT_APP_BASE_URL}${prod.images[0].images[0]}`} alt="Product image" className="product-image"/>
                                                                {/* <span className="onsale"></span> */}

                                                            <div className="product-action-vertical">
                                                                {/* <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                                                <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                                <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a> */}
                                                            </div>

                                                            {/* <div className="product-action">
                                                                <a href="#" className="btn-product btn-cart"><span>В КОРЗИНУ</span></a>
                                                            </div> */}
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
                                </div>



                            </div>
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">

                                    <div className="">
                                        <div className="col-sm-10 col-md-8 col-lg-10">
                                        
                                            <form onSubmit={search}>
                                                <div className="input-group">
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Поиск..."  
                                                        value={input}
                                                        onChange={e => setInput(e.target.value)}
                                                        required/><hr/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="submit"><span>ПОИСК</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    
                                    
                                    <div className="widget widget-clean">
                                    
                                        
                                        <div className="widget widget-collapsible">
                                            
                                            

                                           
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-1" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} role="button" aria-expanded="true" aria-controls="widget-1">
                                                Категория
                                            </a>
                                        </h3>

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                    <label onClick={()=>product.fetchTodo()} className="custom-control-label vse" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} >ВСЕ</label>
                                                        {product.subcategory.map((c, index) =>
                                                            
                                                                <div  key={index} className="custom-control custom-checkbox">
                                                                    {console.log(c.title)}
                                                                    <label onClick={() => product.changeFilter(c.title)} className="custom-control-label s-title" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} > {c.title} {c.year}</label>
                                                                    <span style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} className="item-count">({product.countTitle(c.title)})</span>
                                                                </div>
                                                                
                                                            
                                                        )}
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{
                                                    display: 'block',
                                                    width: 'fit-content'
                                                    }}>
                                                    <Typography id="range-slider" gutterBottom>
                                                     ФИЛЬТР ПО ЦЕНЕ
                                                    </Typography>
                                                    <Slider
                                                        value={value}
                                                        onChange={rangeSelector}
                                                        valueLabelDisplay="auto"
                                                    />
                                                    Ваш диапазон цен находится между{value[0]} $ {value[1]} $
                                                </div>
                                        </div>
                                    </div>

                                    <div className="cat-blocks-container">
                                        
                                            <p style={{color: "rgb(71, 53, 150)", fontWeight:"500"}}>ТОВАРЫ СО СКИДКОЙ</p><br/>
                                            {product.discount.map((discout, index)=>
                                            <Link to={{pathname: '/product/'+ discout.id}}>
                                                <div key={index} className="row">
                                                    
                                                    <div  className="col-6 ">
                                                        <a className="cat-block">
                                                            <figure>
                                                                <span>
                                                                    <img className="images-s" src={`${process.env.REACT_APP_BASE_URL}${discout.images[0]}`} alt="Category image"/>
                                                                </span>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    <div  className="col-5 ">
                                                        <h3 className="product-title"><a >{discout.title}</a></h3>
                                                        {user.isAuth ? <><p style={{textDecoration:"line-through"}}>{discout.price}$</p>
                                                        <p >{Math.round(discout.price - (discout.price * discout.percent/100))}.00 $</p></> : ''}
                                                    </div>
                                                    
                                                </div>
                                                </Link>
                                            )}
                                        </div>
                                    


                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button> 
        </div>
    )
})

export default  Catolog;
