import { NavLink } from "react-router-dom";
import { app, database } from "./firebaseConfig";
import { collection, doc, updateDoc, setDoc, addDoc, getDocs} from "firebase/firestore";
import { useState } from "react";

function DashHome(props) {

    const historyCollectionRef = collection(database, `${props.name}`);
    let [allHistory, setAllHistory] = useState("");

    function getAllHistory() {
       getDocs(historyCollectionRef)
       .then((response)=> {
        setAllHistory(response.docs.map((eachHistory)=> {
            return  <div className="history-boxes">
            <div className="boxo"><p>Deposit</p></div>
            <div className={`boxo`}><p>{eachHistory.data().amount}</p></div>
            <div className="boxo"><p>{eachHistory.data().theDate}</p></div>
            <div className="boxo"><p>{eachHistory.data().status}</p></div>
         </div>
        }))
        console.log(allHistory)
       })
       .catch((err)=> {
        console.log(err.message)
       })
    }

    getAllHistory();

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
                        <h1>&#8358; 0.00 </h1>
                    </div>

                    <div className="butts">
                        <button className="but1">History</button>
                        <NavLink to="deposit" className="linko">   <button className="but2">Deposit</button> </NavLink>
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
                <div className="depos">
                <div className="history-head">
                    <div className="boxo"><h4>Type</h4></div>
                    <div className="boxo"><h4>Amount</h4></div>
                    <div className="boxo"><h4>Date</h4></div>
                    <div className="boxo"><h4>Status</h4></div>
                </div>
               {allHistory != "" ? allHistory : <p className="no-tr">no transaction yet</p>}
                </div>
                
            </div>
        </div>
    )
}

export default DashHome;