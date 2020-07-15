import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@material-ui/core'
import './navbar.css'

let NavBar = () => {

    return (
            <Box className="navParent" align="center">
                <ul className="navItems">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="products">PRODUCTS</Link></li>
                    <li><Link to="contact">CONTACT US</Link></li>
                    <li><Link to="about">ABOUT</Link></li>
                </ul>
            </Box>
    )
}

export default NavBar;