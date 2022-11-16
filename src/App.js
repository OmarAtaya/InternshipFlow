import './App.css';
import Home from './Components/Pages/Home/Home.js';
import NewIntership from './Components/Pages/NewInternship/NewInternship.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/newinternship" element={<NewIntership/>}/>
      </Routes>
    </Router>
  );
}