import courseImage from '../../images/maxresdefault.jpg'
import CountrySelect from './../Form/CountrySelect'

import Tab from './../Form/Tab'
import PaymentInput from './../Form/CreditCardInput'
import BankTransfer from './../Form/BankTransfer'
import PayNow from './../Form/PayNow'

import { useFormik } from 'formik'
import { checkoutValidation } from '../../Validations/CheckoutValidation'
import { toast, ToastContainer } from 'react-toastify'

const Checkout: React.FC = () => {

  // Login success message:
  const orderSubmitted = () => {
    toast('Order has been place!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address:'',
      postal:'',
      country:'',
      mobile:''
    },
    validationSchema: checkoutValidation,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      orderSubmitted();
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
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="checkoutError">{formik.errors.email}</div>
              ) : null}

              <div className='container-name'>
                <div className='firstNameContainer'>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="checkoutError2">{formik.errors.firstName}</div>
                  ) : null}
                </div>

                <div className='lastNameContainer'>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="checkoutError2">{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="text"
                id="address"
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="checkoutError">{formik.errors.address}</div>
              ) : null}

              <div className='container-postal'>
                <div className='countrySelect'>
                  <CountrySelect />
                </div>
                <div className='postalContainer'>
                  <input
                    type="text"
                    id="postal"
                    placeholder="Postal Code"
                    onChange={formik.handleChange}
                    value={formik.values.postal}
                  />
                  {formik.touched.postal && formik.errors.postal ? (
                    <div className="checkoutError2">{formik.errors.postal}</div>
                  ) : null}
                </div>
              </div>

              <input
                type="text"
                id="mobile"
                placeholder="Mobile Number"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="checkoutError">{formik.errors.mobile}</div>
              ) : null}

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

      <ToastContainer
        style={{fontSize: 13}}
      />
    </div>
  )
}

export default Checkout