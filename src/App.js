import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<About/>} path="/about" />
            </Routes>
        </Router>
    );
}

export default App;
