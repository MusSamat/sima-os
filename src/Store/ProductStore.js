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
        this.productTitle = []
        this.productTitleCount = []
        this.token = null
        this.favorite = []
        this.newProduct = []
        this.newProductSeason = []
        this.gallery = []
        this.sertificate = []
        
        
        

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
    fetchTodoCatalog(catId, title) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${catId}&productcategory__title__iexact=${title}`)
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
            })
            .catch((e)=>{
                console.error(e)
            })
            
            
    }

    
    getCategoryTitle(title) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/?title=${title}`)
            .then(res => {
                this.productTitle = [...res.data]
            })
            .catch((e)=>{
                console.error(e)
            })
    }

    getCategoryTitleCount(title) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?title=${title}`)
            .then(res => {
                this.productTitleCount = [...res.data]
            })
            .catch((e)=>{
                console.error(e)
            })
    }
    //seasoncategory/?title=Рубашка
    getSubcategory() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/`)
            .then(res => {
                this.subcategory = [...res.data]
            })
            .catch((e)=>{
                console.error(e)
            })
    }
    
    getSubcategoryId(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?seasoncategory_id=`+id)
            .then(res => {
                 this.productSorted = [...res.data]
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

    changeFilter(id,){
        this.products = this.allProducts.filter((item, index) => item.seasoncategory  === id)
    }

    changeFilterCount(id){
        return this.productTitleCount.find(item => item.seasoncategory  === id)
        
    }

    changeFilterSorted(id){
        this.productSorted = this.allProductSorted.filter((item, index) => item.seasoncategory  === id )
        
    }

    changeDiscounted(){
        this.products = this.allProducts.filter(item => this.discount.some(j => j.id === item.id))
   
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
        return this.products.filter(item => item.seasoncategory === id).length
        
    }
    countTitleSorted(id){
        return this.productTitle.filter(item => item.seasoncategory === id).length
        
    }

    

    subcategoryFilter(title){
        this.products = this.allProducts.filter(item => item.subcategory === title) 
    }

    getData(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id,)
            .then(response => {
                this.product = response.data
                this.imagesUser = this.product.images
                this.size = this.product.size
                this.reviews = this.product.reviews
            })
            .catch((e)=>{
                console.error(e)
            })
     }

     priceFilter(newValue){
            if(!newValue) {
                return []
            }else{
                let arr = this.allProducts?.filter((a) => parseInt(a?.price) >= newValue[0] && parseInt(a?.price) <= newValue[1])
                this.products = arr
            }
    }


     getDataNew() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products` )
            .then(response => {
                this.newProduct = response.data
            })
            .catch((e)=>{
                console.error(e)
            })
     }



     getDataNewSeason(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${id}` )
            .then(response => {
                this.newProductSeason = response.data
            })
            .catch((e)=>{
                console.error(e)
            })
     }

     getDataFavorite(id) {
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
            .then(response => {
                this.favorite = response.data
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

     async changeDiscounted(){
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/discount`)
        .then(res => {
            this.products = [ ...res.data]
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }

    async getGallery(){
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/gallery`)
        .then(res => {
            this.gallery = [ ...res.data]
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }
    async getSertivicat(){
        await  axios.get(`${process.env.REACT_APP_BASE_URL}/api/sertificate`)
        .then(res => {
            this.sertificate = [ ...res.data]
        })
        .catch((e)=>{
            console.error(e)
        }) 
    }
    
     

     

     

}
