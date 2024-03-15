import { NavLink } from "react-router-dom";


function Deposit(prop) {

    return (
        <div className="deposit">
            <div className="deposit-head">
                <h1>Choose Plan</h1>
            </div>

            <div className="plans">

                <div className="plan-box">
                    <h1>Basic Plan</h1>
                    <p>Get 30% ROI</p>
                    <h3>$50 - Minimum</h3>
                    <h3>$10,000- Maximum</h3>

                    <div className="timer">
                        <div className="time-frame">
                            <h2><i className="bi-check"></i> Duration</h2>
                            <p>10 days</p>
                        </div>
                        <div className="time-frame">
                            <h2><i className="bi-check"></i> Daily percentage</h2>
                            <p>3.0%</p>
                        </div>
                        <div className="time-frame">
                            <h2> <i className="bi-check"></i> Profit withdrawal</h2>
                            <p>10 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2><i className="bi-check"></i>  withdrawal</h2>
                            <p>20 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2><i className="bi-check"></i> Referral bonus</h2>
                            <p>10%</p>
                        </div>
                    </div>

                <button name="basic" onClick={prop.planAction}>Choose</button>
                </div>




                <div className="plan-box">
                    <h1>Basic Plan</h1>
                    <p>Get 30% ROI</p>
                    <h3>$50 - Minimum</h3>
                    <h3>$50- Maximum</h3>

                    <div className="timer">
                        <div className="time-frame">
                            <h2>Duration</h2>
                            <p>10 days</p>
                        </div>
                        <div className="time-frame">
                            <h2>Daily percentage</h2>
                            <p>3.0%</p>
                        </div>
                        <div className="time-frame">
                            <h2>Profit withdrawal</h2>
                            <p>10 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2>Capital withdrawal</h2>
                            <p>20 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2>Referral bonus</h2>
                            <p>10%</p>
                        </div>
                    </div>

                    <button name="silver" onClick={prop.planAction}>Choose</button>
                </div>




                <div className="plan-box">
                    <h1>Basic Plan</h1>
                    <p>Get 30% ROI</p>
                    <h3>$50 - Minimum</h3>
                    <h3>$50- Maximum</h3>

                    <div className="timer">
                        <div className="time-frame">
                            <h2>Duration</h2>
                            <p>10 days</p>
                        </div>
                        <div className="time-frame">
                            <h2>Daily percentage</h2>
                            <p>3.0%</p>
                        </div>
                        <div className="time-frame">
                            <h2>Profit withdrawal</h2>
                            <p>10 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2>Capital withdrawal</h2>
                            <p>20 day(s)</p>
                        </div>
                        <div className="time-frame">
                            <h2>Referral bonus</h2>
                            <p>10%</p>
                        </div>
                    </div>

                    <button name="gold" onClick={prop.planAction}>Choose</button>
                </div>

            </div>
        </div>
    )
}

export default Deposit;