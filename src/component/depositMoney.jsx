import { useState } from "react";
import Deposit from "./deposit";
import { app, database } from "./firebaseConfig";
import { collection, doc, updateDoc } from "firebase/firestore";



function DepositMoney(props) {

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
    console.log(depositDetails)
  }

  function submitDeposit(event) {
    event.preventDefault();
    const docToUpdate = doc(database, "users", `${localStorage.getItem("userId")}`);
    updateDoc(docToUpdate, {
       depositState: "pending",
    })
    .then(()=> {
      alert("done");
      window.location.reload(false)
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
         <input type="file" name="" id="" placeholder="$50 - $10000" />
        </div>
  
        <button>Deposit</button>
        
  
  
       </div>
      </form>
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
         <input type="file" name="" id="" placeholder="$50 - $10000" />
        </div>
  
        <button>Deposit</button>
        
  
  
       </div>
      </form>
    </div>;
    }

    if(depositState == "pending") {
      showDepositState = <h1>Pending</h1>
    }
  

    return (
      <section>
       {showDepositState}
        </section>
    )
}

export default DepositMoney;