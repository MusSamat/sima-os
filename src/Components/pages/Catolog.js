import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import "../../App.css";
import Slider from '@material-ui/core/Slider';
import {SUBCATEGORY_ROUTE} from "../../utils/Const";
import mobile_menu from '../../Http/mobile_menu';


function valuetext(value) {
    return `${value}°C`;
  }

 
const  Catolog = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState("")
    const id = props.match.params.id
    const catId = props.match.params.catId
    const title = props.match.params.title

    

    

    const [value, setValue] = useState([500,5000]);
  
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    product.priceFilter(newValue);
    console.log(newValue)
  };


    
    
    
    const search = (e) => {
       product.searchFilter(input)
       e.preventDefault();
    }
    
    
    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        user.getUserData()
        product.fetchTodoCatalog(catId, title).then(() => {
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
        product.priceFilter()
        product.discountTodo()
        product.getCategoryTitle(title)
        product.getCategoryTitleCount(title)
        
        
    
      }, []); 
      let percent
      product.discount.map((i) => i.percent === percent )
      

    return (
        <div>
             <main  className="main">
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                        </div>
                                    </div>
                                </div>

                                <div class="products mb-3">
                                        <div class="row justify-content-center">
                                        {product.products.map((prod, index) =>
                                            <div class="col-6 col-md-4 col-lg-4">
                                                <div class="product product-7 text-center">
                                                    <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                                        <figure class="product-media">
                                                            {/* <span class="product-label label-new">New</span> */}
                                                            {prod.percent ? <div style={{textAlign: "center"}} class="product-label label-sale">{prod.percent} %</div> : ""}
                                                            <a href="product.html">
                                                                <img src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`} alt="Product image" class="product-image"/>
                                                            </a>

                                                            {/* <div class="product-action-vertical">
                                                                <a href="" class="btn-product-icon btn-wishlist "></a>
                                                            </div> */}
                                                        </figure>
                                                    </Link>
                                                    <div class="product-body">
                                                        {/* <div class="product-cat">
                                                            <a href="#">Women</a>
                                                        </div> */}
                                                        <h3 class="product-title"><a href="">{prod.title}</a></h3>
                                                        <div class="product-price">
                                                            {user.isAuth ? prod.discount ? 
                                                            <><p style={{textDecoration:"line-through"}}>{prod.price} ₽</p>
                                                            <p >{Math.round(prod.price - (prod.price * prod.percent/100))}.00 ₽</p></> :
                                                                 `${prod.price} ₽` : "" }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)}
                                        </div>
                                    </div>


                                {/* <div className="products mb-3">
                                    <div className="row justify-content-center">                                       
                                        {product.products.map((prod, index) => 
                                        
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                                                <div className="product product-7 text-center">
                                                    <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                                        {prod.percent ? <div style={{textAlign: "center"}} class="product-label label-sale">{prod.percent} %</div> : ""}
                                                        <figure className="product-media" >
                                                                <img src={`${process.env.REACT_APP_BASE_URL}${prod?.images[0]?.images[0]}`} alt="Product image" className="product-image catologImg"/>
                                                        </figure>
                                                        <div className="product-body">
                                                            <div className="product-cat"> 
                                                            </div>
                                                            <h3 className="product-title"><a >{prod.title}</a></h3>
                                                            <div className="product-price">
                                                                {user.isAuth ?
                                                                 `${prod.price} ₽` : "" } 
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                         
                                            )}  
                                        </div>
                                    </div> */}
                            </div>
                            <aside className="col-lg-3 order-lg-first mt-3">
                                <div className="sidebar sidebar-shop">

                                    <div className="">
                                        <div className="col-sm-10 col-md-8 col-lg-10">
                                            <form onSubmit={search}>
                                                    <input 
                                                        style={{width: "250px"}}
                                                        type="text" 
                                                        className="form-control" 
                                                        placeholder="Поиск..."  
                                                        value={input}
                                                        onChange={e => setInput(e.target.value)}
                                                        required/>
                                                    
                                                        <button style={{width: "250px", height: "40px"}} className="btn btn-primary form-control" type="submit">ПОИСК</button>
                                                    
                                               
                                            </form>
                                        </div>
                                    </div>

                                    
                                    
                                    <div className="widget widget-clean">
                                    
                                        
                                        <div className="widget widget-collapsible">
                                            
                                            

                                           
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <Link to={SUBCATEGORY_ROUTE} >
                                                <a className="cate" data-toggle="collapse" href="#widget-1"  role="button" aria-expanded="true" aria-controls="widget-1">
                                                    Категория
                                                </a>
                                            </Link>
                                        </h3>

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">                                                      
                                                        {product.productTitle.filter(i => i.id).map((c, index) =>
                                                            <div  key={index} className="custom-control custom-checkbox">
                                                                <label onClick={() => product.fetchTodoCatalog(c.id, title)} className="custom-control-label s-title"  > {c.title} {c.year}</label>
                                                                <span  className="item-count">({product.changeFilterCount(c.id)?.count})</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{
                                                    display: 'block',
                                                    width: 'fit-content'
                                                    }}>
                                                    <Slider
                                                        value={value}
                                                        onChange={rangeSelector}
                                                        valueLabelDisplay="auto"
                                                        aria-labelledby="range-slider"
                                                        getAriaValueText={valuetext}
                                                        min={500} 
                                                        max={5000} 
                                                    />
                                                   <p className="filter" >ФИЛЬТР ПО ЦЕНЕ: {value[0]} ₽ {value[1]} ₽</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="cat-blocks-container">
                                            <p onClick={() => product.changeDiscounted()} className=" s-title" style={{  cursor: "pointer", marginBottom: "30px", color: "#eea287"}}>ТОВАРЫ СО СКИДКОЙ</p>                                            
                                            {product.discount.slice(0,4).map((discout, index)=>
                                                <div key={index}>
                                                <div  className="row">
                                                    <div  className="col-6 ">
                                                    <Link to={{pathname: '/product/'+ discout.id}}>
                                                        <a className="cat-block">
                                                            <figure>
                                                                <span>
                                                                    <img className="images-s" src={`${process.env.REACT_APP_BASE_URL}${discout.images[0].images[0]}`} alt="Category image"/>
                                                                </span>
                                                            </figure>
                                                        </a>
                                                        </Link>
                                                    </div>
                                                   
                                                    <div  className="col-5 ">
                                                        <h3 className="product-title"><a >{discout.title}</a></h3>
                                                        {user.isAuth ? <><p style={{textDecoration:"line-through"}}>{discout.price} ₽</p>
                                                        <p >{Math.round(discout.price - (discout.price * discout.percent/100))}.00 ₽</p></> : ''}
                                                    </div>
                                                    
                                                </div>
                                                </ div>
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
