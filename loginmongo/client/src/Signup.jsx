import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

            <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" name="name" value={name} className="form-control" required onChange={(e) =>setName(e.target.value) } />  
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" name="email" value={email} className="form-control" onChange={(e) =>setEmail(e.target.value) } />
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input required type="password" id="form3Example4c" name="password" value={password} className="form-control" onChange={(e) =>setPassword(e.target.value) } />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Register</button>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
                </div>

            </form>
        </div>




    )
}

export default Signup;