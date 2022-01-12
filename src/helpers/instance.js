import axios from 'axios'
// import { getAccessToken, parseCookies } from '../_helpers/cookie'

export const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	validateStatus: function (status) {
		return true; // default
	},
})

// instance.interceptors.request.use(
// 	async config => {
// 	  const token = await getAccessToken();
// 	  if (token) config.headers.authorization = `Bearer ${token}`;
// 	  return config;
// 	},
// 	error => {
// 	  Promise.reject(error);
// 	}
// );

// export const setAuthorization = (req) => {
// 	const authToken = parseCookies(req)
// 	if (authToken.access) {
// 		instance.defaults.headers.common.Authorization = 'Bearer ' + authToken.access
// 	} else delete instance.defaults.headers.common.Authorization
// 	return authToken.access
// }