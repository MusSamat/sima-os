import { makeAutoObservable } from "mobx";
import axios from 'axios';

export default class ProductStore {
    constructor(){
        this.products = []
        this.blog = []

        makeAutoObservable(this)
    }

    async fetchTodo() {
    await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then(res => {
                this.products = [...this.products, ...res.data]
                console.log(res)
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
            
    }

    getData(id) {
        this.products.find(element => element === id)
     }


    async blogFetchTodo() {
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/blogs`)
             .then(res => {
                 this.blog = [...this.blog, ...res.data]
                 console.log(res)
                 console.log(process.env)

             })
             .catch((e)=>{
                 console.error(e)
             })      
     }

     

}
