import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../contexts/AuthContext'


const SignupForm = () => {

    const [newUserInfo, setNewUserInfo] = useState('')
    const { signup } = useAuth()
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const history = useHistory()

    const onChangeHandler = (e) => {
        const newUser = { ...newUserInfo };
        newUser[e.target.name] = e.target.value;
        setNewUserInfo(newUser)

    }

    console.log(newUserInfo);
    async function handleSubmit(e) {
        e.preventDefault();

        const { username, email, password, confirmPassword } = newUserInfo

        // do validation
        if (password !== confirmPassword) {
            return setError("Passwords don't match!");
        }

        try {
            console.log(newUserInfo, "tumi ok");
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/account/dashboard");

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to create an account!");
        }


    }


    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(e) => onChangeHandler(e)} name="username" type="text" placeholder="Full name..." />
                <input onChange={(e) => onChangeHandler(e)} name="email" type="text" placeholder="Email..." />
                <input onChange={(e) => onChangeHandler(e)} name="password" type="password" placeholder="Password" />
                <input onChange={(e) => onChangeHandler(e)} name="confirmPassword" type="password" placeholder="Confirm Password" />
                {error && <p className="error">{error} One</p>}
                <input type="submit" className="button" value="Sign In" />
            </form>
        </>
    );
};

export default SignupForm;