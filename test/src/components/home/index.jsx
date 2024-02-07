import React from 'react'
import NavBar from '../navBar'

import './style.css'
import Body from './Body'
import Footer from './Footer'

export default function Home() {

    return (
        <div className='container'>
            <NavBar />
            <Body />
            <Footer />
        </div >
    )
}
