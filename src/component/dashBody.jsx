import { Route, Router, Routes } from "react-router-dom";
import DashHome from "./dashHome";
import PhoneNav from "./phoneNav";
import PhoneTop from "./phoneTop";


function DashBody(prop) {

    return(
        <div className="my-dash-body">
        <PhoneTop lastName={prop.lastName} userName={prop.userName}/>
        <PhoneNav />
       <Routes>
        <Route index element={<DashHome userName={prop.userName} capitalBalance={prop.capitalBalance} lastName={prop.lastName} name={prop.name}/>}/>
       </Routes>
        </div>
    )
}

export default DashBody;