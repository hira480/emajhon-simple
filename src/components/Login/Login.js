import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import btnImg from '../../images/btnImg.png';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPasswor,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handelUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPasswor(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handelUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name="password" id="password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Emajhon? <Link className='form-link' to='/signup'>Create New Account</Link>
                </p>
                <div className='or'>
                    <div className='line'><hr /></div>
                    <div>or</div>
                    <div className='line'><hr /></div>
                </div>
                <button className='google-submit'>
                    <div className='btn-items'>
                        <img src={btnImg} alt="" />
                        <p>Continue With Google</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;