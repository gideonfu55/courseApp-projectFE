import courseImage from '../images/maxresdefault.jpg'
import CountrySelect from './Form/CountrySelect'
import PaymentInput from './Form/PaymentInput'

const Checkout = () => {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <div className='checkout'>
      <h1 id="checkoutHeader">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkoutTop">
          <section className="contactDetails">
            <h3>Contact Information</h3>
            <input
              type="text"
              id="contactEmail"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="contactFirstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="contactLastName"
              placeholder="Last Name"
              required
            />
            <input
              type="text"
              id="contactAddress"
              placeholder="Address"
              required
            />
            <input
              type="text"
              id="contactPostal"
              placeholder="Postal Code"
              required
            />
            <div className='countrySelect'>
              <CountrySelect />
            </div>
            <input
              type="text"
              id="contactNum"
              placeholder="Contact Number"
              required
            />
          </section>

          <section className="orderSummary">
            <div className="container-right">
              <h4>Order Summary</h4>
              <img className="image_placeholder" src={courseImage} alt=""/>
              <h5>Course Name</h5>
              <div className="discount">
                <input id="discountCode" type="text" placeholder="Discount Code"/>
                <button>Apply</button>
              </div>
              <section className="priceCal">
                <h5>Subtotal</h5>
                <h5>Discount Code</h5>
                <h5>Discount</h5>
                <h5>Total</h5>
              </section>
            </div>
          </section>
        </div>

        <div className='checkoutBtm'>
          <section className='payment'>
            <h3>Payment Method</h3>
            <div className='payModeTabs'>
              <button className="tab is-selected" data-theme="creditCard">
                Credit Card
              </button>
              <button className="tab" data-theme="bankTransfer">
                Bank Transfer
              </button>
              <button className="tab" data-theme="payNow">
                PayNow
              </button>
            </div>
          </section>
        </div>

        <div className="tab-contents">
          <section id="creditCardDetails" className="tab-content is-selected" data-theme="creditCard">
            <div className='creditTab-container'>
              <PaymentInput />
            </div>
          </section>

          <section id="bankDetails" className="tab-content" data-theme="bankTransfer">
            <h5>Bank Account to Transfer</h5>
            <h5>POSB</h5>
            <h5>1234-567-8</h5>
            <h5>Please mention in comments your Name and Course purchased.</h5>
          </section>

          <section id="payNowDetails" className="tab-content" data-theme="payNow">
            <h5>PayNow Number to Transfer</h5>
          </section>
        </div>

        <button>Complete Purchase</button>
      </form>
    </div>
  )
}

export default Checkout