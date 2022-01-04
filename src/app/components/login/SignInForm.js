import React, { useState } from 'react';
import googleIcon from '../../assets/images/googleIcon.png'
import facebookIcon from '../../assets/images/facebookIcon.png'
import { useAuth } from '../contexts/AuthContext';
import { useHistory, useLocation } from 'react-router';

const SignInForm = () => {


    const [userInfo, setUserInfo] = useState('')


    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth()
    const history = useHistory()
    const location = useLocation()

    console.log(history, 'location');
    const onChangeHandler = (e) => {
        const newUser = { ...userInfo };
        newUser[e.target.name] = e.target.value;
        setUserInfo(newUser)

    }

    async function handleSubmit(e) {
        e.preventDefault();

        const { email, password } = userInfo


        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login!");
        }


    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(e) => onChangeHandler(e)} name="email" type="text" placeholder="Email..." />
                <input onChange={(e) => onChangeHandler(e)} name="password" type="password" placeholder="Password" />
                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                {error && <p className="error">{error} One</p>}
                <input type="submit" className="button" value="Sign In" />
            </form>

            <div className="directSignIn">
                <p>
                    <img src={googleIcon} alt="" />
                    Sign in with google
                </p>
                <p>
                    <img src={facebookIcon} alt="" />
                    Sign in with facebook
                </p>
            </div>
        </>
    );
};

export default SignInForm;