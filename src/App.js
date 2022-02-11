import { BrowserRouter, Route, Routes } from "react-router-dom";

// my moduls 
import "./index.css"
import { Home } from "./pages/home";
import { ContactMe } from "./pages/contactMe";
import { AboutMe } from "./pages/aboutMe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
