
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
        throw new Error('login failed')
    }
}

export const fetchNews = async() => {
    try {
        const response = await axios.get(`${baseUrl}/article/list`)
        console.log(response)
        if (response.status === 200){
            return response.data
        }else{
            throw new Error('No  articles')
        }
    }catch (err){
        throw new Error('Internal Server Error')
    }
}

export const submitNews = async(req) => {
    try {
        const response = await axios.post(`${baseUrl}/article/add`, req)
       console.log(response.status)
        if (response.status === 200){
            return true 
        }else{
            throw new Error("Unable to add Articles")
        }
    }catch (err) {
        throw new Error("Unable to add Articles")
    }
}

export const deleteNews = async(req) => {
    try {
        const res = await axios.delete(`${baseUrl}/article/${req}`)
        if (res.status === 200){
            return true
        }else{
            throw new Error("Error")
        }
    }catch(err){
        throw new Error("Internal Server Error")
    }
}