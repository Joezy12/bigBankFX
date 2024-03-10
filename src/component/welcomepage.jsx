
import { useEffect, useState } from "react";
import DashboardNav from "./dashboardNav";
import DashLeftNav from "./dashLeftNav";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";

function WelcomePage(props) {


    const collectionRef = collection(database, 'users')
    const [userUid, setUserUid] = useState(`${localStorage.getItem("userId")}`);
    const [userInfo, setUserInfo] = useState([]);
    const [realUser, setRealUser] = useState([
        {
            userName: "",
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
            </div>
        </div>
    )
}

export default WelcomePage;