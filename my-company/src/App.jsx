   import Home from "./components/Home";
    import About from "./components/About";
    import Services from "./components/Services";
    import Contact from "./components/Contact";
    import {BrowserRouter, Routes, Route} from "react-router-dom"
    import Navbar from "./Navbar";

    function App (){

        
 
    return (
        <>
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/About" element = {<About/>}></Route>
        <Route path = "/Contact" element = {<Contact/>}></Route>
        <Route path = "/Services" element = {<Services/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
}
export default App;