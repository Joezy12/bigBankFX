


function Login() {

    return (
        <div className="login">
            <div className="login-left">
                <h1>Welcome <br /> Back</h1>
                <p>it is a long established fact that a reader will be distracted by the readable  content of a page when looking at it's layout. The point of using</p>
                <div className="icons">
                    <i className="bi-facebook"></i>
                    <i className="bi-twitter"></i>
                    <i className="bi-instagram"></i>
                    <i className="bi-youtube"></i>
                </div>
            </div>
            <div className="login-right">
                <h1>Sign in</h1>
                <form className="login-form">
                    <div className="fields">
                        <p>Email Address</p>
                        <input type="email" />
                    </div>

                    <div className="fields">
                        <p>Password</p>
                        <input type="password" />
                    </div>

                    <div className="remember-check">
                     <input type="checkbox" />
                     <p>Remember me</p>
                    </div>
                    
                    <button>Sign in now</button>

                    <h2>Lost your password?</h2>

                    <h3>By clicking on "Sign in now" you agree to <u>Terms of service</u> | <u>Privacy Policy</u></h3>


                </form>

            </div>
        </div>
    )
}

export default Login;