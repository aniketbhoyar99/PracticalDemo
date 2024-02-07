import React from 'react'

import Left from '../../assets/Doc Image.jpg'
import bodyImg from '../../assets/body-2-img.jpg'

const tabs = ["Ship Pros", "Lower Rates", "E-Commmerse NetWork", "Easy Connection"]
export default function Body() {
    return (
        <>
            <div className="body">
                <div className="tabs">
                    {
                        tabs?.map((item, ind) => <div className='tabs-item' key={ind}>{item}</div>)
                    }
                </div>
                <div className="content">
                    <div className="left"><img src={Left} alt='image' /></div>
                    <div className="right">
                        <div className="heading">
                            Receive Support from Ship Cause Pros
                        </div>
                        <div className="decription">
                            With our concierge shipping services, you don't have to be a specialist in shipping, your assigned shipping liaison becomes an extension of your team. You will be assigned a dedicated concierge service representative to assist you with any questions or concerns you or your customers may have throughout the entirety of the shipping process.
                            <br />
                            <br />
                            Your liaison can assist with any claims, supply orders, rerouting of packages and last-minute address changes.
                        </div>
                        <div className="visit">
                            Learn more about the benefits of a live liaison
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-2">
                <img src={bodyImg} alt='backgroud' width="100%" />
                <div className="body-2-content">
                    <div className="body-2-heading">
                        Next Day Shipping is
                        <br />
                        out "Sweet Spot"
                    </div>
                    <div className="getting-started">
                        <button className='getting-started-btn'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
