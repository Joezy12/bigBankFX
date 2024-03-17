import { useState } from "react";
import Deposit from "./deposit";
import { app, database } from "./firebaseConfig";
import { collection, doc, updateDoc, setDoc, addDoc} from "firebase/firestore";



function DepositMoney(props) {

  const date = new Date().toDateString();
 console.log(date)


  function CreateDepoHistory() {
    const collectionRef = doc(database, props.name, date);
    setDoc(collectionRef, {
      theDate: date,
      amount: depositDetails.selectedAmount,
      status: "pending",
      bankName: depositDetails.bankName,
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
    })
    .then(()=> {``
      CreateDepoHistory();
      window.location.reload(false);
    })
    .catch((err)=> {
      console.log(err.message)
    })
  }

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
<h1> +50,000</h1>
<p>Deposit</p>
<h3>Pending <i className="bi-clock"></i></h3>
        </div>
     
     <div className="deposit-details">
    <h1>Transaction Details</h1>
    <div className="transaction-details">
      <p>Sender's Details</p>
      <h3>IDOWU UMORU</h3>
    </div>
    <div className="transaction-details">
      <p>Transaction Type</p>
      <h3>DEPOSIT</h3>
    </div>
    <div className="transaction-details">
      <p>Transaction Number</p>
      <h3>0445673400233</h3>
    </div>
    <div className="transaction-details">
      <p>Payment Method</p>
      <h3>BANK TRANSFER</h3>
    </div>
    <div className="transaction-details">
      <p>Deposit Request Date</p>
      <h3>March 17th, 2024 </h3>
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