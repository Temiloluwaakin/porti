//import { Link } from 'react-router-dom';
import './contactstyle.css'

import mail2 from './images/mail2.png'
import insta from './images/insta.png'
import phone from './images/phone.png'



const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>You can get in touch with the following to get started</p>
            <div className='contacts'>
                <div className='conts' onClick={ () => window.location = 'mailto:akinboade12345@gmail.com'}>
                    <img src={mail2} className='imgg' alt='mail' width='250px' height='150px'/>
                    <p>EMAIL</p>
                    <button className='linkk'>akdgggd124@gmail.com</button>
                </div>
                <a href='http://www.instagram.com/akin_t' className='conts'>
                    <img src={insta} className='imgg' alt='mail' width='250px' height='150px'/>
                    <p>INSTAGRAM</p>
                    <button className='linkk'>Follow Me</button>
                </a>
                <div className='conts' onClick={ () => window.location = 'callto:+2348033424446'}>
                    <img src={phone} className='imgg' alt='mail' width='250px' height='150px'/>
                    <p>PHONE</p>
                    <button className='linkk'>+2348065477798</button>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;