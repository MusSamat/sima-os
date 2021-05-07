import { $authHost, $host} from "./index";

export const registration = async (username, email, password) =>{
    const response = await $host.post('/api/auth/register', {username, email, password})
    return response
}
export const login = async (email, password) =>{
    const response = await $host.post('/api/auth/register', {email, password})
    return response
}