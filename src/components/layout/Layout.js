import { NavLink } from "react-router-dom";
import './layout.css';
import logoo from './logoo.png';

import { slideToggle } from "../slideToggle/index.js"
import { useRef } from "react";

const Layout = ({children}) => {

    const dropdowncaret = useRef(null);


    return (
        <div className="layout">
            <div className="navbar">
                <div className="logo">
                    <img src={logoo} alt='logo' width='100px' height='50px'/>
                </div>
                <div className="navlinks">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact'>Contacts</NavLink>
                </div>
                <div className="others">
                    <button className="bttn">Let's talk </button> 
                    <div className='dropdowncaret' onClick={ () => slideToggle(dropdowncaret.current)}>
                        <span style={ { fontSize: "20px", paddingBottom: "0px", marginLeft: "20px" } }><span className="drpd">menu</span></span>
                        <div ref={dropdowncaret} className="target-div thedropdown" style={{ display: "none"}}>
                            <NavLink to="/" className='nav-link'> Home </NavLink>
                            <NavLink to="/pricing" className='nav-link'> About </NavLink>
                            <NavLink to="/" className='nav-link'> Projects </NavLink>
                            <NavLink to="/contact" className='nav-link'> Contacts </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagess">
                {children}
            </div>
        </div>
    );
}
 
export default Layout
;