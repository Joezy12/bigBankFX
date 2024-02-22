import redbull from '../../public/redbull.png'

function Navbar() {

    return (
        <section>
            <div className="navbar">
                <div className='logo'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
                <div className="nav-links">
                    <ul>
                        <li>About US</li>
                        <li>Our Service</li>
                        <li>Legal Information</li>
                        <li>Help Center</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div className="sign-btns">
                    <button className="login-btn">Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className='phone-nav'>
            <div className='logo'><img src={redbull} alt="" /><h2>BigBankFX</h2></div>
            <div><i className='bi-list'></i></div>
            </div>
        </section>
    )
}

export default Navbar;