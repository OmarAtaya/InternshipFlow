import './NewInternship.css';
import LongArrLeft from '../../../Images/arrow-left.png';
import LongArrRight from '../../../Images/long-arrow-right.png';
import Untick from '../../../Images/untick-circle.png';
import UntickGrey from '../../../Images/untick-circle-grey.png';
import Menu from '../../../Images/menu.png';
import Tick from '../../../Images/tick-circle.png';
import Add from '../../../Images/add-square-purple.png';
import Inactive from '../../../Images/arrow-right-grey.png'
import Active from '../../../Images/arrow-right.png'
import Category from './Category/Category';
import Description from './Description/Description';
import Location from './Location/Location';
import {useState} from 'react';

export default function NewInternship() {
    const [currOption, setCurrOption] = useState()
    const [options, setOptions] = useState([
        {title: "Category", isActive: false, isDone: false, link: <Category />},
        {title: "Description", isActive: false, isDone: false, link: <Description />},
        {title: "Location", isActive: false, isDone: false, link: <Location />},
        {title: "Benefits", isActive: false, isDone: false, link: <Category />},
        {title: "Intro Video", isActive: false, isDone: false, link: <Category />},
        {title: "Mentro Details", isActive: false, isDone: false, link: <Category />},
        {title: "Recommended Roles", isActive: false, isDone: false, link: <Category />},
        {title: "Web Links & Resources", isActive: false, isDone: false, link: <Category />},
    ])

    const changeOption = (prop) => {
        setCurrOption(prop.link);
        setOptions(
            options.map((option) => 
                (prop.title === option.title 
                ? {...option, isActive: true }
                : {...option,isActive: false})
            )
        );
    }

  return (
    <div className="NewInternship">
        <header className="New-header">
            <button className="Header-back">
                <img src={LongArrLeft} id="BackImg" alt=""/>
                <h4 id="Back">Back</h4>
            </button>
            <h2 className="Header-title">Add New Internship</h2>
            <button className="Header-next">
                <h4 id="Next">Continue to Next Step</h4>
                <img src={LongArrRight} id="NextImg" alt=""/>
            </button>
        </header>
        <div className="Progress">
            <div id="Description">
                <img src={Untick} className="ProgressImg" alt=""/>
                <h4>Internship Description</h4>
            </div>
            <div id="Guide">
                <img src={UntickGrey} className="ProgressImg" alt=""/>
                <h4>Internship Guide</h4>
            </div>
            <div id="Survey">
                <img src={UntickGrey} className="ProgressImg" alt=""/>
                <h4>Surveys</h4>
            </div>
            <div id="Settings">
                <img src={UntickGrey} className="ProgressImg" alt=""/>
                <h4>Settings</h4>
            </div>
        </div>
        <div className="OptionContent">
            <div className="Options">
                {options.map((option, index) => (
                    <div className="Option" key={index}>
                        <img src={Menu} className="OptionIcon" alt=""/>
                        <button className={option.isActive ? "OptionActive" : "OptionButtons"} onClick={() => {changeOption(option)}}>
                            <div className="ButtonContent">
                                {option.title}
                                {option.isDone ? <img src={Tick} className="OptionIcon" alt=""/> : ""}
                            </div>
                            {option.isActive ? <img src={Active} className="OptionIcon" alt=""/> : <img src={Inactive} className="OptionIcon" alt=""/>}
                        </button>
                    </div>
                ))}
                <button className="AddButton">
                    <img src={Add} className="OptionIcon" alt=""/>
                    Add More
                </button>
            </div>
            <div className="CurrentOption">
                {currOption}
            </div>
        </div>
    </div>
  );
}