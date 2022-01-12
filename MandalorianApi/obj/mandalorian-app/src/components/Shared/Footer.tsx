import { FC } from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer : FC = () => {
    return (
       <div className="footer"> 
                <Link id="footerLink" to="admin">Admin</Link>
       </div>
    )
}

export default Footer;