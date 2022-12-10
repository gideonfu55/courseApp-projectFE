import courseImage from '../images/maxresdefault.jpg'
import CountrySelect from './Form/CountrySelect'

import Tab from './Form/Tab'
import PaymentInput from './Form/PaymentInput'
import BankTransfer from './Form/BankTransfer'
import PayNow from './Form/PayNow'

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
            <div className='payModeTabs'>
              <Tab 
                title={"Payment Method"}
                tabs={[
                  { name: "Credit Card", content: <PaymentInput /> },
                  { name: "Bank Transfer", content: <BankTransfer /> },
                  { name: "PayNow", content: <PayNow />}
                ]}
              />
            </div>
          </section>
        </div>

        <button id="buySubmit">Complete Purchase</button>
      </form>
    </div>
  )
}

export default Checkout