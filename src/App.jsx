import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import TopBar from "./components/TopBar";

const App = () => {
  return ( 
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TopBar />
      <Routes>
        <Route exact path="/example" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
