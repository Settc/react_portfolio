import Header from "./components/Header/Header.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/main.js";
import Work from "./pages/work.js";
import Play from "./pages/play.js";
import Contact from "./pages/contact.js";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>        
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path='/work' element={<Work />} />            
          <Route path='/play' element={<Play />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
