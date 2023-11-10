
import axios from "axios"
import userState from "../model/UserState.js"
import UserSession from "../model/User.js"

const baseUrl = "http://localhost:4000"

export const loginApi = async(credential) => {
    try{
        const response = await axios.post(`${baseUrl}/user/login`,credential)
        if (response.status === 200){
            return response.data
        }else{
            throw new Error('Login failed')
        }
    }catch(err){
       console.log(err)
        throw new Error("Api failed")
    }
}

/*export const fetchNews = async() => {
    try {
        const response = await axios.get(`${baseUrl}/article/list`)
        if (response.status === 200){
            return response.data
        }else{
            throw new Error()
        }
    }catch (err){

    }
}*/
