import Cookies from 'js-cookie'
import cookie from 'cookie'
import axios from 'axios'

export const setCookie = (name, data) => {
	Cookies.set(name, JSON.stringify(data), { expires: 7, path: '/' })
}

export const removeCookie = (name) => {
	Cookies.remove(name)
}

export function parseCookies (req) {
	const c = cookie.parse(req ? req.headers.cookie || '' : document.cookie)
	return JSON.parse(c.authToken ?? '{}')
}

export const getAccessToken = async () => {
	const  access  = Cookies.get('authToken') ? JSON.parse(Cookies.get('authToken')) : {}
	if (access) {
		return access
	} 
	return access
}