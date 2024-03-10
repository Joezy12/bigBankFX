import { NavLink } from 'react-router-dom';
import hello from '../../public/hello.svg';

function AccountCreated(prop) {

    const styler2 = {
        background: `url(${hello})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

    };

    return (
        <section className="account-created">
       <div className="account-c-pic" style={styler2}>

       </div>

       <div className="account-c-text">
        <h1>Hi, Welcome {`${prop.userName}`}</h1>
        <p>welcome to BigBankFX, your account has been setup and ready to use, Login in now to confirm your account</p>
       <NavLink to='../login'> <button>Login Now</button></NavLink>
       </div>
        </section>
    )
}


export default AccountCreated;