


function SignUp(prop) {

    return (
        
        <div className="sign-up">
             {prop.loadState ?  <div className="loader-box">
                <div className="loader"></div>
            </div>: ""}
            {prop.showErr ? <div className="error-box">
                 <p>{prop.errText}</p>
                </div>: ""}
            <form className="sign-box" onSubmit={prop.submitFunc}>

                <h1>Sign Up</h1>

                <div className="double-input">
                    <div className="sign-input">
                        <p>First Name</p>
                        <input type="text" name="firstName" onChange={prop.gatherFunc} />
                    </div>
                    <div className="sign-input">
                        <p>Last Name</p>
                        <input type="text" name="lastName" onChange={prop.gatherFunc} />
                    </div>
                </div>

                <div className="sign-input">
                        <p>User Name</p>
                        <input type="text"  name="userName" onChange={prop.gatherFunc}/>
                    </div>

                    <div className="sign-input">
                        <p>Email Address</p>
                        <input type="text" name="email" onChange={prop.gatherFunc} />
                    </div>

                    <div className="double-input">
                    <div className="sign-input">
                        <p>Password</p>
                        <input type="password" name="password" onChange={prop.gatherFunc} />
                    </div>
                    <div className="sign-input">
                        <p>Confirm Password</p>
                        <input type="password" name="confirmPassword" onChange={prop.gatherFunc} />
                    </div>
                </div>

                    <button>SIGN UP</button>

            </form>
        </div>
    )
}

export default SignUp;