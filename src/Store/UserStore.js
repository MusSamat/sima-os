import {makeAutoObservable} from "mobx";
import axios from "axios"
import Cookies from 'js-cookie'
import cookie from 'cookie'
import { userService } from "../services/users";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this.route = false
        this.read = true
        this.clicked = false
        this.active = false
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
        this.contact = []
        this.popular = []
        this.novelty = []
        this.logo = []
        this.name = ""


        this.count = 0
        makeAutoObservable(this)
    }

    setName(name) {

        this.name = name
    }
    get isName() {
        return this.active
    }

    setIsAuth(bool) {

        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setRoute(bool) {
        this.route = bool
    }
    setRead(bool) {
        this.read = bool
    }

    setClicked(bool) {
        this.clicked = bool
    }

    setActive(bool) {
        this.active = bool
    }
    get isActive() {
        return this.active
    }
    get isClicked() {
        return this.clicked
    }

    get isRead() {
        return this.read
    }

    get isRoute() {
        return this.route
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }


    async getUserData() {
       await userService.getUser().then(res => {
                this.userId = res
                this.setUser(res)
            })
            .catch((e) => {
                console.log(e)
            })

    }


    getOrderData() {
        userService.getOrder(this._user.id).then(res => {
            this.userId = res
            this.setUser(res)
        })
            .then(res => {
                this.orders = res.data
                this.order = this.orders
            })
            .catch((e) => {
                console.log(e)
            })

    }

    getOrderDataId(id) {
        userService.getUserOderId(this._user.id, id)
            .then(res => {
                this.orderId = res
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })

    }


   async getCartData() {
       await userService.getUserCart(this._user.id)
            .then(res => {
                this.carts = res
                this.items = this.carts.items
                return this.items.map((a) => {
                    a.product.images = a.product.images.filter(i => i.title === a.color).length ? a.product.images.filter(i => i.title === a.color) : []
                    return a
                })

            })
            .catch((e) => {
                console.error(e)
            })
    } 

    getImage() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background/`)
            .then(res => {
                this.image = res.data
                return this.image

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImagePurchase() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-conditions-purchase/`)
            .then(res => {
                this.purchase = res.data
                return this.purchase

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImageDelivery() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-delivery/`)
            .then(res => {
                this.delivery = res.data
                return this.delivery

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImagePopular() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-popular`)
            .then(res => {
                this.popular = res.data
                return this.popular

            })
            .catch((e) => {
                console.error(e)
            })
    }
    getImageNovelty() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-collection`)
            .then(res => {
                this.novelty = res.data
                return this.novelty

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImageLogo() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/logo`)
            .then(res => {
                this.logo = res.data
                return this.logo

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImageAbout() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-about-us/`)
            .then(res => {
                this.about = res.data
                return this.about

            })
            .catch((e) => {
                console.error(e)
            })
    }

    getImageContact() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/background-contact/`)
            .then(res => {
                this.contact = res.data
                return this.contact

            })
            .catch((e) => {
                console.error(e)
            })
    }


    async getWishlistData() {
       await userService.getWish(this._user.id)
            .then(res => {
                this.wishList = res
                this.list = this.wishList.items
            })
            .catch((e) => {
                console.error(e)
            })
    }

    changeItemQuantity(ind, val) {
        this.items = this.items.map((i, index) => index === ind ? {...i, quantity: val} : i)
    }
    getReviews(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/product-reviews/` + id)
            .then(response => {
                this.reviews = response.data

            })
            .catch((e) => {
                console.error(e)
            })
    }

}

