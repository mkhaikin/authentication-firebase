import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import {Form, Button, Alert} from "react-bootstrap"
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {LogIn, googleSignIn, forgotPassword } = useUserAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
            e.preventDefault();
            setError("")
            try {
                await LogIn(email, password)
                navigate("/home")
            } catch (err){
                console.log("Error", err)
                setError(err.message)
            }
        }
    
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn()
            navigate("/home")
        } catch (err) {
            setError(err.message)
        }
    }

    const forgotPasswordHandler = () => {
        if(email.length > 1) 
            forgotPassword(email).then(() => (setEmail(""))) 
    }

    return (
        <>
            <div className="p-4 box">
                <h2 clasName="mb-3">Auth login (Firebase)</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </div>
                </Form>
                <hr/>
                <div>
                    <GoogleButton 
                        className="g-btn" 
                        type="dark" 
                        onClick={handleGoogleSignIn} 
                    />
                </div>
            </div>
            <a href='#' onClick={forgotPasswordHandler}>Forgot Password?</a>
            
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    )
    
}
export default Login