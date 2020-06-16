import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt,faSignOutAlt,faEdit } from '@fortawesome/free-solid-svg-icons'
import classes from '../Navbar/Navbar.module.css'

export class Navbar extends Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <div className={classes.NavbarBrand}><p><FontAwesomeIcon icon={faEdit}/> ToDo</p></div>
                <div className={classes.NavbarLinks}>
                    <a href="https://vtop.vit.ac.in/vtop/initialProcess" className={classes.NavbarLink}><FontAwesomeIcon icon={faSignInAlt} size='1.5x'/> Login</a>
                    <a href="https://vtop.vit.ac.in/vtop/initialProcess" className={classes.NavbarLink}><FontAwesomeIcon icon={faSignOutAlt} size='1.5x'/>Signout</a>
                </div>
            </div>
        )
    }
}

export default Navbar