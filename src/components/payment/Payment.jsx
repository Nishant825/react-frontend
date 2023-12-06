import React from 'react'
import './Payment.css'

export default function Payment() {
    return (
        <div id='parent-container'>
            <div id='form-container'>
                <form action="" id='payment-form'>
                    <div id='payment-head'>
                        <h2>Payment</h2>
                    </div>
                    <div id='upi-div'>
                        <input type="radio" id='upi' name="pay" className="payment" />
                        <label htmlFor="upi">UPI</label>
                    </div>
                    <div id='upi-div'>
                        <input type="radio" id='cod' name="pay" className="payment" />
                        <label htmlFor="cod">COD</label>
                    </div>
                    <div id='upi-div'>
                        <input type="radio" id='card' name="pay" className="payment" />
                        <label htmlFor="card">Debit Card</label>
                    </div>
                    <>
                        <div className='main-card'>

                            <div className='card-container'>
                                <label htmlFor="cname">Name on Card</label>
                                <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                <label htmlFor="ccnum">Credit card number</label>
                                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                <label htmlFor="expmonth">Exp Month</label>
                                <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                            </div>

                            <div className="card-container">
                                <label htmlFor="expyear">Exp Year</label>
                                <input type="text" id="expyear" name="expyear" placeholder={2018} />
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder={352} />
                            </div>

                        </div>

                    </>


                </form>
            </div>

        </div>

    )
}
