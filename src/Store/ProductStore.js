import { makeAutoObservable } from "mobx";
import axios from 'axios';

export default class ProductStore {
    constructor(){
        this.products = []
        this.blog = []
        this.product = { images: [], size: [] }
        this.blogItem = {images: []}
        this.imagesUser = []
        this.size = []
        this.count = 0
        this.category = []
        this.subcategory = []
        this.prodcategory = []
        this.allProducts = []
        this.searchProducts = []
        this.discount = []
        this.obj = null
        this.carts = []
        
        

        makeAutoObservable(this)
    }

     fetchTodo() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then(res => {
                this.products = [ ...res.data]
                this.allProducts = this.products
                console.log(this.allProducts)
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }

    
    getSubcategory() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/subcategory`)
            .then(res => {
                this.subcategory = [...res.data]
                console.log(res)
            })
            .catch((e)=>{
                console.error(e)
            })
    }

    getCategory() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/category`)
            .then(res => {
                this.category = [...res.data]
                console.log(res)

            })
            .catch((e)=>{
                console.error(e)
            })
    }
    getProdcategory(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?category_id=` + id)
            .then(res => {
                this.prodcategory = [...res.data]
                console.log(this.prodcategory)

            })
            .catch((e)=>{
                console.error(e)
            })
    }

    changeFilter(title){
        this.products = this.allProducts.filter(item => item.category === title)
        console.log(this.allProducts)
    }
    priceFilter(price){
        this.products = this.allProducts.filter(item => item.price === price)
    }
    searchFilter(input){
        this.products = this.allProducts.filter(item => item.title.toLowerCase() === input.toLowerCase())
    }

    countTitle(title){
        return this.allProducts.filter(item => item.category === title).length
        
    }

    priceFilter(price){
        return this.allProducts.filter(item => item.price === price)
        
        
    }

    subcategoryFilter(title){
        // this.subcategory.filter(item => item.subcategory === title)
        this.products = this.allProducts.filter(item => item.subcategory === title)

        
    }

    getData(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id)
            .then(response => {
                this.product = response.data
                this.imagesUser = this.product.images
                this.size = this.product.size

            })
            .catch((e)=>{
                console.error(e)
            })
     }
     getBlogData(id) {
        console.log(id)
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/blogs/` + id)
            .then(response => {
                this.blogItem = response.data

            })
            .catch((e)=>{
                console.error(e)
            })
     }


    async blogFetchTodo() {
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/blogs`)
             .then(res => {
                 this.blog = [ ...res.data]
                 this.blog = this.blog

             })
             .catch((e)=>{
                 console.error(e)
             })      
     }


     
     

     async discountTodo() {
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/discount`)
             .then(res => {
                 this.discount = [ ...res.data]
                 this.discount = this.discount
                 this.images = this.product.images
                

                
             })
             .catch((e)=>{
                 console.error(e)
             })      
     }

     

     

}
