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
        this.reviews = []
        this.productSorted = []
        this.allProductSorted = []
        
        
        

        makeAutoObservable(this)
    }
   
     fetchTodo() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategorysorted`)
            .then(res => {
                this.productSorted = [...res.data]
                this.allProductSorted = this.productSorted
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }
    // localhost:8000/api/products/?seasoncategory=3&productcategory=14
    fetchTodoCatalog(catId, id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${catId}&productcategory=${id}`)
            .then(res => {
                this.products = [...res.data]
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

    getSortedData(){
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory`)
            .then(res => {
                this.productSorted = [...res.data]
                this.allProductSorted = this.productSorted

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

    changeFilter(id, ){
        this.products = this.allProducts.filter((item, index) => item.seasoncategory  === id)
        console.log(this.products)
    }

    changeFilterSorted(id){
        this.productSorted = this.allProductSorted.filter((item, index) => item.seasoncategory  === id )
        console.log(this.productSorted)
    }

    changeDiscounted(percent){
        this.products = this.allProducts.filter(item => this.discount.some(j => j.id === item.id))
        console.log(this.products)
    }
    priceFilter(price){
        this.products = this.allProducts.filter(item => item.price === price)
    }
    searchFilter(input){
        if(parseInt(input)){
            this.products = this.allProducts.filter(item => item.articul === input) 
        }else{
        this.products = this.allProducts.filter(item => item.title.toLowerCase() === input.toLowerCase())
        }
    }

    countTitle(id){
        return this.allProducts.filter(item => item.seasoncategory === id).length
        
    }
    countTitleSorted(id){
        return this.allProductSorted.filter(item => item.seasoncategory === id).length
        
    }

    priceFilter(value, valueEnd){
        return this.allProducts.filter(item => item.price === value)
        
        
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
                this.reviews = this.product.reviews
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
