import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const removeclasses = () => {
  document.body.classList.remove("bg-success")
  document.body.classList.remove("bg-light")
  document.body.classList.remove("bg-dark")
  document.body.classList.remove("bg-danger")
  document.body.classList.remove("bg-secondary")
  document.body.classList.remove("bg-primary")
}
function App() {
  const [mode, setMode] = useState("light")
  const togglemode = (cls) => {
    removeclasses()
    document.body.classList.add("bg-" + cls)
    setMode(cls)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TEXT UTILIS" mode={mode} togglemode={togglemode} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About /> } />
            <Route exact path="/" element={<TextForm heading="Enter Your Text To Analysis" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;