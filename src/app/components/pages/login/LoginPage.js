import React, { useState } from 'react';
import './loginPage.scss';
import loginBG from '../../../assets/images/lognPageImg.svg'
import SignInForm from '../../login/SignInForm';
import SignupForm from '../../login/SignupForm';




const LoginPage = () => {
    const [switchAccount, setSwitchAccount] = useState(true)


    return (
        <>
            <div className='sign_in_page'>
                <img src={loginBG} alt="" />
                <div className="login_box">

                    <div className="login">
                        <h1> Sign In to MaxShop</h1>
                        {switchAccount ?<SignInForm />:<SignupForm/>}
                    </div>

                    <div className="switch_account">
                        {switchAccount ?
                                <p>
                                    Dont't have an account?
                                    <button onClick={() => setSwitchAccount(false)}>Sign Up Here</button>
                                </p> : <p>
                                    Already have an account?
                                    <button onClick={() => setSwitchAccount(true)}>Sign In Here</button>
                                </p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;