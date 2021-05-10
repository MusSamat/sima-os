import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user = {} 
        this.obj = null
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
    getLocal(){
        this.obj = JSON.parse(localStorage.getItem('value')) 
        if(this.obj){
            this.setIsAuth(true)
        }

        console.log(this.obj)
     }
     
        
}

