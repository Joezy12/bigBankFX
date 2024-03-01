
import DashboardNav from "./dashboardNav";

function WelcomePage(props) {
    
    props.funct();
    return (
        <div className="welcome-page">
           <DashboardNav />
           <div className="dash-body">
          {props.myuid}
           </div>
        </div>
    )
}

export default WelcomePage;