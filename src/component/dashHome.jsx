

function DashHome(props) {

    return (
        <div className="dash-home">
            <div className="d-h-top">
                <h1>Hello, {props.name}</h1>
                <button>Add new project</button>
            </div>


            <div className="account-info">
                <div className="account-money">
                    <div className="account-balance">
                        <p>Capital balance:</p>
                        <h1>&#8358; {props.capitalBalance}.00</h1>
                    </div>
                    <div className="account-balance">
                        <p>Available Profit:</p>
                        <h1>&#8358; 8,000</h1>
                    </div>

                   <div className="butts">
                    <button className="but1">History</button>
                    <button className="but2">Deposit</button>
                    <button className="but3">withdraw</button>
                   </div>

                    <div className="account-balance">
                        <p>Total balance:</p>
                        <h1>&#8358; 0.00</h1>
                    </div>
                </div>

                <div className="add-money">
                    <button>+</button>
                    <p>Deposit</p>
                </div>
            </div>

            <div className="middle-account">
                <div className="add-account">
                    <h2>Add Account</h2>
                    <p> Help make your withdrawal fast by adding payment funding account!</p>
                    <p className="gold-p">Add account {">"}</p>

                </div>

                <div className="the-plans">
                    <p>Our Investment Plans</p>
                    <div className="vest">
                        <p>BASIC PLAN</p>
                        <div className="full">
                            <div className="full-container">
                                <div className="full-bar"></div>
                            </div>
                            <p><i className="bi-caret-up-fill"></i>30%</p>
                        </div>
                    </div>

                    <div className="vest">
                        <p>SILVER PLAN</p>
                        <div className="full">
                            <div className="full-container">
                                <div className="full-bar bar2"></div>
                            </div>
                            <p><i className="bi-caret-up-fill"></i>60%</p>
                        </div>
                    </div>

                    <div className="vest">
                        <p>GOLD PLAN</p>
                        <div className="full">
                            <div className="full-container">
                                <div className="full-bar bar3"></div>
                            </div>
                            <p><i className="bi-caret-up-fill"></i>100%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="transaction-history">
            <h1>Transaction History</h1>
            <p>no transaction yet</p>
            </div>
        </div>
    )
}

export default DashHome;