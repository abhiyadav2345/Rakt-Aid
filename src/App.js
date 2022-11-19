import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import React from "react";
import Donor from "./components/Donor";
import Receiver from "./components/Receiver";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home"

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route exact path="/Receiver" element={<Receiver />} />
        </Routes>
        <Routes>
          <Route exact path="/Donor" element={<Donor />} />
        </Routes>

        <Routes>
          <Route exact path="/Home" element={<Home />} />
        </Routes>


        <Footer />
      </Router>

      {/* <Navbar />
    <Cards />
    <SignUp/>
    <SignUp />
    <SignIn /> */}
    </>
  );
}

export default App;
