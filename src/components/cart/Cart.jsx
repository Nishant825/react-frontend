import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useCartContext } from '../../context/CartProvider';
import { useNavigate } from 'react-router-dom';



export default function Cart() {
    const { cartItems, cartCount } = useCartContext();
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        let newTotalPrice = cartItems.reduce((total, item) => total + item.price * quantity, 0);
        if (newTotalPrice > 0) {
            setTotalPrice(newTotalPrice + 50);

        }
    }, [cartItems, quantity]);

    const handleCheckout = () => {
        navigate('/payment')
    }

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{cartCount} items</div>
                        </div>
                    </div>
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div className="row border-top border-bottom" key={index}>
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src={"http://127.0.0.1:8000" + item.cover_img} alt={item.itemName} /></div>
                                    <div className="col">
                                        <div className="row text-muted">{item.title}</div>
                                        <div className="row">{item.author.first_name}</div>
                                    </div>
                                    <div className="col">
                                        <a href="#" onClick={() => { setQuantity(quantity - 1) }} className='quantity'>-</a><a href="#" className="border">{quantity}</a><a onClick={() => { setQuantity(quantity + 1) }} href="#" className='quantity'>+</a>
                                    </div>
                                    <div className="col">₹ {item.price} <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h2 id='cart-status'>Cart is empty</h2>
                    )}

                </div>

                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col" style={{ paddingLeft: 0 }}>{cartCount}</div>
                        <div className="col text-right">₹ {totalPrice}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- ₹50.00</option></select>
                        <p>ADDRESS</p>
                        <input id="code" placeholder="Enter your code" />
                    </form>
                    <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">₹ {totalPrice}</div>
                    </div>
                    <button onClick={handleCheckout} className="btn">CHECKOUT</button>
                </div>
            </div>
        </div >
    );
};