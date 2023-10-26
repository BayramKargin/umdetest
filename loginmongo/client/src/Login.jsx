import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if(result.data == "Success"){
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

            <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Login</button>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/register" className="btn btn-primary btn-lg">Sign Up</Link>
                </div>

            </form>
        </div>




    )
}

export default Login;