



function DashLeftNav() {

    return (
        <div className="dash-l-nav">

            <div className="dash-links">
                <h3>Menu</h3>
                <div className="d-links">
                    <p className="active-p"> <i className="bi-grid"></i> Dashboard</p>
                    <p> <i className="bi-folder"></i> Accounts</p>
                    <p> <i className="bi-person"></i>Deposit</p>
                    <p> <i className="bi-house"></i> Withdraw</p>
                </div>
            </div>
           

            <div className="dash-links">
                <h3>Tools</h3>
                <div className="d-links">
                    <p> <i className="bi-grid"></i> Dashboard</p>
                    <p> <i className="bi-folder"></i> Accounts</p>
                   
                </div>
            </div>

        </div>
    )
}

export default DashLeftNav;