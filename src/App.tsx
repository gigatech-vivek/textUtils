// import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState("light");
  const toggleDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      // document.body.style.color= 'white';
      showAlert("Successfully enabled Dark mode", 'success');
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // document.body.style.color= 'black';
      showAlert("Successfully enabled Light mode", 'success');
    }
  }

  const [alertText, newAlertText] = useState(null);
  const showAlert = (message, type) => {
    newAlertText({
      message: message,
      type: type
    })
    setTimeout(() => {
      newAlertText(null);
    }, 1500);
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleDarkMode={toggleDark} />
      <Alert alertText={alertText} />


      <Routes>
        <Route exact path='/' element={<Home mode={mode}/>} />
        <Route exact path='/magic' element={<TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About mode={mode} />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
