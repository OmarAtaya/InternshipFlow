import './Home.css';
import Graph from './Graph/graph.js';
import Internships from './Internships/internships.js';
import Sidebar from './SideBar/sideBar.js';
import Image from '../../../Images/add-square.png';
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-content">
        <div className="Home-title">
            <h1 className="title">Internships</h1>
            <Link to="/newinternship" className='Link'>
                <button className="Home-button">
                    <img src={Image} className="Button-image" alt=""/>
                    <p>Create New Internship</p>
                </button>
            </Link>
        </div>
        <Graph/>
        <Internships/>
      </div>
      <Sidebar/>
    </div>
  );
}