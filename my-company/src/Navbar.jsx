import Home from "./components/Home";
    import About from "./components/About";
    import Services from "./components/Services";
    import Contact from "./components/Contact";
    import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
    function Navbar(){
        return (
            <nav style={{backgroundColor: '#eb3f3fb9', color: 'black'}} >
      <ul style={{display: "flex", gap: '20px', justifyContent: 'space-between'}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>
    </nav>
        )
    }
    export default Navbar;