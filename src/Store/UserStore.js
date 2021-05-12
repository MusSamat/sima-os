import { makeAutoObservable } from "mobx";
import axios from "axios"

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {} 
        this.token = null
        this.userId = {}
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
            console.log(this.userId)
        })
        .catch((e)=>{
            console.error(e)
            this.setIsAuth(false)
        })
        
     }

     

     
     
        
}

