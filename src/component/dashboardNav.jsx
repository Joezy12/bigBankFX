import redbull from '../../public/redbull.png'


function DashboardNav(prop) {

    return (
        <div className="dashboard-nav">

<div className='dash-left'>
<div className='logo logo1 dash-logo'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
<div className='dash-search'>
<div className='dash-s-icon'><i className='bi-search'></i></div>
<input type="search" placeholder='search' />
</div>
</div>

<div className='dash-right'>
<div className='dash-r-icon'> <i className='bi-gear-fill'></i></div>
<div className='dash-r-icon'> <i className='bi-bell-fill'></i></div>
<div className='user'>
<div className='user-pic'></div>
<div className='user-name'>{prop.name} <i className='bi-chevron-down'></i></div>
</div>
</div>

        </div>
    )
}

export default DashboardNav;