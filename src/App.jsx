import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Navbar from './components/navbar/Navbar';
import Bookslist from './components/homepage/Bookslist';
import Protected from './utils/Protected';
import Cart from './components/cart/Cart';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Protected><Bookslist /></Protected>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
