import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import React from "react";
import Doner from "./components/Doner";
import Receiver from "./components/Receiver";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
          <Route exact path="/Doner" element={<Doner />} />
        </Routes>
        <Routes>
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/SignIn" element={<SignIn />} />
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
