import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [data,getData] = useState(
        {
            "name": "",
            "email": "",
            "password": ""
        }
    )
    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        if(data.confirmpassword === data.password){
        axios.post("http://localhost:8080/signup",data).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("SignUp complete")
                    
                } else {
                    alert("An error occured")
                    
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }else {
        alert("Error")
    }
}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label"> NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">EMAIL</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRMPASSWORD</label>
                                <input type="password" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SIGNUP</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p>Alreadt have an account. <Link to="/">SIGNIN HERE</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp