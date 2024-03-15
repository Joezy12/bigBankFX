
import { useEffect, useState } from "react";
import DashboardNav from "./dashboardNav";
import DashLeftNav from "./dashLeftNav";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";
import DashBody from "./dashBody";

function WelcomePage(props) {


    const collectionRef = collection(database, 'users')
    const [userUid, setUserUid] = useState(`${localStorage.getItem("userId")}`);
    const [userInfo, setUserInfo] = useState([]);
    const [realUser, setRealUser] = useState([
        {
            userName: "",
            firstName: "",
            capitalBalance: 0,
            lastName: "",
        }
    ])

    const [userData, setUserData] = useState([]);



    let name = userUid;

    let userInfo2;
    let userData2;








     useEffect( ()=> {

        getDocs(collectionRef)
            .then((response) => {
                userData2 = response.docs;
                setUserInfo(userData.filter((ele) => {
                    return ele.id == userUid;
                }));

                userInfo2 = userData2.filter((ele) => {
                    return ele.id == userUid;
                })

                  console.log(userUid);

                
        
                console.log(userInfo2[0].data());

                setRealUser(userInfo2[0].data());
            
             
              

            })
 

     }, [])
 


    //    useEffect(()=> {
    // setRealUser(JSON.parse(localStorage.getItem('userDa')));
    //    }, [])





    props.funct();
    return (
        <div className="welcome-page">
            <DashboardNav name={realUser.userName} />

            <div className="dash-body">
                <DashLeftNav />
                <DashBody userName={realUser.firstName} capitalBalance={realUser.capitalBalance} lastName={realUser.lastName} name={realUser.userName} depositState={realUser.depositState}/>
            </div>
        </div>
    )
}

export default WelcomePage;