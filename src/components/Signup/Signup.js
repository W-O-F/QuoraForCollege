import React from 'react'
import "./Signup.css"


function Signup() {
    return (
        <div>
            <header>
                <div className="headd"><img src="img/vlomger-logo.svg" alt="img" className="logos" />
                </div>

            </header>

            <div className="container">
                <div className="img">
                    <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="img" className="animation" /></div>
                <div className="login">
                    <h1>Login</h1>
                    <h3 className="login-to-contine">Please login to continue</h3>
                    <form action="">
                        <label for="email" className="email-head">E-mail</label><br></br>
                        <input type="email" placeholder="Enter your email Id" id="email" name="email" /><br></br>
                        <label for="password" className="password-head">Password</label><br></br>
                        <input type="password" className="password" id="password" name="password" placeholder="Enter password" /><br></br>
                        <div className="keep-logged-forgot-pass">


                            <div className="keep-loggedin">
                                <div>
                                    <input type="checkbox" name="keep-login" id="keep-login" />
                                    <label for="keep-login" className="keep-log" >Keep Me Logged in</label>
                                </div>
                                <div className="forgot-pass"><a href="#" ><h3 className="forgot">Forgot Password?</h3></a>
                                </div>
                            </div>

                            <button>LOGIN</button>
                        </div>
                    </form>
                    <h3 className="or-login-with">Or <br></br>Login With</h3>
                    <div className="icons">
                        <a href="/auth/google" role="button">
                            <div className="fb"><img src="img/google.png" alt="" /></div>
                        </a>
                        <a href="/auth/facebook" role="button">
                            <div className="twitter"><img src="img/fb.png" alt="" /></div>
                        </a>
                        <a href="/auth/github" role="button">
                            <div className="google"><img src="img/github.png" alt="" /></div>
                        </a>
                    </div>
                    <h3 className="get-new-account">
                        Don't have a account?
                        <a href="/signup" className="create-acc">Get One</a></h3>
                </div>

            </div>

        </div>
    )
}

export default Signup
