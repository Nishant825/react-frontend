import React, { useEffect, useState } from 'react'
import Books from './Books'
import './Bookslist.css'
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom'



export default function Bookslist() {
  const [books, setbooks] = useState([])
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null);
  const [isAuth, setAuth] = useState(localStorage.getItem('user'));

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth == null) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000');
        const data = await response.json();
        setLoading(true)
        setbooks(data.books);
      } catch (error) {
        console.log(error, '00');
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  if (loading) {
    return (
      <div className='loader-container'>
        <TailSpin height={200} width={200} />;
      </div>)
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Books books={books} />
    </>
  )
}
