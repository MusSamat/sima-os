// import { userService } from '@/_services/user.service'

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('value'))

  if (user && user.token) {
    return { Authorization: 'Token ' + user.token }
  } else {
    return {}
  }
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        // localStorage.removeItem('value')
        // window.location.href = '/login'
        // window.location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
	console.log(data)
    return data
  })
}
