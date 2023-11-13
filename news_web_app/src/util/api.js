
import axios from "axios"
import userState from "../model/UserState.js"
import UserSession from "../model/User.js"

export const baseUrl = "http://localhost:4000"

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

export const fetchNewsByCategory = async(category) => {
    try{
        const response = await axios.get(`${baseUrl}/article/list/${category}`)
        if (response.status === 200){
            return response.data
        }else{
            throw new Error('No  articles')
        }
    }catch(err){
        throw new Error('Internal Server Error')
    }
}

export const submitNews = async(req) => {
    console.log(req)
    const token = sessionStorage.getItem('token');
    const config = getConfig()
    try {
        const response = await axios.post(`${baseUrl}/article/add`, req,config)
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
    const config = getConfig()
    try {
        const res = await axios.delete(`${baseUrl}/article/${req}`,config)
        if (res.status === 200){
            return true
        }else{
            throw new Error("Error")
        }
    }catch(err){
        throw new Error("Internal Server Error")
    }
}

function getConfig(){
    const token = sessionStorage.getItem('token');
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      };
      return config
}