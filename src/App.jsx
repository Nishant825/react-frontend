import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Navbar from './components/navbar/Navbar';
import Bookslist from './components/homepage/Bookslist';
import Protected from './utils/Protected';
import Cart from './components/cart/Cart';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Notfound from './components/page404/Notfound';
import Payment from './components/payment/Payment';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected><Bookslist /></Protected>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/payment" element={<Payment />} />


      </Routes>
    </Router>
  );
}

export default App;
