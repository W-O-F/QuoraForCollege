import React from 'react'
import './Homescreen.css'
const PageFour = () => {
    return (
        <div className="foot">
            <div className="up-foot">
                <h2 className="upfoot-big">Get started with our platform now</h2>
                <h3 className="upfoot-small">
                    Lorem Ipsum and something that can look good here.<br/> Lorem Ipsum and something that can look good here.
                </h3>
                <button className="start-free btn-foot">Get Started</button>
            </div>
            <div className="social">
                <i class="fab fa-twitter social"></i>
                <i class="fab fa-facebook social"></i>
                <i class="fab fa-github social"></i>
                <i class="fab fa-instagram social"></i>
                <i class="fab fa-linkedin social"></i>
            </div>
            <div className="foot-end">
                <h2 className="foot-end-text">
                    &copy; 2021 | CollegeForQuora | WOf 
                </h2>
            </div>
        </div>
    )
}

export default PageFour
