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
        this.productsCategory = []
        
        

        makeAutoObservable(this)
    }
   
     fetchTodo(categoryId, id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?category=${categoryId}&productcategory=${id}`)
            .then(res => {
                this.products = [ ...res.data]
                this.allProducts = this.products
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }

    
    getSubcategory() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/`)
            .then(res => {
                this.subcategory = [...res.data]
            })
            .catch((e)=>{
                console.error(e)
            })
    }
    
    getCategory() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/category/`)
            .then(res => {
                this.category = [...res.data]

            })
            .catch((e)=>{
                console.error(e)
            })
    }
    
    getProdcategory(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?category_id=`+id)
            .then(res => {
                this.prodcategory = [...res.data]

            })
            .catch((e)=>{
                console.error(e)
            })
    }

    changeFilter(id, prodId, catId){
        this.products = this.allProducts.filter((item, index) => item.seasoncategory  === id || item.productcategory === prodId || item.category === catId )
        console.log(this.products)
    }
    changeDiscounted(percent){
        this.products = this.allProducts.filter(item => this.discount.some(j => j.id === item.id))
        console.log(this.products)
    }
    priceFilter(price){
        this.products = this.allProducts.filter(item => item.price === price)
    }
    searchFilter(input){
        this.products = this.allProducts.filter(item => item.title.toLowerCase() === input.toLowerCase())
    }

    countTitle(id){
        return this.allProducts.filter(item => item.seasoncategory === id).length
        
    }

    priceFilter(price){
        return this.allProducts.filter(item => item.price === price)
        
        
    }

    subcategoryFilter(title){
        this.products = this.allProducts.filter(item => item.subcategory === title) 
    }
    // changePrice(minPrice, maxPrice) {
    //     this.products = this.allProducts.filter(item => item.price === minPrice ?? item.price === maxPrice)
    //     this.items = this.items.map((i, index) => index === ind ? {...i, quantity: val} : i)
    // }

    getData(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id)
            .then(response => {
                this.product = response.data
                this.imagesUser = this.product.images
                this.size = this.product.size
                console.log(this.product)
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
