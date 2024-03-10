import Homepage from "./component/Homepage";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import AboutUs from "./component/aboutus";
import OurServices from "./component/ourservices";
import LegalInformation from "./component/legalInformation";
import Contact from "./component/contact";
import TermOfUse from "./component/termofuse";
import Login from "./component/login";
import SignUp from "./component/signup";
import WelcomePage from "./component/welcomepage";
import { useState } from "react";
import { app, database } from "./component/firebaseConfig";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(false);

  const [errorText, setErrorText] = useState("");

  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const [activeUid, setActiveUid] = useState("");
 

  const auth = getAuth();

  const [signInfo, setSignInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })

  const [showNavbar, setShowNavbar] = useState(true);

  const stylo = {
    background: showNavbar ? "linear-gradient(to right bottom, #0C0E13, #0C0E13)": "white",
    color: showNavbar ? "white": "black",
  }

  function removeNav() {
    setShowNavbar(false)
  }

  function gatherSignInfo(event) {
    setSignInfo((prev)=> {
      return {
        ...prev,
      [event.target.name]: event.target.value,
      }
    })
 
  }


  function gatherLoginInfo(event) {
    setLoginInfo((prev)=> {
      return {
        ...prev,
      [event.target.name]: event.target.value,
      }
    })
 
  }



  function storeUserInfo(theUserId) {
    const collectionRef = doc(database, 'users', theUserId);
    setDoc(collectionRef, {
      firstName: signInfo.firstName,
      lastName: signInfo.lastName,
      userName: signInfo.userName,
      email: signInfo.email,
      
    })
    .then((response)=> {
      alert("data added");
    })
    .catch((error)=> {
      alert(error.message)
    })

  }


  function createUser(event) {
    event.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, signInfo.email, signInfo.password)
    .then((response)=> {
      alert("successfully created");
      console.log(response.user.uid);
      storeUserInfo(response.user.uid);
      setActiveUid(response.user.uid);
      setLoading(false);
      navigate("login")
    })
    .catch((error)=> {
      alert(error.message);
      if(error.message == "Firebase: Error (auth/network-request-failed).") {
        setErrorText("No internet connection, connect to an internt and try again!")
       }else if(error.message == "Firebase: Error (auth/invalid-credential).") {
         setErrorText("Invalid email and password");
       }
      setShowError(true);
      setLoading(false);
      setTimeout(()=> {
        setShowError(false)
      }, 5000);
      
    })
  }

  function loginFunc(event) {
    setLoading(true);
    event.preventDefault();
     signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
     .then((response)=> {
    
      
      setActiveUid(response.user.uid);
      localStorage.setItem('userId', `${response.user.uid}`);
      setLoading(false);
      navigate("welcome")
     })
     .catch((error)=> {
      if(error.message == "Firebase: Error (auth/network-request-failed).") {
       setErrorText("No internet connection, connect to an internt and try again!")
      }else if(error.message == "Firebase: Error (auth/invalid-credential).") {
        setErrorText("Invalid email and password");
      }
   
      setShowError(true);
      setLoading(false);
      setTimeout(()=> {
        setShowError(false)
      }, 5000)
     })
  }

  
  
  return (
<section className="app" >
{showNavbar ? <Navbar /> : ""}
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="services" element={<OurServices lll />} />
    <Route path="legal" element={<LegalInformation />} />
    <Route path="contact" element={<Contact />} />
    <Route path="term" element={<TermOfUse />} />
    <Route path="login" element={<Login gatherLog={gatherLoginInfo} submitLog={loginFunc} showErr={showError} errText={errorText} loadState={loading} />} />
    <Route path="signup" element={<SignUp gatherFunc={gatherSignInfo} submitFunc={createUser} loadState={loading} errText={errorText} showErr={showError}/>} />
    <Route path="welcome" element={<WelcomePage funct={removeNav} myuid={activeUid}/>} />
  </Routes>
  {showNavbar ? <Footer /> : ""}
</section>
  )

}


export default App;
