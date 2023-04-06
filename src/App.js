import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Signin from './auth/signIn'
import Signup from './auth/signup';
import Dashboard from "./screens/Dashboard/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/Signup" element={< Signup />}/>
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;