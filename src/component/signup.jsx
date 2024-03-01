


function SignUp() {

    return (
        <div className="sign-up">
            <form className="sign-box">

                <h1>Sign Up</h1>

                <div className="double-input">
                    <div className="sign-input">
                        <p>FIRST NAME</p>
                        <input type="text" />
                    </div>
                    <div className="sign-input">
                        <p>FIRST NAME</p>
                        <input type="text" />
                    </div>
                </div>

                <div className="sign-input">
                        <p>USER NAME</p>
                        <input type="text" />
                    </div>

                    <div className="sign-input">
                        <p>EMAIL ADDRESS</p>
                        <input type="text" />
                    </div>

                    <div className="sign-input">
                        <p>PASSWORD</p>
                        <input type="password" />
                    </div>

                    <button>SIGN UP</button>

            </form>
        </div>
    )
}

export default SignUp;