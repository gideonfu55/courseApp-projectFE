import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images'

const PaymentInput = () => {
  const {meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps} = usePaymentInputs();

  return (
    <section id="creditCardDetails">
      <div className='paymentInputContainer'>
        <div className='align-center'>
          <div className='CCInputBox'>
            <div className="input-group">
              <svg {...getCardImageProps({ images })} />
              <label>Card Number</label>
              <input {...getCardNumberProps()} required/>
            </div>

            <div className="multi-input">
              <div className="input-group">
                <label>Valid Till</label>
                <input {...getExpiryDateProps()} required/>
              </div>

              <div className="input-group">
                <label>CVC</label>
                <input {...getCVCProps()} required/>
              </div>
            </div>

            <small>{meta.isTouched && meta.error && <span>Error: {meta.error}</span>}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentInput