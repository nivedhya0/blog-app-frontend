import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [data,getData] = useState(
        {
            "email": "",
            "password": ""
        }

    )
  return (
    <div>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">EMAIL</label>
                                <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SIGNUP</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p>Alreadt have an account. <Link to="/">SIGNUP HERE</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SignIn