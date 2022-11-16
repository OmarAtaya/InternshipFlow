import './sideBar.css';
import radicalx from '../../../../Images/RadicallX-Black-Logo 1.png'
import dashboard from '../../../../Images/dashboard-3.png'
import apprentership from '../../../../Images/medal-star.png'
import internship from '../../../../Images/book.png'
import job from '../../../../Images/briefcase.png'
import setting from '../../../../Images/setting-2.png'
import account from '../../../../Images/Rectangle 18895.png'

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Sidebar-menu" alt="">
            <img src={radicalx} className="Sidebar-logo" alt=""/>
            <div className="Sidebar-dashboard">
                <img src={dashboard} className="Sidebar-icon" alt=""/>
                <p>Dashboard</p>
            </div>
            <div className="Sidebar-apprenterships">
                <img src={apprentership} className="Sidebar-icon" alt=""/>
                <p>Apprenterships</p>
            </div>
            <div className="Sidebar-internships">
                <img src={internship} className="Sidebar-icon" alt=""/>
                <p>Internships</p>
            </div>
            <div className="Sidebar-jobs">
                <img src={job} className="Sidebar-icon" alt=""/>
                <p>Jobs</p>
            </div>
            <div className="Sidebar-settings">
                <img src={setting} className="Sidebar-icon" alt=""/>
                <p>Settings</p>
            </div>
      </div>
      <div className="Sidebar-account">
        <img src={account} className="Account-profile" alt=""/>
        <p>Adam Scott</p>
      </div>
    </div>
  );
}