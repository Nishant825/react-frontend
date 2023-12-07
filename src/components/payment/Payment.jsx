import React, { useState } from 'react'
import './Payment.css'

export default function Payment() {
    const [isShown, setIsShown] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <div className="container">
            <div id="Checkout" className="inline">
                <h1>Pay Invoice</h1>
                <div className="card-row">
                    <span className="visa" />
                    <span className="mastercard" />
                    <span className="amex" />
                    <span className="discover" />
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="PaymentAmount">Payment amount</label>
                        <div className="amount-placeholder">
                            <span>$</span>
                            <span>500.00</span>
                        </div>
                    </div>

                    <div id='upi-div'>
                        <input type="radio" id='upi' name="pay" className="payment" />
                        <label htmlFor="upi" onClick={() => handlePaymentMethodChange('upi')}>UPI</label>
                    </div>

                    <div id='upi-div'>
                        <input type="radio" id='cod' name="pay" className="payment" />
                        <label htmlFor="cod" onClick={() => handlePaymentMethodChange('cod')}>COD</label>
                    </div>
                    <div id='upi-div'>
                        <input type="radio" id='card' name="pay" className="payment" />
                        <label htmlFor="card" onClick={() => { handlePaymentMethodChange('debit'); setIsShown(true); }}>Debit Card</label>
                    </div>
                    {isShown &&
                        <>
                            <div className="form-group">
                                <label or="NameOnCard">Name on card</label>
                                <input
                                    id="NameOnCard"
                                    className="form-control"
                                    type="text"
                                    maxLength={255}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="CreditCardNumber">Card number</label>
                                <input
                                    id="CreditCardNumber"
                                    className="null card-image form-control"
                                    type="text"
                                />
                            </div>
                            <div className="expiry-date-group form-group">
                                <label htmlFor="ExpiryDate">Expiry date</label>
                                <input
                                    id="ExpiryDate"
                                    className="form-control"
                                    type="text"
                                    placeholder="MM / YY"
                                    maxLength={7}
                                />
                            </div>
                            <div className="security-code-group form-group">
                                <label htmlFor="SecurityCode">Security code</label>
                                <div className="input-container">
                                    <input id="SecurityCode" className="form-control" type="text" />
                                    <i id="cvc" className="fa fa-question-circle" />
                                </div>
                                <div className="cvc-preview-container two-card hide">
                                </div>
                            </div>

                        </>
                    }

                    {paymentMethod === 'upi' || paymentMethod === 'debit' ? (
                        <button
                            id="PayButton"
                            className="btn btn-block btn-success submit-button"
                            type="submit"
                        >
                            <span className="submit-button-lock" />
                            <span className="align-middle">Pay $500.00</span>
                        </button>
                    ) : (
                        <button
                            id="PayButton"
                            className="btn btn-block btn-success submit-button"
                            type="submit"
                        >
                            <span className="submit-button-lock" />
                            <span className="align-middle">Proceed</span>
                        </button>
                    )}

                </form>
            </div>
        </div>


    )
}
