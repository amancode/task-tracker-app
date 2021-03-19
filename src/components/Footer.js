import {Link} from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Footer = () => {

    return (
        <footer>
            <Link to = '/' ><FaHome style = {{inlineSize : '20px', width : '4em' }} /></Link>
            <Link to = 'about' ><FaInfoCircle style = {{inlineSize : '20px' }} /></Link>
            <a href = "https://github.com/" target = "blank"><FaGithub style = {{inlineSize : '20px', width : '4em' }} /></a>
        </footer>
    )
}

export default Footer
