import { Route, Router, Routes } from "react-router-dom";
import DashHome from "./dashHome";
import PhoneNav from "./phoneNav";


function DashBody(prop) {

    return(
        <div className="my-dash-body">
        <PhoneNav />
       <Routes>
        <Route index element={<DashHome userName={prop.userName} capitalBalance={prop.capitalBalance} />}/>
       </Routes>
        </div>
    )
}

export default DashBody;