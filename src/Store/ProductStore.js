import { makeAutoObservable } from "mobx";
import axios from 'axios';

export default class ProductStore {
    constructor(){
        this.products = []
        this.blog = []
        this.product = { images: [], size: [] }
        this.blogItem = {images: []}
        this.images = []
        this.size = []
        this.count = 0
        this.category = []
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
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }

    
    getCategory() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/category`)
            .then(res => {
                this.category = [...res.data]
            })
    }

    changeFilter(title){
        this.products = this.allProducts.filter(item => item.category === title)
    }
    searchFilter(input){
        this.products = this.allProducts.filter(item => item.title.toLowerCase() === input.toLowerCase())
        console.log(this.products)
    }

    countTitle(title){
        return this.allProducts.filter(item => item.category === title).length
        
    }

    getData(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id)
            .then(response => {
                this.product = response.data
                this.images = this.product.images
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
                 console.log(res)

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
