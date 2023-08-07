import React from 'react'
import Menubar from '../Navbar'
import Footer from '../Footer'

const Layuout = ({ children }) => {
    return (
        <>
            <Menubar />
            {children}
            <Footer />
        </>
    )
}

export default Layuout