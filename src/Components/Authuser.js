import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Authuser = () => {
    const navigate = useNavigate()
    const getToken = ()=>{
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }
    const getUser = ()=>{
        const userString = sessionStorage.getItem('user')
        const user_detail = JSON.parse(userString)
        return user_detail 
    }
    const [token,setToken] = useState(getToken())
    const [user,setUser] = useState(getUser())
    
    const saveToken = (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token))
        sessionStorage.setItem('user',JSON.stringify(user))
        setToken(token)
        setUser(user)
        navigate('/dashboard')
    }
    const logout = ()=>{
        sessionStorage.clear()
        navigate('/login')
    }
    const http = axios.create(
        {
            baseURL : "https://dummyjson.com/auth",
            headers:{
                 "Content-Type": "application/json"
            }
        }
    )
  return { http,setToken:saveToken,token,user,getToken,logout}
}

export default Authuser
