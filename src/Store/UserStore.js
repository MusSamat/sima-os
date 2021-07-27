import { makeAutoObservable } from "mobx";
import axios from "axios"

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {} 
        this.token = null
        this.userId = {}
        this.userGetId = {}
        this.carts = {}
        this.items = []
        this.wishList = {}
        this.list = []
        this.userData = {}
        this.counter = []
        this.reviews = []
        this.orders = {}
        this.order = []
        this.orderId = []
        this.image = []
        this.purchase = []
        this.delivery = []
        this.about = []

        this.count = 0
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }

    

    


     getUserData(){
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/user`,{
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.userId = res.data
            this.setIsAuth(true)
        })
        .catch((e)=>{
            this.setIsAuth(false)
        })
        
     }
    //  
     getOrderData(){
        this.userGetId = JSON.parse(localStorage.getItem('value'))
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/order/`+ this.userGetId?.user.id,{
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.orders = res.data
            this.order = this.orders
            console.log(this.orders)
        })
        .catch((e)=>{
            console.log(e)
        })
        
     }

     getOrderDataId(id){
        this.userGetId = JSON.parse(localStorage.getItem('value'))
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/order/${this.userGetId?.user.id}/?id=${id}`,{
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.orderId = res.data
            console.log(this.orderId)
        })
        .catch((e)=>{
            console.log(e) 
        })
        
     }

     

     getCartData() {
        this.userGetId = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/carts/` + this.userGetId?.user.id, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.carts = res.data
            this.items = this.carts.items 
            return this.items
            
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }

     getImage() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background/`)
        .then(res => {
            this.image = res.data 
            return this.image
            
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }
     getImagePurchase() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-conditions-purchase/`)
        .then(res => {
            this.purchase = res.data 
            return this.purchase
            
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }
     getImageDelivery() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-delivery/`)
        .then(res => {
            this.delivery = res.data 
            return this.delivery
            
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }

     getImageAbout() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-about-us/`)
        .then(res => {
            this.about = res.data 
            return this.about
            
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }



     getWishlistData() {
        this.userGetId = JSON.parse(localStorage.getItem('value'))
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/wisher/` + this.userGetId?.user.id, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.wishList = res.data
            this.list = this.wishList.items 
            console.log(this.list)
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }

    changeItemQuantity (ind, val) {
        console.log(ind, val)
        this.items = this.items.map((i, index) => index === ind ? {...i, quantity: val} : i)
    } 
    getReviews(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/product-reviews/` + id)
            .then(response => {
                this.reviews = response.data
                console.log(this.reviews)

            })
            .catch((e)=>{
                console.error(e)
            })
     }  
        
}

