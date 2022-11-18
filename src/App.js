import "./App.css";
import Navbar from "./components/Navbar"
import Cards from './components/Card'
import SignUp from './components/SignUp'
import SignIn from "./components/SignIn";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return <>

    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />}>
          <Route exact path="/"  element={<Navbar />} />
          <Route exact path="blogs" element={<Navbar />} />
          <Route exact path="contact" element={<Navbar />} />
          <Route exact path="*" element={<Navbar />} />
        </Route>
      </Routes>
    </Router> */}

    {/* <Navbar />
    <Cards />
    <SignUp/>
    <SignUp /> */}
    <SignIn />
  </>
}

export default App;
