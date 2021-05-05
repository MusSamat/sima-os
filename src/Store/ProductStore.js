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

        makeAutoObservable(this)
    }

     fetchTodo() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then(res => {
               
                this.products = [ ...res.data]
                this.products = this.products
                this.category = this.products.category
                console.log(this.products)
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }

    // addProduct = (id) =>{
    //     this.product = [...this.product]
    //     this.product[id] = this.product[id] + 1 || 1;
    //     this.product = this.product
    //     this.count = this.count + 1
    // }

    getData(id) {
        console.log(id)
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id)
            .then(response => {
                this.product = response.data
                this.images = this.product.images
                this.size = this.product.size
                this.category = this.product.category

                

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

     

}
