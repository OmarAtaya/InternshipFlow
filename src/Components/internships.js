import './internships.css';
import Graph from "../Images/Qualified Candidates.png"
import Profile from "../Images/profile-2user.png"
import Chart from "../Images/chart.png"
import More from "../Images/more-2.png"
import Filter from "../Images/arrow-square-down.png"

export default function Internships() {
  return (
    <div className="Internships">
      <table>
        <tr className="header">
            <th id="Table-title">
                Internship title
                <img src={Filter} className="Filter-button" alt=""/>
            </th>
            <th id="Table-period">
                Completion Period
                <img src={Filter} className="Filter-button" alt=""/>
            </th>
            <th id="Table-enrolled">
                Total Enrolled
                <img src={Filter} className="Filter-button" alt=""/>
            </th>
            <th id="Table-qualified">
                Qualified Candidates
                <img src={Filter} className="Filter-button" alt=""/>
            </th>
            <th>

            </th>
        </tr>
        <tr>
            <td>
                <h3>Product Design GVI</h3>
                <p className="Title-text">Amet minim mollit non deserunt</p>
            </td>
            <td>
                <h3>120 days</h3>
                <p className="Period-text">(created on 10/12/2021)</p>
            </td>
            <td>
                <div className="Enrolled">20,000</div>
            </td>
            <td>
                <img src={Graph} className="Qualified-graph" alt=""/>
            </td>
            <td className="Icons">
                <img src={Chart} className="Table-icon" alt=""/>
                <img src={Profile} className="Table-icon" alt=""/>
                <img src={More} className="Table-icon" alt=""/>
            </td>
        </tr>
        <tr>
            <td>
                <h3>Product Design GVI</h3>
                <p className="Title-text">Amet minim mollit non deserunt</p>
            </td>
            <td>
                <h3>120 days</h3>
                <p className="Period-text">(created on 10/12/2021)</p>
            </td>
            <td>
                <div className="Enrolled">20,000</div>
            </td>
            <td>
                <img src={Graph} className="Qualified-graph" alt=""/>
            </td>
            <td className="Icons">
            <img src={Chart} className="Table-icon" alt=""/>
                <img src={Profile} className="Table-icon" alt=""/>
                <img src={More} className="Table-icon" alt=""/>
            </td>
        </tr>
        <tr>
            <td>
                <h3>Product Design GVI</h3>
                <p className="Title-text">Amet minim mollit non deserunt</p>
            </td>
            <td>
                <h3>120 days</h3>
                <p className="Period-text">(created on 10/12/2021)</p>
            </td>
            <td>
                <div className="Enrolled">20,000</div>
            </td>
            <td>
                <img src={Graph} className="Qualified-graph" alt=""/>
            </td>
            <td className="Icons">
            <img src={Chart} className="Table-icon" alt=""/>
                <img src={Profile} className="Table-icon" alt=""/>
                <img src={More} className="Table-icon" alt=""/>
            </td>
        </tr>
      </table>
    </div>
  );
}