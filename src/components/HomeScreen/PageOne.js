import React from 'react'
import './Homescreen.css'
import img1 from "./images/custom.png";
import img2 from "./images/community.png";
import img3 from "./images/new blog.png";

const PageOne = () => {
    return (
        <>
        <div className="pg-one-container">
            <div className="fp-text">
                <h1 className="bigtext">
                    Everything you need to start<br/> as a Collegiate!
                </h1>
                <h3 className="small-text">An ultimate tool for clg students or the<br/> newly admitted students.</h3>
            </div>
            <button className="start-free btn">Start for free</button>
        </div>
        <div className="pg-one-features">
            <div className="feature">
                <img src={img1} className="feature-img"/>
                <h3 className="feature-text">
                    Get College info
                </h3>
            </div>
            <div className="feature">
                <img src={img2} className="feature-img"/>
                <h3 className="feature-text">
                    Get latest blogs
                </h3>
            </div>
            <div className="feature">
                <img src={img3} className="feature-img"/>
                <h3 className="feature-text">
                    Get notes & Study materials
                </h3>
            </div>
        </div>
        </>
    )
}

export default PageOne
