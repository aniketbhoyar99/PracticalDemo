import React from 'react'

const col2 = [
    "Link", "About", "Contact", "Integration", "Feature", "Blog", "Quick Quate"
]

const col3 = [
    "Resources", "Privarcy Policy", "Terms & Servies", "FAQ"
]

const col4 = [
    "Actions", "Signup", "Login", "Careers"
]

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="col-1">
                    <div>
                        <p>Say goodbye to shipping woes and say hello to the Ship Pros.</p>
                    </div>
                </div>
                <div className="col-2 links">
                    {
                        col2?.map((item, ind) => <div key={ind}>{item}</div>)
                    }
                </div>
                <div className="col-3 links">
                    {
                        col3?.map((item, ind) => <div key={ind}>{item}</div>)
                    }
                </div>
                <div className="col-4 links">
                    {
                        col4?.map((item, ind) => <div key={ind}>{item}</div>)
                    }
                </div>
                <div className="col-5">
                    <div className="facebook">
                        <p>JOIN OUR <br /> FACEBOOK <br />COMMUNITY</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='main-footer'>
                @ 2024 Ship Cause
            </div>
        </>
    )
}
