import { observer } from 'mobx-react-lite';
import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { Link } from 'react-router-dom';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Subcategory from "./ProdCategory"


  

 
const  Catolog = observer((props) => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const [input, setInput] = useState("")
    const Prodid = props.match.params.id
    const catId = props.match.params.catId
    const title = props.match.params.title
    console.log(props)

    

    

    const [value, setValue] = useState([2,1000]);
  
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    product.priceFilter(newValue)
  };


    
    
    
    const search = (e) => {
       product.searchFilter(input)
       e.preventDefault();
       console.log(input)
    }
    
    
    useEffect(() => {
        user.getUserData()
        product.fetchTodo(catId,Prodid).then(() => {
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
        product.getSubcategory(title, catId)
        product.discountTodo()
        
        
    
      }, []); 
      let percent
      product.discount.map((i) => i.percent === percent )
      

    return (
        <div>
             <main style={{marginTop: "80px"}} className="main">
                

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            {/* ПРОСМОТР: <span>24 / 48 / 96 / <span className="clickvse" onClick={()=>product.fetchTodo()}>ВСЕ</span></span>  */}
                                        </div>
                                    </div>
                                </div>

                                <div style={{borderRadius: "40px", background: "#f7f7f7",textAlign: "center"}} className="cta cta-border mb-5">
                                    
                                    
                                        <h4>ДЛЯ ЗАПРОСА КАТАЛОГА СЛЕДУЮЩЕГО СЕЗОНА, НАПИШИТЕ НАМ НА WHATSAPP</h4>
                                        <div className="row  justify-content-around">
                                            <div style={{maxWidth: "none", }} className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                <button className="wahtsapp">+996709999915</button>
                                            </div>
                                            <div className="col-12 col-md-4 col-lg-4 col-xl-3">
                                                <button className="wahtsapp">+996709999915</button>
                                            </div>
                                        </div>
                                    
                                </div>
                                {console.log(product.products)}
                                <div className="products mb-3">
                                    <div className="row justify-content-center">                                        
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
                                                        <button style={{width: "100px"}} className="btn btn-primary" type="submit"><span>ПОИСК</span></button>
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
                                            <Link to={{pathname: '/productcategory/'+catId}} >
                                                <a data-toggle="collapse" href="#widget-1" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} role="button" aria-expanded="true" aria-controls="widget-1">
                                                    Категория
                                                </a>
                                            </Link>
                                        </h3>

                                        <div className="collapse show" >
                                            <div className="widget-body">
                                                <div className="filter-items filter-items-count">
                                                    <div className="filter-item">
                                                    <label onClick={()=>product.fetchTodo(catId,Prodid)} className="custom-control-label vse" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} >ВСЕ</label>
                                                        {console.log(product.subcategory)}
                                                        {product.subcategory.filter(c=>product.countTitle(c.id)).map((c, index) =>
                                                            
                                                                <div  key={index} className="custom-control custom-checkbox">
                                                                    
                                                                    <label onClick={() => product.changeFilter(c.id, Prodid, catId)} className="custom-control-label s-title" style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} > {c.title} {c.year}</label>
                                                                    <span style={{color: "rgb(71, 53, 150)", fontWeight:"500"}} className="item-count">({product.countTitle(c.id)})</span>
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
                                                    />
                                                   <p style={{fontSize: "16px"}}>   ФИЛЬТР ПО ЦЕНЕ: {value[0]} ₽ {value[1]} ₽</p>
                                                </div>
                                        </div>
                                    </div>

                                    <div className="cat-blocks-container">
                                            <p  onClick={() => product.changeDiscounted(percent)} style={{color: "rgb(71, 53, 150)", fontWeight:"500", cursor: "pointer", marginBottom: "30px"}}>ТОВАРЫ СО СКИДКОЙ</p>
                                            {console.log(product.discount)}
                                            {product.discount.map((discout, index)=>
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
