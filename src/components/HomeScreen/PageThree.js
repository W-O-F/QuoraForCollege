import React from 'react'
import './Homescreen.css'
import img1 from './images/ss3.png'
import img2 from './images/hakon-helberg-99985-unsplash.jpg'
const PageThree = () => {
    return (
        <>
        <div className="pg-3-container-up">
            <div className="midleft">
                <h2 className="midhead">
                  Real time updates and performance demographics
                </h2>
                <h3 className="midfoot">
                  I don't know what to type here so let me fill some random text. Lorem ipsum is hard to consume and I use it as a last resort. So, I'll fill random text please and you don't even have to read it.
                </h3>
            </div>
            <div className="midright">
                <img src={img1} alt="" className="img-up" />
            </div>
        </div>
        <div className="pg-3-container-down">
            <div className="midright">
                <img src={img2} alt="" className="img-down" />
            </div>
            <div className="midleft">
                <h2 className="midhead">
                  Lorem Webpage now got the next level
                </h2>
                <h3 className="midfoot">
                  I don't know what to type here so let me fill some random text. Lorem ipsum is hard to consume and I use it as a last resort. So, I'll fill random text please and you don't even have to read it.
                </h3>
                <button className="visit-clg-page">Visit Clg page now</button>
            </div>
            
        </div>
        </>
    )
}

export default PageThree
