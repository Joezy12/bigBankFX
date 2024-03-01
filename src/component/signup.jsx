


function SignUp(prop) {

    return (
        <div className="sign-up">
            <form className="sign-box" onSubmit={prop.submitFunc}>

                <h1>Sign Up</h1>

                <div className="double-input">
                    <div className="sign-input">
                        <p>FIRST NAME</p>
                        <input type="text" name="firstName" onChange={prop.gatherFunc} />
                    </div>
                    <div className="sign-input">
                        <p>FIRST NAME</p>
                        <input type="text" name="lastName" onChange={prop.gatherFunc} />
                    </div>
                </div>

                <div className="sign-input">
                        <p>USER NAME</p>
                        <input type="text"  name="userName" onChange={prop.gatherFunc}/>
                    </div>

                    <div className="sign-input">
                        <p>EMAIL ADDRESS</p>
                        <input type="text" name="email" onChange={prop.gatherFunc} />
                    </div>

                    <div className="sign-input">
                        <p>PASSWORD</p>
                        <input type="password" name="password" onChange={prop.gatherFunc} />
                    </div>

                    <button>SIGN UP</button>

            </form>
        </div>
    )
}

export default SignUp;