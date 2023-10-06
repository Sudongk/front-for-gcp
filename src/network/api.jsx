import axios from "axios"
axios.defaults.baseURL = process.env.NODE_ENV === 'development' && 'http://34.64.68.161:8080'
export const apiNoToken = async (url, method, data) => {
    const body = await axios(
        {
            url, method, data
        }
    )

    return body
}
export const api = async (url, method, data) => {
    const token = localStorage.getItem('token')
    const body = await axios(
        {
            url, method, data, headers: { "Authorization": `Bearer ${token}` }
        }
    )

    return body

}