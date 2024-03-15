import { Route, Router, Routes } from "react-router-dom";
import DashHome from "./dashHome";
import PhoneNav from "./phoneNav";
import PhoneTop from "./phoneTop";
import Deposit from "./deposit";
import DepositMoney from "./depositMoney";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function DashBody(prop) {

    const navigate = useNavigate();

   let [selectedPlan, setSelectedPlan] = useState("");
    
    function plan(event) {
        setSelectedPlan(event.target.name);
        localStorage.setItem('myPlan', `${event.target.name}`)
        console.log(selectedPlan);
        navigate('./depositMoney');
    }


    return(
        <div className="my-dash-body">
        <PhoneTop lastName={prop.lastName} userName={prop.userName}/>
        <PhoneNav />
       <Routes>
        <Route index element={<DashHome userName={prop.userName} capitalBalance={prop.capitalBalance} lastName={prop.lastName} name={prop.name}/>}/>
        <Route path="deposit" element={<Deposit planAction={plan}/>} />
        <Route path="depositMoney" element={<DepositMoney selectedPlan={selectedPlan}/>} />
       </Routes>
        </div>
    )
}

export default DashBody;