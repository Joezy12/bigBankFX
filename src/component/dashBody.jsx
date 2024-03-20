import { Route, Router, Routes } from "react-router-dom";
import DashHome from "./dashHome";
import PhoneNav from "./phoneNav";
import PhoneTop from "./phoneTop";
import Deposit from "./deposit";
import DepositMoney from "./depositMoney";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./account";


function DashBody(prop) {

    const navigate = useNavigate();

   let [selectedPlan, setSelectedPlan] = useState("");
    
    function plan(event) {
        setSelectedPlan(event.target.name);
        localStorage.setItem('myPlan', `${event.target.name}`)
        console.log(selectedPlan);
        navigate('./depositMoney');
    }

    localStorage.setItem('depositState', prop.depositState);


    return(
        <div className="my-dash-body">
        <PhoneTop lastName={prop.lastName} userName={prop.userName}/>
        <PhoneNav />

        <Routes>
        <Route index element={<DashHome userName={prop.userName} capitalBalance={prop.capitalBalance} lastName={prop.lastName} name={prop.name}/>}/>
        <Route path="deposit" element={<Deposit plan={plan} />} />
        <Route path="depositMoney" element={<DepositMoney selectedPlan={selectedPlan} name={prop.name} depositState={prop.depositState}/>} />
        <Route path="account" element={<Account />} />
       </Routes>
        </div>
    )
}




export default DashBody;