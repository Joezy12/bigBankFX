import { useEffect, useState } from "react";
import Deposit from "./deposit";
import { app, database } from "./firebaseConfig";
import { collection, doc, updateDoc, setDoc, addDoc, getDocs} from "firebase/firestore";



function DepositMoney(props) {
  const [activeDepoDate, setActiveDepoDate] =useState("");
  const date = new Date().toDateString() + " " + new Date().getHours() + ":" + new Date().getMinutes().toString();
    console.log(date);

    const myCollectionRef = collection(database, "users");

    let activeDepo;

    function getActiveDepo() {
       getDocs(myCollectionRef)
       .then((response)=> {
         activeDepo = response.docs.filter((element)=> {
          return element.id == `${localStorage.getItem("userId")}`;
         });
         setActiveDepoDate(activeDepo[0].data().pendingDeposit);
         console.log(activeDepoDate)
       })
    }

    getActiveDepo();


  function CreateDepoHistory() {
    const collectionRef = doc(database, props.name, date);
    setDoc(collectionRef, {
      theDate: date,
      amount: depositDetails.selectedAmount,
      status: "pending",
      bankName: depositDetails.bankName,
      accountName: depoDetails.accountName,
    })
    .then((response)=> {
      console.log("depoHistory created")
    })
    .catch((err)=> {
      console.log(err.message)
    })

  }

  const collectionRef = collection(database, "users");

  const [depositDetails, setDepositDetails] = useState({
    selectedAmount: 0,
    accountName: "",
    bankName: "",
  });

  let depositState = localStorage.getItem('depositState');

  let showDepositState;

 
  console.log(depositState);

  localStorage.setItem('depoDetails', JSON.stringify(depositDetails));

  let depoDetails = JSON.parse(localStorage.getItem('depoDetails'));

  function gatherDepo(event) {
    setDepositDetails((prev)=> {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    });
    console.log(depositDetails);
  }

  function submitDeposit(event) {
    event.preventDefault();
    const docToUpdate = doc(database, "users", `${localStorage.getItem("userId")}`);
    updateDoc(docToUpdate, {
       depositState: "pending",
       pendingDeposit: date,
    })
    .then(()=> {
      CreateDepoHistory();
      window.location.reload(false);
    })
    .catch((err)=> {
      console.log(err.message)
    })
  }

  const HistoCollectionRef = collection(database, `${props.name}`);

  const [depoObject, setDepoObject] = useState({
    amount: 0,
    bankName: "",
    status: "",
    theDate: "",
    accountName: "",
    
  })

  let depoArr;
 
  function getHisto() {
      getDocs(HistoCollectionRef)
      .then((response)=> {
      depoArr = response.docs.filter((elem)=> {
        return elem.id == activeDepoDate;
      });
      setDepoObject(depoArr[0].data());
      console.log(depoObject)
      })
  }


  getHisto();



 let amountRange;
    let selectedPlan = localStorage.getItem('myPlan');

    if(selectedPlan == "basic") {
      amountRange = "$50 - $10,000"
    }else if(selectedPlan == "silver") {
      amountRange = "$10,000 - $50,000"
    }else if(selectedPlan == "gold") {
      amountRange = "$50,000 - infinite"
    }


    if(depositState == "undefined") {
      showDepositState = <div className="loader-box">
      <div className="loader"></div>
  </div>;
    }
    
    
    if(depositState == "success") {
      showDepositState = <div className="d-money">
      <h1>Deposit </h1>
      <div className="selected-plan">{selectedPlan} plan</div>
      <form className="deposit-form" onSubmit={submitDeposit}>
       <h1>Form</h1>
       <div className="deposit-inputs">
        <p className="d-i">Welcome, {props.name}</p>
  
        <div className="depo">
         <p>Amount</p>
         <input type="number" name="selectedAmount" id="" placeholder={amountRange} onChange={gatherDepo} />
        </div>
  
        <div className="depo">
         <p>Account holder's name</p>
         <input type="text" name="accountName" id="" placeholder="" onChange={gatherDepo} />
        </div>
  
        <div className="depo">
         <p>Bank Name</p>
      <input type="text" name="bankName" id="" placeholder="" onChange={gatherDepo} />
        </div>
  
       
        <div className="depo">
         <p>Upload a document for proof of payment (e.g, transaction receipt)</p>
         <div class="file-input">
  <input type="file" id="file" class="file" />
  
  <label for="file">
    Select file
    <p class="file-name"></p>
  </label>
</div>
        </div>
  
        <button>Deposit</button>
        
  
  
       </div>
      </form>
    </div>;
    }

    if(depositState == "pending") {
      showDepositState = <div className="pending-deposit">
      
        <div className="transaction-amount">
<h1> +{depoObject.amount}</h1>
<p>Deposit</p>
<h3>Pending <i className="bi-clock"></i></h3>
        </div>
     
     <div className="deposit-details">
    <h1>Transaction Details</h1>
    <div className="transaction-details">
      <p>Sender's Details</p>
      <h3>{depoObject.accountName}</h3>
    </div>
    <div className="transaction-details">
      <p>Transaction Type</p>
      <h3>DEPOSIT</h3>
    </div>
    <div className="transaction-details">
      <p>Bank Name</p>
      <h3>{depoObject.bankName}</h3>
    </div>
    <div className="transaction-details">
      <p>Payment Method</p>
      <h3>BANK TRANSFER</h3>
    </div>
    <div className="transaction-details">
      <p>Deposit Request
         Date</p>
      <h3>{depoObject.theDate}</h3>
    </div>
     </div>
    
      </div>
    }
  

    return (
      <section>
       {showDepositState}
        </section>
    )
}

export default DepositMoney;