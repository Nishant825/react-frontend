import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Navbar from './components/navbar/Navbar';
import Bookslist from './components/homepage/Bookslist';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookslist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
