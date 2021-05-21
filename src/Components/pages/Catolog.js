import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Filter from "./Filter";
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,
} from '@appbaseio/reactivesearch';
import "../../App.css"

function valuetext(value) {
    return `${value}°C`;
  }
  

 
const  Catolog = observer(() => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState("")

    const [value, setValue] = useState([0, 100]);

    const handleChange = (event, newValue, value) => {
        setValue(newValue);
        
            console.log(product.allProducts.filter(item => item.price === newValue ))
        
        event.preventDefault();
        // console.log(product.products)
    };


    
    
    
    const search = (e) => {
       product.searchFilter(input)
       e.preventDefault();
       console.log(input)
    }
    
    
    useEffect(() => {
        console.log('catalog')
        user.getUserData()
        product.fetchTodo().then(() => {
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
                <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Shop</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Grid 4 Columns</li>
                        </ol>
                    </div>
                </nav>

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

                                    <div className="toolbox-right">
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
                                    </div>
                                </div>

                                <div style={{borderRadius: "40px", background: "#f7f7f7"}} className="cta cta-border mb-5">
                                    
                                    <div style={{}} className="row justify-content-center">
                                        <h4>для запроса каталога следующего сезона, напишите нам на whatsapp</h4>
                                        <div className="col-6">
                                            <button className="wahtsapp">+996709999915</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="wahtsapp">+996709999915</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="products mb-3">
                                    <div className="row justify-content-center">                                        
                                        {product.products.map((prod, index) => 
                                        
                                            <div className="col-6 col-md-4 col-lg-4 col-xl-3"  >
                                                <div className="product product-7 text-center">
                                                    <Link to={{pathname: '/product/'+prod.id}} key={index}>
                                                        <figure className="product-media" >
                                                            
                                                                <img src={`${process.env.REACT_APP_BASE_URL}${prod.images[0]}`} alt="Product image" className="product-image"/>
                                                            
                                                                <span className="onsale"></span>

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


                                {/* <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
                                                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item-total">of 6</li>
                                        <li className="page-item">
                                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
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

                                    {/* <ReactiveBase
                                            app="good-books-ds"
                                           url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
                                            enableAppbase
                                   >
                                                                <RangeSlider
                                                                    dataField="ratings_count"
                                                                    componentId="BookSensor"
                                                                    range={{
                                                                        start: 300,
                                                                        end: 500,
                                                                    }}
                                                                    rangeLabels={{
                                                                        start: '300',
                                                                        end: '500',
                                                                    }}
                                                                />
                                                                <SelectedFilters />
                                                            </ReactiveBase>
                                                            
                                                            <Slider
                                                                value={value}
                                                                onChange={handleChange}
                                                                valueLabelDisplay="auto"
                                                                aria-labelledby="range-slider"
                                                                getAriaValueText={valuetext}
                                                                
                                                            /> */}
                                    
                                    <div className="widget widget-clean">
                                    
                                        
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" role="button" aria-expanded="true" aria-controls="widget-5">
                                                    {/* ФИЛЬТР ПО ЦЕНЕ */}
                                                    
                                                    
                                                </a>
                                            </h3>
                                            

                                            <div className="collapse show" id="widget-5">
                                                <div className="widget-body">
                                                    <div className="filter-price">
                                                        <div className="filter-price-text">
                                                            {/* <input type="range"/> */}
                                                            <span id="filter-price-range"></span>
                                                            {/* <Filter/> */}
                                                            
                                                        </div>

                                                        <div id="price-slider"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
                                                Категория
                                            </a>
                                        </h3>

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                    <label onClick={()=>product.fetchTodo()} className="custom-control-label vse" >ВСЕ</label>
                                                        {product.category.map((c, index) =>
                                                            
                                                                <div  key={index} className="custom-control custom-checkbox">
                                                                    {/* <input type="checkbox" className="custom-control-input" id="cat-1" value=""/> */}
                                                                    <label onClick={() => product.changeFilter(c.title)} className="custom-control-label" > {c.title} {c.year}</label>
                                                                    <span className="item-count">({product.countTitle(c.title)})</span>
                                                                </div>
                                                                
                                                            
                                                        )}
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
                                                Brand
                                            </a>
                                        </h3>

                                        <div className="collapse show" id="widget-4">
                                            <div className="widget-body">
                                                <div className="filter-items">
                                                    <div className="filter-item">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                                            <label className="custom-control-label" for="brand-1">Next</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    

                                    <div className="widget widget-collapsible">
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
                                                Price
                                            </a>
                                        </h3>

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-price">
                                                    <div className="filter-price-text">
                                                        Price Range:
                                                        <span id="filter-price-range">$0-$1000</span>
                                                    </div>

                                                    <div id="price-slider"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="cat-blocks-container">
                                        
                                            <p>ТОВАРЫ СО СКИДКОЙ</p><br/>
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
