import 'animate.css'
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector} from 'react-redux'
import {  startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state=> state.ui )

    const [ formvalues, handleInputChange, ] = useForm({
        email: '',
        password: '',
    })

    const { email, password } = formvalues;

    const handleGoogle = (e) => {
        dispatch( startGoogleLogin() )
    }

    const handleLogin =(e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch( startLoginEmailPassword(email, password) );
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form 
            onSubmit={ handleLogin }
            className="animate__animated animate__fadeIn animate__faster"
            >
                <input 
                type="text" 
                placeholder="Email" 
                name="email" 
                className="auth__input"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
                />

                <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                className="auth__input"
                value={ password }
                onChange={ handleInputChange }
                />
                <br />
                <button 
                type="submit"
                className="btn btn-primary btn-block"
                disabled={ loading }
                >
                Login
                </button>

                

                <div className="auth__social-network">
                    <p>Login with social network</p>
                    <div className="google-btn" onClick={ handleGoogle }>
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="links" to="/auth/register">Create New Acount</Link>
            </form>
        </div>
    );
};
