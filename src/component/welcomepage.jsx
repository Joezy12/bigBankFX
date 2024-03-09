
import { useEffect, useState } from "react";
import DashboardNav from "./dashboardNav";
import DashLeftNav from "./dashLeftNav";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, doc, setDoc, getDocs } from "firebase/firestore";

function WelcomePage(props) {


    const collectionRef = collection(database, 'users')
    const [userUid, setUserUid] = useState(props.myuid);
    const [userInfo, setUserInfo] = useState([]);
    const [realUser, setRealUser] = useState({
       userName: "",
    })

     const [userData, setUserData] = useState([]);

    

     let name = userUid;

  


     




   useEffect(()=> {

        getDocs(collectionRef)
        .then((response)=> {
            setUserData(response.docs);
            setUserInfo(userData.filter((ele)=> {
                return ele.id == name;
            }));

             localStorage.setItem('userDa', JSON.stringify(userInfo[0].data()));
             window.location.reload(false)
           
        })
   }, [userData]);

   
   useEffect(()=> {
    setRealUser(JSON.parse(localStorage.getItem('userDa')));
   }, [])

 

    
    
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