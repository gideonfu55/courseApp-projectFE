const PayNow = () => {
  return (
    <section id="payNowDetails" className="tab-content" data-theme="payNow">
      <div className="paymentInputContainer">
        <h5>PayNow Number to Transfer</h5>
        <h5>QR Code for Direct PayNow</h5>
        <input type="checkbox" id="payNowConfirm" name="payNowConfirm" value="" required/>
        <label htmlFor="payNowConfirm">I confirm that the PayNow will be made within 1hr from this purchase. I acknowledge that the order will be cancelled otherwise.</label>
      </div>
    </section>
  )
}

export default PayNow