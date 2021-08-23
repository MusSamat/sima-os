import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../../index";
import {observer} from 'mobx-react-lite';
import axios from "axios";
import {toast} from "react-toastify";
import {FcLike} from "react-icons/fc";
import {GrClose} from "react-icons/gr";

const quickView = observer(({id, active, setActive}) => {
    const {user, product} = useContext(Context);
    const [leftImages, setLeftImages] = useState([])
    const [selectedImage, setSelectedImage] = useState('')
    const [imgTitle, setImgTitle] = useState('')
    const [count, setCount] = useState(product.product.size.length)

    console.log(id)
    const addCart = (e) => {
        const data = JSON.stringify({
            product: [String(id)],
            quantity: [String(count)],
            color: [String(imgTitle)]


        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/cart-item/`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                setCount(count)
                user.getCartData()
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault();
    }

    const addCardLocal = (e, proId, price, color, title) => {
        let data = JSON.parse(localStorage.getItem('order'))
        let productId = product.productOrder.map((i) => i.product)
        if (data === null) {
            data = []
        }
        data.push({id: proId, quantity: count, color: color, title: title, price: price})
        let found = -1
        productId.map(item => {
            if (item === proId) {
                found = item
            }
        })
        if (found === -1) {
            localStorage.setItem('order', JSON.stringify(data));
            product.productOrder.push({
                product: proId,
                quantity: count,
                price: price,
                color: color,
                title: title
            })
        } else {
            toast.warning("этот товар есть в карзина")
            found = -1
        }
        e.preventDefault();

    }

    const addWishlist = (e) => {
        const data = JSON.stringify({
            product: String(id),
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/wishlist/`, data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + user.token?.token
                },

            })
            .then(response => {
                product.getData(id, user.isAuth)
                setCount(count)
                user.getWishlistData()
            })
            .catch(error => {
                console.log(error)
            })
        e.preventDefault();
    }

    const deleteWish = () => {


        const data = JSON.stringify({
            product: id,
        })
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user.token?.token
            },
        })
            .then(res => {
                user.getWishlistData()
                product.getData(id, user.isAuth)
            })
            .catch((e) => {
                console.error(e)
            })
    }

    useEffect(() => {

        product.getData(id).then(() => {
            setLeftImages(product?.imagesUser[0]?.images ?? [])
            setSelectedImage(product?.imagesUser[0]?.images[0] || '')
            setImgTitle(product?.imagesUser[0]?.title || '')

        })

    }, []);
    return (

            <div className="container quickView-container">
                <div className="quickView-content">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="row">
                                <div className="product-left" >
                                    {leftImages.map((img, index)=>
                                        <a href="" onMouseOver={() => setSelectedImage(img)} onClick={(e) => { e.preventDefault();

                                            setSelectedImage(img)
                                        }} className="carousel-dot active">
                                            <img src={process.env.REACT_APP_BASE_URL + img}/>
                                        </a>
                                    )}

                                </div>
                                <div className="product-right">
                                    <div className="intro-slide" data-hash="two">
                                        <img src={process.env.REACT_APP_BASE_URL + selectedImage} alt="Image Desc"/>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="row">
                                <div className="col-md-10">
                                    <h2 className="product-title city">{product.product.title}</h2>
                                    <p className="city">Артикул: {product.product.articul}</p>
                                    <h4 style={{color: "rgb(238, 162, 135)"}} className="city">{`${product.product.price} ₽`}</h4>
                                    <label style={{
                                        color: "#9393a5",
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "20px",
                                        letterSpacing: "-.15px"
                                    }}>Цвет: <span className="city" style={{color: "#000"}}>{imgTitle}</span></label>
                                </div>
                                <div className="col-md-2">
                                    <div className={active ? "x-b actives" : "x-b"} onClick={(e) => setActive(false)}> <GrClose/>< /div>
                                </div>
                            </div>






                            <div className="details-filter-row product-nav product-nav-thumbs">
                                {product.imagesUser.map((img, index) =>
                                    <div key={index} class="testimonial testimonial-icon text-center ">
                                        <a
                                            onClick={() => {

                                                const d = [...img.images]
                                                setLeftImages(d)
                                                setSelectedImage(d[0])
                                                setImgTitle([img.title])
                                            }} className="active mt-3 mb-3">
                                            <img style={{
                                                width: "100px",
                                                height: "100px",
                                                marginLeft: "10px",
                                                cursor: "pointer"
                                            }} src={`${process.env.REACT_APP_BASE_URL}${img.images[0]}`}
                                                 alt="product desc"/>


                                        </a>
                                    </div>)}

                            </div>

                            <div className="details-filter-row details-row-size">
                                <div className="d-flex flex-wrap">
                                    {product.product.size.map(size => (
                                        <div key={size} className="size">{size}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="details-filter-row details-row-size">
                                <div className="count ">
                                    <button disabled={(isNaN(count) || count - product.product.size.length <= 0)}
                                            style={{
                                                width: "30px",
                                                cursor: "pointer",
                                                fontSize: "20px",
                                                marginLeft: "7px",
                                                color: "#000000",
                                                backgroundColor: "white",
                                                border: "none"
                                            }}
                                            onClick={() => setCount(count - product.product.size.length)}>-
                                    </button>
                                    <span style={{
                                        width: "30px",
                                        padding: "px",
                                        fontSize: "18px",
                                        color: "#000000"
                                    }}>{count}</span>
                                    <a style={{
                                        marginLeft: "7px",
                                        width: "30px",
                                        cursor: "pointer",
                                        fontSize: "20px",
                                        color: "#000000"
                                    }} onClick={() => setCount(count + product.product.size.length)}>+</a>

                                </div>
                            </div>

                            <div className="product-details-action">
                                <div className="details-action-wrapper">
                                    <div className="details-action-wrapper">
                                        { user.isAuth ? product.product.is_favorite ?
                                            <FcLike onClick={deleteWish}
                                                    style={{fontSize: "30px", cursor: "pointer"}}/>
                                            : <a style={{fontSize: "30px"}} href="" onClick={addWishlist}
                                                 className="btn-product btn-wishlist" title="Wishlist"></a> : ""}
                                    </div>
                                </div>
                                {user.isAuth ? <a href="" onClick={addCart} className="btn-product btn-cart"><span>В Корзину</span></a>
                                : <a onClick={(e) => addCardLocal(e, product.product.id, product.product.price, product.product.images[0].title, product.product.title)}
                                     href="" className="btn-product btn-cart"><span>В Корзину</span></a>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
})

export default quickView;
