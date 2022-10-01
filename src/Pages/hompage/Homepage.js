import { Link } from "react-router-dom";
import './hompagestyle.css'

import myyy from "./myyy.png"


const Homepage = () => {
    return (
        <div className="homepage">
            <div className="fll">
                <h2>HI, I'M TEMILOLUWA. A FRONT-END WEB DEVELOPER BASED IN NIGERIA</h2>
                <img src={myyy} alt="imag" className="iii"/>
            </div>
            <div className="linkkk">
                <span><Link to="/"> BRANDING</Link></span>
                <span><Link to="/"> DEVELOPMENT</Link></span>
                <span><Link to="/"> STRATEGY</Link></span>
                <span><Link to="/"> PRODUCT DESIGN</Link></span>
                <span><Link to="/"> MOTION GRAPHICS</Link></span>
            </div>
        </div>
    );
}
 
export default Homepage;