import { NavLink } from "react-router-dom";
import './layout.css';
import logoo from './logoo.png';

const Layout = ({children}) => {
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
                    <NavLink to='/projects'>Contacts</NavLink>
                </div>
                <div className="others">
                    <button className="bttn">Let's talk </button>
                    <span className="bttn">menu</span>
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