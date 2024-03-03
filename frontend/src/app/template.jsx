'use client'
import Navbar from '@/Components/Navbar'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventHandling from './eventhandling/page'

const template = ({ children }) => {
    useEffect(() => {
     require('bootstrap/dist/js/bootstrap.min.js');
    }, [])
    
    return (
        <div>
            {/* <h1>Hello ji</h1> */}

            <Navbar/>
            <EventHandling/>
            {/* {children} */}
        </div>
    )
}

export default template
