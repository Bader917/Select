import React from "react";
import img from "../image/Untitled_design_1.png";
import SelectPages from "./SelectPages";
import TablesDays from "./TablesDays";
import { Link } from "react-router-dom";

export default function MainSchedules() {
    return (
        <div className="container main-schedules">
            <div className="content">
                <div className="main-content">
                    <h4> Welcome in Techno Table </h4>
                    <p>We generate for you the Section schedules after After preparing the Lecture schedules</p>
                </div>

                <div className="sec-content">
                    <button>Section Schedules</button>
                    <img src={img} alt="img" />
                </div>
            </div>

            <div className="select-container">
                <SelectPages />
                <SelectPages />
                <SelectPages />
                <SelectPages />
            </div>

            <div className="button mt-5 ms-auto">
                <button><Link to="./TablesDays.js">Generate</Link></button>
            </div>
        </div>
    )
}