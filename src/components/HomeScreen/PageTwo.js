import React from 'react'
import './Homescreen.css'
import img1 from './images/marketing-manager.png'
const PageTwo = () => {
    return (
        <div className="page-two-container">
            <div className="left-front">
             <h3 className="why-need1">
                 Why you need it?
             </h3>
             <h2 className="answer-to-why">
                 High-end security with high 
end design and responsive accross 
all platforms.
             </h2>
             <h3 className="why-need2">
                 Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.Lorem Ipsum and something that can look good here. Lorem Ipsum and something that can look good here.
             </h3></div>
             <div className="right-front">
                 <img src={img1} alt="" className="pg-two-img"/>
             </div>
        </div>
    )
}

export default PageTwo
