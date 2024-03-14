import { NavLink } from "react-router-dom";

function PhoneNav() {

    return (
        <div className="phone-nav2">

        <div className="phone-link">
            <i className="bi-folder"></i>
           <p>Account</p>
        </div>


        <NavLink to="." className="linko">  <div className="phone-link homer">
            <i className="bi-grid"></i>
         
        </div> </NavLink>

        <div className="phone-link">
            <i className="bi-three-dots"></i>
            <p>More</p>
        </div>
        </div>
    )
}

export default PhoneNav;