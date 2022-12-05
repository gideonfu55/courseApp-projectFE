
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
              <img src="" alt=""/>
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
      </form>
    </div>
  )
}

export default Checkout