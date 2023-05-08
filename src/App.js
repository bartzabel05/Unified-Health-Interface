// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Footer from './components/Footer'
// import dashboard from './pages/dashboard'
// import FileUpload from "./pages/FileUpload";
// import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Register from './pages/register'
import Login from './pages/login'
import Dashboard2 from "./pages/Dashboard2";
// import FileUpload from "./pages/FileUpload";
import FileUpload from "./pages/FileUpload";
import Prescribe from "./pages/prescribe";

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        
        {/* <Route path="/user" element={<FileUpload/>}/> */}
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        {/* <Route exact path="/prescribe" element={<Prescribe account={account} provider={provider} contract={contract}/>}/> */}
        <Route exact path="/dashboard2" element={<Dashboard2/>}/>
        <Route exact path="/user" element={<FileUpload/>}/>
        <Route exact path="/prescribe" element={<Prescribe/>}/>
        </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
