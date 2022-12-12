const BankTransfer = () => {
  return (
    <section id="bankDetails" className="tab-content" data-theme="bankTransfer">
      <div className="paymentInputContainer">
        <div className="align-center">
          <h5>Bank Account to Transfer:</h5>
          <h5>Payee Name: StudyYou Pte Ltd</h5>
          <h5>Bank name: POSB</h5>
          <h5>Account Number: 123-4-56789</h5>
          <h5>Note: please mention in comments your Name and Course purchased.</h5>
          <input type="checkbox" id="bankTransConfirm" name="bankTransConfirm" value="" required/>
          <label htmlFor="bankTransConfirm">I confirm that the bank transfer will be made within 1hr from this purchase. I acknowledge that the order will be cancelled otherwise.</label>
        </div>
      </div>
    </section>
  )
}

export default BankTransfer