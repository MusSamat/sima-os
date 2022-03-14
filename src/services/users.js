import BaseApiService from '../services/baseApi.service'
class UserService extends BaseApiService {
	getUser () {
		const url = `${process.env.REACT_APP_BASE_URL}/api/auth/user`
		return this.sendGetRequest(url)
	}

	setUser (data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/auth/login`
		return this.sendPostRequest(url, data)
	}

	setRegister (data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/auth/register`
		return this.sendPostRequest(url, data)
	}

	getOrder (id) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/order/${id}`
		return this.sendGetRequest(url)
	}

	getUserCart (id) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/carts/${id}`
		return this.sendGetRequest(url)
	}
 
	getWish (id) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/wisher/${id}`
		return this.sendGetRequest(url)
	}

	deleteUserCart (data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/destroy-cart/`
		return this.sendPostRequest(url, data)
	}

	updateCart(data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/cart-item/`
		return this.sendPostRequest(url, data)
	}

	deleteUserWish (data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/destroy-wishlist/`
		return this.sendPostRequest(url, data)
	}

	addCart (data) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/cart-item/`
		return this.sendPostRequest(url, data)
	}

	getUserOderId (userId, id) {
		const url = `${process.env.REACT_APP_BASE_URL}/api/order/${userId}/?id=${id}`
		return this.sendGetRequest(url)
	}
}

export const userService = new UserService() 