import { usePaymentInputs, PaymentInputsContainer } from 'react-payment-inputs';
import images from 'react-payment-inputs/images'

const PaymentInput = () => {
  const {meta, getCardImageProps, getCardNumberProps, getExpiryDateProps, getCVCProps} = usePaymentInputs();

  return (
    <div className='CCInputBox'>
      <div className="input-group">
        <svg {...getCardImageProps({ images })} />
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
  );
}

export default PaymentInput