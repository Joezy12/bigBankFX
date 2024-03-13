
function PhoneTop(prop) {

    return (
        <div className="phone-top">
           <div className="phoner">
           <div className="phone-pic"></div>
            <div className="phone-text">
                <p>{prop.userName} {prop.lastName}</p>
            </div>
           </div>
        </div>
    )
}

export default PhoneTop;