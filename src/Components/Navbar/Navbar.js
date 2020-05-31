import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt,faSignOutAlt,faEdit } from '@fortawesome/free-solid-svg-icons'
import '../Navbar/Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-Brand"><p><FontAwesomeIcon icon={faEdit}/> ToDo</p></div>
                <div className="Navbar-Links">
                    <a href="#" className="Navbar-Link"><FontAwesomeIcon icon={faSignInAlt} size='1.5x'/> Login</a>
                    <a href="#" className="Navbar-Link"><FontAwesomeIcon icon={faSignOutAlt} size='1.5x'/>Signout</a>
                </div>
            </div>
        )
    }
}

export default Navbar
