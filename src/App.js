import "./App.css";
import Navbar from './components/navbar/Navbar';
import Home from "../src/screens/home/Home";
import Details from "../src/screens/details/Details";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        div className = "cont" >

        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/details"
        element = { < Details / > }
        /> < /
        Routes > < /
        div > { " " } <
        /div> < /
        Router >
    );
}

export default App;