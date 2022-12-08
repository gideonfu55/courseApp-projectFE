import courseImage from '../images/maxresdefault.jpg'
import CountrySelect from './Form/CountrySelect'

const Checkout = () => {

  return (
    <div>
      <h1 id="checkoutHeader">Checkout</h1>
      <form>
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
              <h5>Order Summary</h5>
              <img className="image_placeholder" src={courseImage} alt=""/>
              <h6>Course Name</h6>
              <div className="discount">
                <input id="discountCode" type="text" placeholder="Discount Code"/>
                <button>Apply</button>
              </div>
              <section className="priceCal">
                <h6>Subtotal</h6>
                <h6>Discount Code</h6>
                <h6>Discount</h6>
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
            <h6>Card Number</h6>
            <input type='text'/>
            <h6>Expiration</h6>
            <input type='text'/>
          </section>

          <section id="bankDetails" className="tab-content" data-theme="bankTransfer">
            <h6>Bank Account to Transfer</h6>
            <h6>POSB</h6>
            <h6>1234-567-8</h6>
            <h6>Please mention in comments your Name and Course purchased.</h6>
          </section>

          <section id="payNowDetails" className="tab-content" data-theme="payNow">
            <h6>PayNow Number to Transfer</h6>
          </section>

        </div>
      </form>
    </div>
  )
}

export default Checkout