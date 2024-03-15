import Deposit from "./deposit"



function DepositMoney(props) {

    let selectedPlan = props.selectedPlan;

    return (
        <div className="d-money">
          <h1>Deposit </h1>
          <div className="selected-plan">{selectedPlan} plan</div>
          <form className="deposit-form">
           <h1>Form</h1>
           <div className="deposit-inputs">
            <p className="d-i">Welcome, jonathan</p>

            <div className="depo">
             <p>Amount</p>
             <input type="text" name="" id="" placeholder="$50 - $10000" />
            </div>

           
            <div className="depo">
             <p>Upload a document for proof of payment</p>
             <input type="file" name="" id="" placeholder="$50 - $10000" />
            </div>

            <button>Deposit</button>
            


           </div>
          </form>
        </div>
    )
}

export default DepositMoney;