import './App.css';
import Graph from './Components/graph';
import Internships from './Components/internships';
import Sidebar from './Components/sideBar';
import Image from './Images/add-square.png';

export default function App() {
  return (
    <div className="App">
      <div className="App-content">
        <div className="App-title">
          <h1 className="title">Internships</h1>
          <button className="App-button">
            <img src={Image} className="Button-image" alt=""/>
            <p>Create New Internship</p>
          </button>
        </div>
        <Graph/>
        <Internships/>
      </div>
      <Sidebar/>
      
    </div>
  );
}