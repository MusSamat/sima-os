import { makeAutoObservable } from "mobx";
import axios from "axios"

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {} 
        this.token = null
        this.userId = {}
        this.carts = []
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
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/carts`, {
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Token ' + this.token?.token
            },
        })
        .then(res => {
            this.carts = [ ...res.data]
            
            console.log(this.carts)
        })
        .catch((e)=>{
            console.error(e)
        }) 
     }

     
     
        
}

