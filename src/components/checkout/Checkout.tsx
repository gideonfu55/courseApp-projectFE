import courseImage from '../../images/maxresdefault.jpg'
import CountrySelect from '../Form/CountrySelect'

import Tab from '../Form/Tab'
import PaymentInput from '../Form/CreditCardInput'
import BankTransfer from '../Form/BankTransfer'
import PayNow from '../Form/PayNow'

import { useFormik } from 'formik'
import { checkoutValidation } from '../../Validations/CheckoutValidation'
import { toast } from 'react-toastify'

const Checkout: React.FC = () => {
    // const handleSubmit = async (event: React.FormEvent) => {
    //   event.preventDefault()
    // }

    // Login success message:
    const orderSubmit = () => {
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
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            postal: '',
            country: '',
            mobile: '',
        },
        // validationSchema: {checkoutValidation},
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        },
    })

    return (
        <div className="checkout">
            <h1 id="checkoutHeader">Checkout</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="checkoutTop">
                    <div className="container-left">
                        <section className="contactDetails">
                            <h3 id="contactInfoHeader">Contact Information</h3>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                // required
                            />
                            <div className="container-name">
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    // required
                                />
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    // required
                                />
                            </div>
                            <input
                                type="text"
                                id="address"
                                placeholder="Address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                // required
                            />
                            <div className="container-postal">
                                <div className="countrySelect">
                                    <CountrySelect />
                                </div>
                                <input
                                    type="text"
                                    id="postal"
                                    placeholder="Postal Code"
                                    onChange={formik.handleChange}
                                    value={formik.values.postal}
                                    // required
                                />
                            </div>
                            <input
                                type="text"
                                id="mobile"
                                placeholder="Mobile Number"
                                onChange={formik.handleChange}
                                value={formik.values.mobile}
                                // required
                            />
                        </section>
                    </div>

                    <section className="orderSummary">
                        <div className="container-right">
                            <h4>Order Summary</h4>
                            <img
                                className="image_placeholder"
                                src={courseImage}
                                alt=""
                            />
                            <h5>Course Name</h5>
                            <div className="discount">
                                <input
                                    id="discountCode"
                                    type="text"
                                    placeholder="Discount Code"
                                />
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

                <div className="checkoutBtm">
                    <section className="payment">
                        <div className="payModeTabs">
                            <Tab
                                title={'Payment Method'}
                                tabs={[
                                    {
                                        name: 'Credit Card',
                                        content: <PaymentInput />,
                                    },
                                    {
                                        name: 'Bank Transfer',
                                        content: <BankTransfer />,
                                    },
                                    { name: 'PayNow', content: <PayNow /> },
                                ]}
                            />
                        </div>
                    </section>
                </div>

                <button type="submit" id="buySubmit">
                    Complete Purchase
                </button>
            </form>
        </div>
    )
}

export default Checkout
