import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images'

const PaymentInput = () => {
  const {meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps} = usePaymentInputs();

  return (
    <section id="creditCardDetails">
      <div className='paymentInputContainer'>
        <div className='CCInputBox'>
          <div className="input-group">
            <svg {...getCardImageProps()} />
            <label>Card Number</label>
            <input {...getCardNumberProps()} />
          </div>

          <div className="multi-input">
            <div className="input-group">
              <label>Valid Till</label>
              <input {...getExpiryDateProps()} />
            </div>

            <div className="input-group">
              <label>CVC</label>
              <input {...getCVCProps()} />
            </div>
          </div>

          <small>{meta.isTouched && meta.error && <span>Error: {meta.error}</span>}</small>
        </div>
      </div>
    </section>
  );
}

export default PaymentInput