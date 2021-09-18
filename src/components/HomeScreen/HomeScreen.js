import "./Homescreen.css";
import $ from "jquery";
import "./jquery.pagepiling.js";
import "./jquery.pagepiling.css";
import PageOne from "./PageOne";
import logo from './images/vlomger-logo.svg'
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom"

$(document).ready(function () {
    $("#pagepiling").pagepiling({
        menu: null,
        direction: "vertical",
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: "swing",
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            textColor: "#000",
            bulletsColor: "#000",
            position: "right",
            tooltips: ["section1", "section2", "section3", "section4"]
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: ".section",
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { }
    });
});

export default function HomeScreen() {
    return (
        <>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" srcset="" className="logo-img"/>
            </div>
            <div className="start-btn-div">
                <Link to="/login"><button className="start-btn login-btn-home">Login</button></Link>
                <Link to="/signup"><button className="start-btn btn">Create Account</button></Link>
            </div>
        </div>
        <div className="Homescreen">
            <div id="pagepiling">
                <div class="section divone"><PageOne/></div>
                <div class="section divtwo"><PageTwo/></div>
                <div class="section divthree"><PageThree/></div>
                <div class="section divfour"><PageFour/></div>
            </div>
        </div></>
    );
}
