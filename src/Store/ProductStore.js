import {makeAutoObservable} from "mobx";
import axios from 'axios';


export default class ProductStore {
    constructor() {
        this.products = []
        this.blog = []
        this.product = {images: [], size: []}
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
        this.productsSesonCategory = []
        this.popular = []
        this.productOrder = []
        this.productOrderFilter = []
        this.novelty = []
        this.loader = false
        this.productWishlist = []


        makeAutoObservable(this)
    }

    setLoader(bool) {
        this.loader = bool
    }

    get isLoader() {
        return this.loader
    }



    async fetchTodo() {
        this.setLoader(true)
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategorysorted`)
            .then(res => {
                this.productSorted = [...res.data]
                this.allProductSorted = this.productSorted
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }

    changeProductQuantity(id, val) {
        this.products = this.products.map((i, index) => i.id === id ? {...i, quantity: val} : i)
    }

    async getActual(prod) {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/${prod}`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }



    async getActualProducts() {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }

    async getPopularProducts() {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/popular`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token,
            }
        } : {
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }

    async getPopularProduct() {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/popular`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token,
            }
        } : {
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => {
                this.popular = [...res.data]

            })
            .catch((e) => {
                console.error(e)
            })


    }

    getNoveltyProducts() {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token,
            }
        } : {
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }

    getAllProductsSort(prod, des) {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/${prod}/?${des}`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token,
            }
        } : {
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })


    }

    getNoveltyProducts1() {
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/novelty`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token,
            }
        } : {
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => {
                this.novelty = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })


    }

    async getProductsSesonCategory(id) {
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?seasoncategory_id=${id}`)
            .then(res => {
                this.productsSesonCategory = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })


    }


    getCategoryTitle(title) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/?title=${title}`)
            .then(res => {
                this.productTitle = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }

    getCategoryTitleCount(title) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?title=${title}`)
            .then(res => {
                this.productTitleCount = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }

    getSubcategory() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/seasoncategory/`)
            .then(res => {
                this.subcategory = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }

    getSubcategoryId(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory/?seasoncategory_id=` + id)
            .then(res => {
                this.productSorted = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }


    getSortedData() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/productcategory`)
            .then(res => {
                this.prodcategory = [...res.data]
                // this.allProductSorted = this.productSorted

            })
            .catch((e) => {
                console.error(e)
            })
    }

    changeFilter(input) {
        this.setLoader(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?title__icontains=` + input)
            .then(res => {
                this.products = [...res.data]
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })

    }

    searchFilterArticul(input) {
        this.setLoader(true)
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?articul__iexact=` + input)
            .then(res => {
                this.products = [...res.data]
                this.setLoader(false)
            })
            .catch((e) => {
                console.error(e)
                this.setLoader(false)
            })
    }

    changeFilterCount(id) {
        return this.productTitleCount.find(item => item.seasoncategory === id)

    }

    changeFilterSorted(id) {
        this.productSorted = this.allProductSorted.filter((item, index) => item.seasoncategory === id)

    }

    changeDiscounted() {
        this.products = this.allProducts.filter(item => this.discount.some(j => j.id === item.id))

    }

    priceFilter() {
        this.productss = this.allProducts.sort((a, b) => b.price - a.price)
        console.log(this.productss)
    }

    searchFilter(input) {
        if (parseInt(input)) {
            this.products = this.allProducts.filter(item => item.articul === input)
        } else {
            this.products = this.allProducts.filter(item => item.title.toLowerCase() === input.toLowerCase())
        }
    }

    countTitle(id) {
        return this.products.filter(item => item.seasoncategory === id).length

    }

    countTitleSorted(id) {
        return this.productTitle.filter(item => item.seasoncategory === id).length

    }


    subcategoryFilter(title) {
        this.products = this.allProducts.filter(item => item.subcategory === title)
    }

    getData(id) {
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/` + id, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                this.product = response.data
                this.imagesUser = this.product.images
                this.size = this.product.size
                this.reviews = this.product.reviews
            })
            .catch((e) => {
                console.error(e)
            })
    }

    priceFilter(newValue) {
        if (!newValue) {
            return []
        } else {
            let arr = this.allProducts?.filter((a) => parseInt(a?.price) >= newValue[0] && parseInt(a?.price) <= newValue[1])
            this.products = arr
        }
    }


    getDataNew() {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then(response => {
                this.newProduct = response.data
            })
            .catch((e) => {
                console.error(e)
            })
    }


    getDataNewSeason(id) {
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?seasoncategory=${id}`)
            .then(response => {
                this.newProductSeason = response.data
            })
            .catch((e) => {
                console.error(e)
            })
    }

    getDataFavorite() {
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                this.favorite = response.data
            })
            .catch((e) => {
                console.error(e)
            })
    }

    fetchTodoCatalog(title) {
        this.token = JSON.parse(localStorage.getItem('value'))
        return axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/?productcategory__title__iexact=${title}`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token


            }
        } : {
            headers: {
                'Content-Type': 'application/json',


            }
        })
            .then(res => {
                this.products = [...res.data]
                this.allProducts = this.products
            })
            .catch((e) => {
                console.error(e)
            })
    }

    getBlogData(id) {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/blogs/` + id)
            .then(response => {
                this.blogItem = response.data

            })
            .catch((e) => {
                console.error(e)
            })
    }


    async blogFetchTodo() {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/blogs`)
            .then(res => {
                this.blog = [...res.data]
                this.blog = this.blog

            })
            .catch((e) => {
                console.error(e)
            })
    }


    discountTodo() {
        this.setLoader(true)
        this.token = JSON.parse(localStorage.getItem('value'))
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/discount`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                this.products = [...res.data]
                this.setLoader(false)

            })
            .catch((e) => {
                console.error(e)
                this.setLoader(true)
            })
    }

    discountTodo1() {
        this.token = JSON.parse(localStorage.getItem('value'))
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/discount`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                this.discount = [...res.data]


            })
            .catch((e) => {
                console.error(e)
            })
    }

    async changeDiscounted() {
        this.token = JSON.parse(localStorage.getItem('value'))
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/discount`, this.token?.token ? {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + this.token?.token
            }
        } : {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                this.products = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async getGallery() {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/gallery`)
            .then(res => {
                this.gallery = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }

    async getSertivicat() {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/sertificate`)
            .then(res => {
                this.sertificate = [...res.data]
            })
            .catch((e) => {
                console.error(e)
            })
    }


}
