import React from 'react'
import { RotatingLines } from "react-loader-spinner";
import { useCartContext } from '../../context/CartProvider';


export default function Books({ books }) {
    const BASE_URL = "http://127.0.0.1:8000"
    const { addToCart } = useCartContext();
    return (
        <div id="large-th">
            <div className="home-container">
                {books.map((book, index) => (
                    <div className="book" key={index}>
                        <div className="cover">
                            {book.cover_img ? (
                                <img src={BASE_URL + book.cover_img} alt="Book Cover" loading="lazy" />
                            ) : (
                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}
                                />
                            )}
                        </div>
                        <div className="description">
                            <span className="title">{book.title}</span><br />
                            <span className="author">{book.author.first_name} {book.author.last_name}</span>
                        </div>
                        <div className='assign'>
                            <input type="button" value="Add to Cart" onClick={addToCart} className='assign-btn' />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
