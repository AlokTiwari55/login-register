import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
      <Router>
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        </Routes>
        
    </Router>
    {/* <Footer /> */}
    </div>
  );
}

export default App;