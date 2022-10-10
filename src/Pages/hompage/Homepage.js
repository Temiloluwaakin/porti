import { Link } from "react-router-dom";
import './hompagestyle.css'

import myyy from "./images/myyy.png"
import schheader4 from "./images/schheader4.PNG"


const Homepage = () => {
    return (
        <div className="homepage">

            <div className="fll">
                <h2 id="txtt">HI, I'M TEMILOLUWA. A FRONT-END WEB DEVELOPER BASED IN NIGERIA
                    <Link to='/contact' className="but">Let's Talk</Link>
                </h2>
                <img src={myyy} alt="imag" className="iii"/>
            </div>

            <div className="linkkk">
                <span><Link to="/"> BRANDING</Link></span>
                <span><Link to="/"> DEVELOPMENT</Link></span>
                <span><Link to="/"> STRATEGY</Link></span>
                <span><Link to="/"> PRODUCT DESIGN</Link></span>
                <span><Link to="/"> MOTION GRAPHICS</Link></span>
            </div>

            <div className="projectss">
                <h1>Projects</h1>
                <p>Accomplished Works and Sample</p>
                <div className="proj">
                    <div className="lft">
                        <img src={schheader4} alt="imag" className="iiii"/>
                    </div>
                    <span className="rtt">
                        <h2 >DESIGN</h2>
                        <h1 id="stt">Beautiful and advanced website interface</h1>
                        <Link to='/' className="rdm">Read More</Link>
                    </span>
                </div>
                <div className="proj">
                    <span className="rtt">
                        <h2 >DESIGN</h2>
                        <h1 id="stt">Beautiful and advanced website interface</h1>
                        <Link to='/' className="rdm">Read More</Link>
                    </span>
                    <div className="lft">
                        <img src={schheader4} alt="imag" className="iiii"/>
                    </div>

                </div>
            </div>

            <div className="servi">
                <h1>Services</h1>
                <p>Accomplished Works and Sample</p>
                <div className="servs">
                    <div className="serv">
                        <h2>Web Design</h2>
                        <p>Design to us is something magical, we are lucky that you chose us. 
                            Let us get creative and build new products
                        </p>
                    </div>
                    <div className="serv">
                        <h2>web design</h2>
                        <p>Design to us is something magical, we are lucky that you chose us. 
                            Let us get creative and build new products
                        </p>
                    </div>
                    <div className="serv">
                        <h2>web design</h2>
                        <p>Design to us is something magical, we are lucky that you chose us. 
                            Let us get creative and build new products
                        </p>
                    </div>
                    <div className="serv">
                        <h2>web design</h2>
                        <p>Design to us is something magical, we are lucky that you chose us. 
                            Let us get creative and build new products
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Homepage;