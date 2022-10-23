import './graph.css';
import Dates from '../Images/calendar-2.png'
import Table from '../Images/Funnel.png'

export default function Graph() {
  return (
    <div className="Graph">
      <div className="Graph-text">
        <h4>Internship Insights</h4>
        <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</p>
      </div>
      <div className="Graph-table">
        <div className="Table">
            <div className="Table-options">
                <button className="Options-week">This week</button>
                <button className="Options-month">This month</button>
                <button className="Options-select">
                    <img src={Dates} className="" alt=""/>
                    Select dates
                </button>
            </div>
        </div>
        <img src={Table} className="Table-image" alt=""/>
      </div>
    </div>
  );
}