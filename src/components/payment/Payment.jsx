import React, { useState } from 'react'
import './Payment.css'


export default function Payment() {
    const [isDivVisible, setDivVisible] = useState(false);
    const handleRadioChange = () => {
        if (isDivVisible) {
            setDivVisible(false);
        } else {
            setDivVisible(true)
        }
    };
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,300"
                rel="stylesheet"
                type="text/css"
            />
            <link
                rel="stylesheet"
                href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            />
            <div className="container">
                <div id="Checkout" className="inline">
                    <h1>Pay Invoice</h1>
                    {/* <div className="card-row">
                        <span className="visa" />
                        <span className="mastercard" />
                        <span className="amex" />
                        <span className="discover" />
                    </div> */}
                    <form>
                        <div className="form-group">
                            <label htmlFor="PaymentAmount">Payment amount</label>
                            <div className="amount-placeholder">
                                <span>$</span>
                                <span>500.00</span>
                            </div>
                        </div>
                        <div class="radio-container">
                            <input type="radio" id="upi" name="options" value="option1" />
                            <label for="upi">UPI</label>
                        </div>

                        <div class="radio-container">
                            <input type="radio" id="cod" name="options" value="option2" />
                            <label for="cod">Cash on delievery</label>
                        </div>

                        <div class="radio-container">
                            <input type="radio" id="debit" name="options" value="option2" />
                            <label for="debit" onClick={handleRadioChange}>Debit Card</label>
                            <div>
                                <span className="visa" />
                                <span className="mastercard" />
                            </div>

                        </div>
                        {isDivVisible &&
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
                                        <div className="amex-cvc-preview" />
                                        <div className="visa-mc-dis-cvc-preview" />
                                    </div>
                                </div>
                            </>
                        }


                        <button
                            id="PayButton"
                            className="btn btn-block btn-success submit-button"
                            type="submit"
                        >
                            <span className="submit-button-lock" />
                            <span className="align-middle">Pay $500.00</span>
                        </button>
                    </form>
                </div>
            </div>
        </>


    )
}
