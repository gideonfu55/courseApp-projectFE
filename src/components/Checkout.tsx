import courseImage from '../images/maxresdefault.jpg'
import CountrySelect from './Form/CountrySelect'

import Tab from './Form/Tab'
import PaymentInput from './Form/CreditCardInput'
import BankTransfer from './Form/BankTransfer'
import PayNow from './Form/PayNow'

import { useFormik } from 'formik'
import { checkoutValidation } from '../Validations/CheckoutValidation'

const Checkout = () => {

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault()
  // }

  const formik = useFormik({
    initialValues: {
      contactFirstName: '',
      contactLastName: '',
      contactEmail: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  });

  return (
    <div className='checkout'>
      <h1 id="checkoutHeader">Checkout</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="checkoutTop">
          <div className='container-left'>
            <section className="contactDetails">
              <h3 id="contactInfoHeader">Contact Information</h3>
              <input
                type="text"
                id="contactEmail"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.contactEmail}
                required
              />
              <div className='container-name'>
                <input
                  type="text"
                  id="contactFirstName"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.contactFirstName}
                  required
                />
                <input
                  type="text"
                  id="contactLastName"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.contactLastName}
                  required
                />
              </div>
              <input
                type="text"
                id="contactAddress"
                placeholder="Address"
                required
              />
              <div className='container-postal'>
                <div className='countrySelect'>
                  <CountrySelect />
                </div>
                <input
                  type="text"
                  id="contactPostal"
                  placeholder="Postal Code"
                  required
                />
              </div>
              <input
                type="text"
                id="contactNum"
                placeholder="Mobile Number"
                required
              />
            </section>
          </div>

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

        <button type="submit" id="buySubmit">Complete Purchase</button>
      </form>
    </div>
  )
}

export default Checkout