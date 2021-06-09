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
            
            
            
    console.log()
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }

    changeItemQuantity (ind, val) {
        this.items = this.items.map((i, index) => index === ind ? {...i, quantity: val} : i)
    }   
        
}

