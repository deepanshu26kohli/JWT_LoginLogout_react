import React, { useState } from 'react'
import Authuser from './Authuser'
const Form = () => {
    const {http ,setToken} = Authuser()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const submitForm = (event)=>{
        event.preventDefault()
        http.post("/login",{username:email,password:password}).then((res)=>{
            console.log(res.data.token,res.data.username)
            setToken(res.data.username,res.data.token)
        })
    }
    return (
        <>
            <form className='container w-25 ' onSubmit={submitForm}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setEmail(event.target.value)}}/>
                  
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form
